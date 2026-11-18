# SIMODO

## Inicio de sesión local

Abre `index.html` en la raíz del proyecto; este redirige a la aplicación. La página principal y los archivos están organizados así:

- `index.html`: punto de entrada para Live Server.
- `HTML/`: página principal.
- `JS/`: acceso por DNI y lógica del panel de evaluación.
- `CSS/`: estilos de la página y del panel.

El ingreso y las asignaciones se resuelven localmente en `JS/login.js`; el panel de preguntas está separado en `JS/PanelEvaluacion.js` y `CSS/PanelEvaluacion.css`.

Después de ingresar el DNI, el usuario elige un docente de su lista asignada. El área se completa al seleccionarlo y se responden Sí/No a los siete criterios de estructura de sesión incluidos. El botón **Ver consolidado** muestra un resumen temporal; cambiar de docente limpia las respuestas.

Los datos y las respuestas no se envían ni guardan en un servidor. **Importante:** no es una autenticación segura. La lista completa queda visible en el código del navegador y cualquier persona que conozca un DNI autorizado puede entrar. No usar con información real o en producción sin validar el acceso en un servidor y añadir otra forma de verificar la identidad.