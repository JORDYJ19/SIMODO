# SIMODO

## Inicio de sesión

Abre `index.html` en la raíz del proyecto; este redirige a `HTML/simodo.html`. La página principal y los archivos están organizados así:

- `index.html`: punto de entrada para Live Server.
- `HTML/simodo.html`: página principal.
- `JS/`: acceso por DNI y lógica del panel de evaluación.
- `CSS/`: estilos de la página y del panel.

El panel de preguntas está separado en `JS/PanelEvaluacion.js` y `CSS/PanelEvaluacion.css`. El acceso y las asignaciones se consultan desde las pestañas `SUPERUSUARIOS` y `DOCENTES` de Google Sheets mediante el servicio de lectura en `AppsScript/Code.gs`.

Los perfiles autorizados y el personal evaluado se leen de la hoja de cálculo al iniciar sesión. Al borrar una fila de `DOCENTES`, esa persona deja de aparecer en la siguiente consulta. Las fotos de perfil continúan cargándose localmente desde `IMG/Perfiles/`.

Para agregar las fotos, coloca cada imagen JPG en `IMG/Perfiles/` con el DNI como nombre de archivo, por ejemplo `21814585.jpg`. El perfil correspondiente mostrará automáticamente esa imagen; mientras falte, aparecerá el avatar genérico.

El logo institucional se carga desde `IMG/Perfiles/logo.jpg`.

Después de ingresar el DNI, el usuario elige a una persona de su lista y pulsa **EVALUAR** para abrir las preguntas en una ventana. El detalle muestra el área de los docentes o el cargo del personal administrativo. Las respuestas Sí/No y el consolidado son temporales; no se guardan en un servidor.

### Configuración de Google Sheets

1. Crea un proyecto en [Google Apps Script](https://script.google.com/) y copia el contenido de `AppsScript/Code.gs`.
2. En la configuración del proyecto, agrega la propiedad de script `SPREADSHEET_ID` con el ID de la hoja de cálculo.
3. Despliega como aplicación web, selecciona **Ejecutar como: yo**, autoriza el acceso a la hoja y permite solicitudes de **cualquiera**. Hazlo únicamente con datos ficticios; ese ajuste deja el servicio accesible públicamente.
4. Copia la URL del despliegue que termina en `/exec` y asígnala a `DATA_API_URL` en `JS/login.js`.
5. Inicia sesión con un DNI de `SUPERUSUARIOS`. La directora (cargo `directora`) verá a todo el personal excepto su propio registro; los demás superusuarios verán las filas donde su DNI aparezca en `coordinador1` o `coordinador2`.

Los encabezados requeridos son `nombre`, `cargo` y `dni` en `SUPERUSUARIOS`, y `nombre`, `area`, `dni`, `coordinador1` y `coordinador2` en `DOCENTES`. Las columnas `area0`–`area5` son informativas; `tutoria` y `cotutoria` no se usan para asignar evaluados.

**Uso de demostración:** con acceso solo por DNI no se verifica la identidad. Si el despliegue de Apps Script admite solicitudes desde fuera de tu cuenta, sus datos pueden consultarse fuera de SIMODO. Utiliza únicamente datos ficticios con esta configuración; para datos reales se debe añadir autenticación de cuentas autorizadas y no exponer una API pública de consulta por DNI. Las respuestas de evaluación siguen siendo temporales y no se guardan en un servidor.