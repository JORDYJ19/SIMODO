function doGet(event) {
  var parameters = event && event.parameter ? event.parameter : {};
  var callback = parameters.callback || "";

  if (callback && !/^simodoJsonp_[A-Za-z0-9_]+$/.test(callback)) {
    return createResponse({ ok: false, error: "Callback inválido." });
  }

  try {
    var dni = normalizeDni(parameters.dni);
    if (!/^\d{8}$/.test(dni)) {
      return createResponse({ ok: false, error: "Ingresa un DNI válido de 8 dígitos." }, callback);
    }

    var spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
    if (!spreadsheetId) {
      throw new Error("Configura la propiedad SPREADSHEET_ID del proyecto de Apps Script.");
    }

    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var superusers = readTable(spreadsheet, "SUPERUSUARIOS", ["nombre", "cargo", "dni"]);
    var personnel = readTable(spreadsheet, "DOCENTES", [
      "nombre",
      "area",
      "dni",
      "coordinador1",
      "coordinador2",
    ]);
    var user = superusers.find(function (record) {
      return record.dni === dni;
    });

    if (!user) {
      return createResponse({ ok: false, error: "DNI no autorizado." }, callback);
    }

    var isDirector = normalizeText(user.cargo) === "directora";
    var assignedPersonnel = personnel.filter(function (person) {
      if (isDirector) {
        return person.dni !== dni;
      }
      return person.coordinador1 === dni || person.coordinador2 === dni;
    });

    return createResponse({
      ok: true,
      usuario: {
        nombre: user.nombre,
        rol: user.cargo,
        dni: user.dni,
      },
      docentes: assignedPersonnel.map(function (person) {
        return {
          nombre: person.nombre,
          area: person.area,
          dni: person.dni,
        };
      }),
    }, callback);
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    return createResponse({
      ok: false,
      error: error && error.message
        ? error.message
        : "No se pudo leer la información de Google Sheets.",
    }, callback);
  }
}

function readTable(spreadsheet, sheetName, requiredHeaders) {
  var sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error('No existe la pestaña "' + sheetName + '".');
  }

  var values = sheet.getDataRange().getDisplayValues();
  if (!values.length) {
    throw new Error('La pestaña "' + sheetName + '" no tiene encabezados.');
  }

  var headers = values[0].map(normalizeHeader);
  var missingHeaders = requiredHeaders.filter(function (header) {
    return headers.indexOf(header) === -1;
  });
  if (missingHeaders.length) {
    throw new Error(
      'Faltan encabezados en "' + sheetName + '": ' + missingHeaders.join(", ") + "."
    );
  }

  var records = [];
  for (var rowIndex = 1; rowIndex < values.length; rowIndex += 1) {
    var cells = values[rowIndex];
    if (cells.every(function (cell) { return !String(cell).trim(); })) {
      continue;
    }

    var record = {};
    headers.forEach(function (header, columnIndex) {
      if (header) {
        record[header] = String(cells[columnIndex] || "").trim();
      }
    });

    var name = record.nombre || "";
    var dni = normalizeDni(record.dni);
    if (!name || !/^\d{8}$/.test(dni)) {
      throw new Error(
        'Hay nombre o DNI incompleto en "' + sheetName + '", fila ' + (rowIndex + 1) + "."
      );
    }

    record.nombre = name;
    record.dni = dni;
    if (Object.prototype.hasOwnProperty.call(record, "coordinador1")) {
      record.coordinador1 = normalizeDni(record.coordinador1);
      record.coordinador2 = normalizeDni(record.coordinador2);
    }
    records.push(record);
  }

  return records;
}

function normalizeHeader(value) {
  return normalizeText(value).replace(/\s+/g, "");
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeDni(value) {
  var digits = String(value || "").replace(/\D/g, "");
  if (!digits || digits.length > 8) {
    return "";
  }
  return ("00000000" + digits).slice(-8);
}

function createResponse(payload, callback) {
  var output = ContentService.createTextOutput(
    callback ? callback + "(" + JSON.stringify(payload) + ");" : JSON.stringify(payload)
  );
  output.setMimeType(
    callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON
  );
  return output;
}
