(() => {
  const questions = [
    "En el diseño de la sesión de aprendizaje, ¿se presentan los momentos: inicio, desarrollo y cierre?",
    "En el diseño de la sesión, ¿se observa la distribución del tiempo para el desarrollo de los momentos y actividades de aprendizaje?",
    "En el diseño de la sesión, ¿se evidencia la aplicación del enfoque y los procesos pedagógicos y didácticos del área?",
    "¿La sesión de aprendizaje evidencia coherencia entre la competencia, el propósito, los criterios de evaluación, el producto y la organización de actividades?",
    "¿El instrumento de evaluación establece los criterios de evaluación?",
    "En el diseño de la sesión, ¿se prevé el uso de los textos del MINEDU, materiales y/o recursos educativos?",
    "En la sesión, ¿los textos del MINEDU, materiales y/o recursos educativos previstos guardan relación con las actividades de aprendizaje?",
  ];

  class PanelEvaluacion {
    constructor(root, docentes, onChangeUser) {
      this.root = root;
      this.docentes = docentes;
      this.onChangeUser = onChangeUser;
      this.render();
    }

    render() {
      this.root.innerHTML = `
        <section class="evaluation-panel" aria-labelledby="evaluation-title">
          <div class="evaluation-heading">
            <div class="evaluation-heading-main">
              <span class="section-heading-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 19h16M6 16V9m6 7V5m6 11v-4"/></svg>
              </span>
              <h3 id="evaluation-title">Datos del docente a evaluar</h3>
            </div>
            <span class="evaluation-count">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 19c0-3 2-5 6-5s6 2 6 5H2Zm11 0c0-2 1-4 4-4s5 2 5 4h-9Z"/></svg>
              <span>${this.docentes.length} asignados</span>
            </span>
          </div>

          <div class="teacher-picker">
            <div class="form-field">
              <label for="teacher-select">Nombre del docente</label>
              <select id="teacher-select" required>
                <option value="">Selecciona un docente</option>
              </select>
            </div>
            <div class="area-field" aria-live="polite">
              <span>Área del docente</span>
              <div>
                <strong id="teacher-area">Sin seleccionar</strong>
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></svg>
              </div>
            </div>
            <button id="change-user" class="change-user-button" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>
              <span>Cambiar usuario</span>
            </button>
          </div>

          <form id="evaluation-form" class="evaluation-form" hidden>
            <div class="question-heading">
              <div>
                <p class="evaluation-eyebrow">Criterios de observación</p>
                <h3>Estructura de la sesión</h3>
              </div>
              <p>Marca una respuesta por cada pregunta.</p>
            </div>
            <div id="question-list" class="question-list"></div>
            <p id="evaluation-message" class="evaluation-message" role="alert" hidden></p>
            <div class="evaluation-actions">
              <button class="consolidate-button" type="submit">Ver consolidado</button>
            </div>
          </form>

          <section id="evaluation-summary" class="evaluation-summary" aria-live="polite" hidden>
            <div class="summary-heading">
              <div>
                <p class="evaluation-eyebrow">Resultado</p>
                <h3>Consolidado de evaluación</h3>
              </div>
              <button id="edit-evaluation" class="edit-button" type="button">Editar respuestas</button>
            </div>
            <p id="summary-teacher" class="summary-teacher"></p>
            <ol id="summary-answers" class="summary-answers"></ol>
            <p class="local-only-note">Este consolidado es temporal y no se guarda al cerrar la página.</p>
          </section>
        </section>
      `;

      this.teacherSelect = this.root.querySelector("#teacher-select");
      this.areaLabel = this.root.querySelector("#teacher-area");
      this.form = this.root.querySelector("#evaluation-form");
      this.questionList = this.root.querySelector("#question-list");
      this.message = this.root.querySelector("#evaluation-message");
      this.summary = this.root.querySelector("#evaluation-summary");
      this.buildTeacherOptions();
      this.buildQuestions();
      this.teacherSelect.addEventListener("change", () => this.selectTeacher());
      this.form.addEventListener("submit", (event) => this.showConsolidated(event));
      this.root.querySelector("#change-user").addEventListener("click", this.onChangeUser);
      this.root.querySelector("#edit-evaluation").addEventListener("click", () => {
        this.summary.hidden = true;
        this.form.hidden = false;
      });
    }

    buildTeacherOptions() {
      for (const docente of this.docentes) {
        if (!docente || typeof docente.nombre !== "string" || typeof docente.dni !== "string"
            || typeof docente.area !== "string") {
          throw new Error("La lista de docentes asignados contiene datos incompletos.");
        }

        const option = document.createElement("option");
        option.value = docente.dni;
        option.textContent = docente.nombre;
        this.teacherSelect.append(option);
      }
    }

    buildQuestions() {
      questions.forEach((question, index) => {
        const item = document.createElement("div");
        const prompt = document.createElement("div");
        const number = document.createElement("span");
        const text = document.createElement("span");
        const answers = document.createElement("div");

        item.className = "question-item";
        item.setAttribute("role", "group");
        item.setAttribute("aria-labelledby", `question-label-${index}`);
        prompt.className = "question-prompt";
        number.className = "question-number";
        number.textContent = String(index + 1);
        text.id = `question-label-${index}`;
        text.className = "question-text";
        text.textContent = question;
        prompt.append(number, text);
        answers.className = "answer-options";

        for (const value of ["Sí", "No"]) {
          const label = document.createElement("label");
          const input = document.createElement("input");
          const caption = document.createElement("span");

          input.type = "radio";
          input.name = `question-${index}`;
          input.value = value;
          input.required = true;
          caption.textContent = value;
          label.className = "answer-choice";
          label.append(input, caption);
          answers.append(label);
        }

        item.append(prompt, answers);
        this.questionList.append(item);
      });
    }

    selectTeacher() {
      const selected = this.docentes.find((docente) => docente.dni === this.teacherSelect.value);
      this.areaLabel.textContent = selected ? selected.area : "Sin seleccionar";
      this.form.hidden = !selected;
      this.summary.hidden = true;
      this.message.hidden = true;
      this.form.reset();
    }

    showConsolidated(event) {
      event.preventDefault();
      this.message.hidden = true;

      if (!this.form.reportValidity()) {
        this.message.textContent = "Responde Sí o No en cada pregunta para ver el consolidado.";
        this.message.hidden = false;
        return;
      }

      const teacher = this.docentes.find((docente) => docente.dni === this.teacherSelect.value);
      if (!teacher) {
        this.message.textContent = "Selecciona un docente asignado antes de continuar.";
        this.message.hidden = false;
        return;
      }

      const answers = questions.map((question, index) => ({
        question,
        answer: this.form.querySelector(`input[name="question-${index}"]:checked`).value,
      }));

      this.root.querySelector("#summary-teacher").textContent = `${teacher.nombre} · ${teacher.area}`;
      const list = this.root.querySelector("#summary-answers");
      list.replaceChildren();
      for (const answer of answers) {
        const item = document.createElement("li");
        const questionText = document.createElement("span");
        const response = document.createElement("strong");
        questionText.textContent = answer.question;
        response.textContent = answer.answer;
        item.append(questionText, response);
        list.append(item);
      }

      this.form.hidden = true;
      this.summary.hidden = false;
    }
  }

  window.PanelEvaluacion = PanelEvaluacion;
})();
