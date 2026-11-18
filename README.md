# SIMODO

## Inicio de sesión local

Abre `index.html` en la raíz del proyecto; este redirige a la aplicación. La página principal y los archivos están organizados así:

- `index.html`: punto de entrada para Live Server.
- `HTML/`: página principal.
- `JS/`: acceso por DNI y lógica del panel de evaluación.
- `CSS/`: estilos de la página y del panel.

El ingreso y las asignaciones se resuelven localmente en `JS/login.js`; el panel de preguntas está separado en `JS/PanelEvaluacion.js` y `CSS/PanelEvaluacion.css`.

Los nueve perfiles autorizados pueden iniciar sesión con su DNI. Las cuatro asignaciones de coordinadores y las de la directora se mantienen; la subdirectora, PIP, CIST y coordinación de tutoría tienen acceso, pero por ahora no tienen docentes asignados.

Para agregar las fotos, coloca cada imagen JPG en `IMG/Perfiles/` con el DNI como nombre de archivo, por ejemplo `21814585.jpg`. El perfil correspondiente mostrará automáticamente esa imagen; mientras falte, aparecerá el avatar genérico.

El logo institucional se carga desde `IMG/Perfiles/logo.jpg`.

Después de ingresar el DNI, el usuario elige a una persona de su lista y pulsa **EVALUAR** para abrir las preguntas en una ventana. El detalle muestra el área de los docentes o el cargo del personal administrativo. Las respuestas Sí/No y el consolidado son temporales; no se guardan en un servidor.

Los datos y las respuestas no se envían ni guardan en un servidor. **Importante:** no es una autenticación segura. La lista completa queda visible en el código del navegador y cualquier persona que conozca un DNI autorizado puede entrar. No usar con información real o en producción sin validar el acceso en un servidor y añadir otra forma de verificar la identidad.