const DIRECTOR_DNI = "21814585";

const evaluators = {
  "21850467": { nombre: "NAPA MESIAS, GABRIEL", rol: "Coordinador de Ciencias Sociales" },
  "21835201": { nombre: "PASACHE MEDINA, FLOR DE MARIA", rol: "Coordinadora de Ciencia y Tecnología" },
  "21868710": { nombre: "RAMOS QUISPE, LUIS ALBERTO", rol: "Coordinador de Matemática" },
  "21461393": { nombre: "YELLESCAS RIOS, BENIGNA YNES", rol: "Coordinadora de Comunicación" },
  "42506694": { nombre: "RAMON BAUTISTA, MIRIAN JAKELYN", rol: "Subdirectora" },
  "45135863": { nombre: "QUISPE SALVADOR, JESABELL", rol: "PIP" },
  "70602726": { nombre: "ROMERO CRUZ, CARLOS ELEODORO", rol: "CIST" },
  "40793925": { nombre: "TASAYCO TASYACO, JOSE EDUARDO", rol: "Coordinador de Tutoría" },
};

const personnel = [
  { nombre: "AGUILAR VALENCIA, CYNTHIA MARIELA", area: "EPT", dni: "44817382", evaluadores: ["21835201"] },
  { nombre: "ALMEYDA ESTEBAN, ANA MARIA", area: "DPCC", dni: "40753258", evaluadores: ["21850467"] },
  { nombre: "ALMEYDA MUNAYCO, SILHUY LISETT", area: "MAT y CYT", dni: "40742689", evaluadores: ["21835201", "21868710"] },
  { nombre: "ANCHANTE TORRES, MILAGROS GUADALUPE", area: "Psicología", dni: "41352202", evaluadores: [] },
  { nombre: "AQUIJE GUZMAN, RICHARD ANTHONY", area: "Edu. Artística", dni: "42363032", evaluadores: ["21461393"] },
  { nombre: "ASTORAYME GALVEZ, JULY LUZ", area: "CYT", dni: "21871746", evaluadores: ["21835201"] },
  { nombre: "ATUNCAR AVALOS, JESUS ANDRES", area: "Edu. Física", dni: "71870168", evaluadores: ["21868710"] },
  { nombre: "ATUNCAR YATACO, PIO", area: "P. Mantenimiento", dni: "21849685", evaluadores: [] },
  { nombre: "AVALOS SARAVIA, JUAN JOSE", area: "Comunicación", dni: "21877673", evaluadores: ["21461393"] },
  { nombre: "AVILES VASQUEZ, ENRIQUE FERNANDO", area: "Comunicación", dni: "21814329", evaluadores: ["21461393"] },
  { nombre: "BENAVIDES TORRES, JORGE SALVADOR", area: "Vigilante", dni: "43400141", evaluadores: [] },
  { nombre: "CAYAMPI VILCHEZ, FERMIN", area: "Auxiliar", dni: "44404505", evaluadores: [] },
  { nombre: "CHAVEZ LEVANO, EDINSON ANIBAL", area: "Edu. Física", dni: "70655455", evaluadores: ["21868710"] },
  { nombre: "CHOQUE YACACO, PILAR", area: "Edu. Artística", dni: "45739536", evaluadores: ["21461393"] },
  { nombre: "CONISLLA CARDENAS, OSCAR RONNY", area: "DPCC", dni: "21813265", evaluadores: ["21850467"] },
  { nombre: "CRISOSTOMO GIRAO, LIDIA BELEN", area: "Matemática", dni: "21795989", evaluadores: ["21868710"] },
  { nombre: "DE LA CRUZ BARRIOS, MILAGROS DEL PILAR", area: "CYT", dni: "41440624", evaluadores: ["21835201"] },
  { nombre: "DE LA CRUZ CARRASCO, MARIA YSABEL", area: "Matemática", dni: "21854941", evaluadores: ["21868710"] },
  { nombre: "DEL RIO MIRANDA, CESAR ORLANDO", area: "Matemática", dni: "21872171", evaluadores: ["21868710"] },
  { nombre: "DELGADO CRISTOBAL, ROSA YOLANDA", area: "Inglés", dni: "70139799", evaluadores: ["21461393"] },
  { nombre: "ECHEGARAY SANCHEZ, JUAN DOMINGO", area: "Edu. Física", dni: "21854433", evaluadores: ["21868710"] },
  { nombre: "ESCOBAR POMA, CAROLINA BRIGIDA", area: "Secretaría", dni: "70057708", evaluadores: [] },
  { nombre: "EUSEBIO ALFARO, EDILBERTO", area: "Comunicación", dni: "21854248", evaluadores: ["21461393"] },
  { nombre: "GARCIA AVALOS, YANET DOMINICA", area: "Matemática", dni: "21870738", evaluadores: ["21868710"] },
  { nombre: "GARCIA RAMOS, ANTONIA PAOLA", area: "Edu. Religiosa", dni: "21882751", evaluadores: ["21850467"] },
  { nombre: "HERNANDEZ GARCIA, NADHIA ISABEL", area: "CYT", dni: "21546008", evaluadores: ["21835201"] },
  { nombre: "HUAMAN MACAZANA, JORGE JAVIER", area: "CYT", dni: "21522668", evaluadores: ["21835201"] },
  { nombre: "HUAPAYA MOYANO, LEONOR ELIZABET", area: "Ciencias Sociales", dni: "74400402", evaluadores: ["21850467"] },
  { nombre: "HUAROTO BENDEZU, ELVIRA ROSARIO", area: "Ciencias Sociales", dni: "21577963", evaluadores: ["21850467"] },
  { nombre: "LEON FLORES, EUMELIA", area: "Inglés", dni: "21579805", evaluadores: ["21461393"] },
  { nombre: "MAGALLANES MARTINEZ, WILMER JOAN", area: "Matemática", dni: "42797290", evaluadores: ["21868710"] },
  { nombre: "MARCELO ANICAMA, PAULO CESAR", area: "Personal de mantenimiento", dni: "43092615", evaluadores: [] },
  { nombre: "MARTINEZ PALOMINO, CARMEN GLADYS", area: "Comunicación", dni: "40027501", evaluadores: ["21461393"] },
  { nombre: "MEJIA MARCOS, ELVIS DUVAL", area: "Matemática", dni: "40746722", evaluadores: ["21868710"] },
  { nombre: "MELO MUJICA, CARMELO GIOVANNI", area: "EPT", dni: "43977726", evaluadores: ["21835201"] },
  { nombre: "MENDOZA MATIAS, DELIA", area: "Tesorería / Biblioteca", dni: "21846881", evaluadores: [] },
  { nombre: "MENDOZA ZUÑIGA, FELICITA EMPERATRIZ", area: "Edu. Religiosa", dni: "21867328", evaluadores: ["21850467"] },
  { nombre: "MEZA HERNANDEZ, LECCI JAVIER", area: "Sin definir", dni: "21850865", evaluadores: [] },
  { nombre: "MONTIEL RAMOS, VANESA", area: "Inglés", dni: "43176421", evaluadores: ["21461393"] },
  { nombre: "MOSAYHUATE MENDOZA, MARIANELLA A AURORA", area: "CyT", dni: "40132916", evaluadores: ["21835201"] },
  { nombre: "MUNAYCO SARAVIA, CARLOS ALBERTO", area: "EPT", dni: "43212935", evaluadores: ["21835201"] },
  { nombre: "NAPA ATUNCAR, NILTON CESAR", area: "DPCC", dni: "21846013", evaluadores: ["21850467"] },
  { nombre: "NAPA MESIAS, GABRIEL", area: "Coordinador CCSS", dni: "21850467", evaluadores: [] },
  { nombre: "PASACHE MEDINA, FLOR DE MARIA", area: "Coordinadora CYT", dni: "21835201", evaluadores: [] },
  { nombre: "PASACHE MEDINA, JULIO CESAR", area: "Ciencias Sociales", dni: "43114464", evaluadores: ["21850467"] },
  { nombre: "PEÑA ROJAS, ROSARIO MILAGRITOS", area: "Auxiliar", dni: "21851869", evaluadores: [] },
  { nombre: "PEÑALOZA TORRES, JULY VERONICA", area: "Comunicación", dni: "46778305", evaluadores: ["21461393"] },
  { nombre: "QUIJANDRIA RAMOS, EVELYN GIANNA", area: "EPT", dni: "44421987", evaluadores: ["21835201"] },
  { nombre: "QUISPE SALVADOR, JESABEL", area: "PIP", dni: "45135863", evaluadores: [] },
  { nombre: "RAMON BAUTISTA, MIRIAN JAKELYN", area: "Subdirectora", dni: "42506694", evaluadores: [] },
  { nombre: "RAMOS QUISPE, LUIS ALBERTO", area: "Coordinador Matemática", dni: "21868710", evaluadores: [] },
  { nombre: "ROMERO CRUZ, CARLOS ELEODORO", area: "CIST", dni: "70602726", evaluadores: [] },
  { nombre: "ROSAS ROJAS, JAVIER ELMER", area: "Edu. Artística", dni: "21846225", evaluadores: ["21461393"] },
  { nombre: "SANCHEZ RAMOS, LUCY JANETH", area: "Ciencias Sociales", dni: "10440224", evaluadores: ["21850467"] },
  { nombre: "SANTIAGO AYBAR, PILAR FABIOLA", area: "Área no especificada", dni: "21872422", evaluadores: [] },
  { nombre: "SOTELO SANCHEZ, ALBERTO DAVID", area: "Auxiliar", dni: "21812193", evaluadores: [] },
  { nombre: "TASAYCO TASYACO, JOSE EDUARDO", area: "Coordinador Tutoría", dni: "40793925", evaluadores: [] },
  { nombre: "TIPIAN LEVANO, VILMA ROSARIO", area: "Directora", dni: DIRECTOR_DNI, evaluadores: [] },
  { nombre: "TORRES ROJAS, ESPERANZA HILDA", area: "Comunicación", dni: "21851901", evaluadores: ["21461393"] },
  { nombre: "VARGAS DEL RIO, MIGUEL ANGEL", area: "Inglés", dni: "21870795", evaluadores: ["21461393"] },
  { nombre: "YEREN ROJAS, GRECIA", area: "Inglés", dni: "43809400", evaluadores: ["21461393"] },
  { nombre: "YELLESCAS RIOS, BENIGNA YNES", area: "Coordinadora Comunicación", dni: "21461393", evaluadores: [] },
  { nombre: "ZAVALA VALENCIA, MILAGRO ELIZABETH", area: "DPCC", dni: "41234795", evaluadores: ["21850467"] },
];

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "";
  message.classList.remove("message-error");

  const dni = dniInput.value.trim();
  if (!/^\d{8}$/.test(dni)) {
    showError("Ingresa un DNI válido de 8 dígitos.");
    dniInput.focus();
    return;
  }

  const evaluator = evaluators[dni];
  if (!evaluator && dni !== DIRECTOR_DNI) {
    showError("DNI NO VALIDO");
    return;
  }

  const assignedPersonnel = dni === DIRECTOR_DNI
    ? personnel.filter((person) => person.dni !== DIRECTOR_DNI)
    : personnel.filter((person) => person.evaluadores.includes(dni));
  const user = evaluator
    ? { ...evaluator, dni }
    : { nombre: "TIPIAN LEVANO, VILMA ROSARIO", rol: "Directora", dni: DIRECTOR_DNI };

  renderAssignments({ usuario: user, docentes: assignedPersonnel });
});

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
  assignments.hidden = true;
  message.textContent = text;
  message.classList.add("message-error");
}
