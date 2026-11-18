const DATA_API_URL = "https://script.google.com/macros/s/AKfycbxw3vbxjGqgdSmtSuCnAU_E132KfbGkFvmKnC6Uu-pruJy1cyMLTujkAE1R2kDuWhmv/exec";
let jsonpRequestCount = 0;

const app = document.querySelector("#login-app");

app.innerHTML = `
  <section id="app-shell" class="login-layout">
    <div class="decorative-dots decorative-dots-top" aria-hidden="true"></div>
    <div class="decorative-dots decorative-dots-bottom" aria-hidden="true"></div>
    <div class="login-card">
      <header id="app-header" class="app-header" hidden>
        <div class="brand-lockup">
          <div class="brand-mark" aria-hidden="true">
            <img src="../IMG/Perfiles/logo.jpg" alt="Logo del colegio Simón Bolívar de Sunampe, Chincha">
          </div>
          <div class="brand-copy">
            <strong>SIMODO</strong>
            <span>Sistema de Monitoreo Docente</span>
          </div>
        </div>
        <div class="header-actions" aria-hidden="true">
          <span class="header-avatar">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-7 8-7s8 3 8 7"/></svg>
          </span>
          <span class="header-check">⌄</span>
        </div>
      </header>

      <section id="welcome-hero" class="welcome-hero" hidden>
        <div class="welcome-copy">
          <p>Bienvenido a</p>
          <h1>SIMODO</h1>
        </div>
        <div class="hero-illustration" aria-hidden="true">
          <svg viewBox="0 0 340 220">
            <ellipse cx="176" cy="192" rx="146" ry="13" fill="#dbe5f8"/>
            <rect x="76" y="22" width="207" height="144" rx="12" fill="#fff" stroke="#aab8d5" stroke-width="9"/>
            <rect x="91" y="38" width="177" height="113" rx="6" fill="#f3f6fd"/>
            <rect x="105" y="53" width="75" height="82" rx="8" fill="#e7edfa"/>
            <rect x="117" y="105" width="13" height="20" rx="3" fill="#9babca"/>
            <rect x="137" y="82" width="13" height="43" rx="3" fill="#9babca"/>
            <rect x="157" y="67" width="13" height="58" rx="3" fill="#9babca"/>
            <rect x="190" y="53" width="64" height="82" rx="8" fill="#e7edfa"/>
            <path d="m197 78 21-12 30 19-21 12-30-19Z" fill="#7e8eaf"/>
            <path d="m206 83 2 17c7 8 21 9 29 1l4-16-16 9-19-11Z" fill="#7e8eaf"/>
            <path d="M52 171h255l18 13H34l18-13Z" fill="#8494b3"/>
            <path d="M166 171h30l8 9h-47l9-9Z" fill="#dbe3f1"/>
          </svg>
        </div>
      </section>

      <form id="login-form" class="dni-form">
        <div class="dni-heading">
          <span class="dni-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <circle cx="15" cy="16" r="7"/>
              <path d="M4 39c0-8 4-13 11-13s11 5 11 13H4Z"/>
              <path d="M30 13h14M30 22h14M30 31h10"/>
            </svg>
          </span>
          <label for="dni">DNI</label>
        </div>
        <div class="dni-entry">
          <svg class="dni-entry-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 21c0-4 3-7 8-7s8 3 8 7"/>
          </svg>
          <input
            id="dni"
            name="dni"
            type="text"
            inputmode="numeric"
            autocomplete="username"
            pattern="[0-9]{8}"
            maxlength="8"
            placeholder="Ingresa tu DNI"
            aria-describedby="dni-help"
            required
          >
          <button id="submit-button" class="login-submit" type="submit" aria-label="Ingresar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </div>
        <span id="dni-help" class="field-help">Ingresa los 8 dígitos de tu DNI.</span>
      </form>

      <p id="login-message" class="message" role="status" aria-live="polite"></p>
      <section id="assignments" class="assignments" aria-live="polite" hidden>
        <div class="results-heading">
          <div class="person-profile">
            <span class="person-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-7 8-7s8 3 8 7"/></svg>
              <img id="profile-photo" alt="" hidden>
            </span>
            <div>
              <p>Panel de evaluación</p>
              <h2 id="welcome-name"></h2>
            </div>
          </div>
          <span id="user-role" class="role-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 21 6v6c0 5-4 8-9 10-5-2-9-5-9-10V6l9-4Z"/><path d="m8 12 2.5 2.5L16 9"/></svg>
            <span></span>
          </span>
        </div>
        <div id="evaluation-panel"></div>
      </section>

      <p class="security-note" hidden>Modo local de demostración.</p>
    </div>
  </section>
`;

const appShell = document.querySelector("#app-shell");
const form = document.querySelector("#login-form");
const dniInput = document.querySelector("#dni");
const message = document.querySelector("#login-message");
const assignments = document.querySelector("#assignments");
const loginCard = document.querySelector(".login-card");
const appHeader = document.querySelector("#app-header");
const welcomeHero = document.querySelector("#welcome-hero");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "";
  message.classList.remove("message-error");

  const dni = dniInput.value.trim();
  if (!/^\d{8}$/.test(dni)) {
    showError("Ingresa un DNI válido de 8 dígitos.");
    dniInput.focus();
    return;
  }

  const submitButton = document.querySelector("#submit-button");
  submitButton.disabled = true;
  message.classList.add("message-pending");
  message.textContent = "Consultando los datos del colegio...";

  try {
    const result = await loadAssignments(dni);
    message.classList.remove("message-pending");
    renderAssignments(result);
  } catch (error) {
    message.classList.remove("message-pending");
    showError(error.message || "No se pudo consultar la lista del colegio.");
  } finally {
    submitButton.disabled = false;
  }
});

function loadAssignments(dni) {
  if (!DATA_API_URL) {
    return Promise.reject(new Error("Falta configurar la URL del servicio de Google Sheets."));
  }

  return new Promise((resolve, reject) => {
    const callbackName = `simodoJsonp_${Date.now()}_${++jsonpRequestCount}`;
    const script = document.createElement("script");
    const requestUrl = new URL(DATA_API_URL);
    let timeoutId;

    function cleanup() {
      clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (response) => {
      cleanup();
      if (!response || response.ok !== true) {
        reject(new Error(response && response.error
          ? response.error
          : "El servicio devolvió una respuesta inválida."));
        return;
      }

      resolve(response);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("No se pudo conectar con Apps Script. Revisa la URL y el despliegue."));
    };
    script.async = true;
    requestUrl.searchParams.set("dni", dni);
    requestUrl.searchParams.set("callback", callbackName);
    script.src = requestUrl.toString();
    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error("La consulta tardó demasiado. Inténtalo nuevamente."));
    }, 15000);
    document.head.append(script);
  });
}

function renderAssignments(result) {
  const user = result.usuario;
  if (!user || typeof user.nombre !== "string" || typeof user.rol !== "string"
      || typeof user.dni !== "string"
      || !Array.isArray(result.docentes) || typeof window.PanelEvaluacion !== "function") {
    showError("No se pudo preparar el panel de evaluación.");
    return;
  }

  const profilePhoto = document.querySelector("#profile-photo");
  profilePhoto.hidden = true;
  profilePhoto.onload = () => {
    profilePhoto.hidden = false;
  };
  profilePhoto.onerror = () => {
    profilePhoto.hidden = true;
  };
  profilePhoto.src = `../IMG/Perfiles/${user.dni}.jpg`;

  document.querySelector("#welcome-name").textContent = user.nombre
    .toLocaleLowerCase("es")
    .replace(/(^|\s)\S/g, (part) => part.toUpperCase());
  document.querySelector("#user-role span").textContent = user.rol;
  appHeader.hidden = false;
  welcomeHero.hidden = false;
  form.hidden = true;
  appShell.classList.add("dashboard-mode");
  loginCard.classList.add("login-card-expanded");
  new window.PanelEvaluacion(document.querySelector("#evaluation-panel"), result.docentes);
  assignments.hidden = false;
  message.textContent = "";
}

function showError(text) {
  message.classList.remove("message-pending");
  assignments.hidden = true;
  message.textContent = text;
  message.classList.add("message-error");
}
