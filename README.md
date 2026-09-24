# Uncle Sam Says — PWA

Versión preparada para publicar en GitHub Pages e instalarse como aplicación desde un navegador compatible.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **todo el contenido de esta carpeta** manteniendo la estructura de `icons/` y `assets/`.
3. En el repositorio entra a **Settings → Pages**.
4. Selecciona **Deploy from a branch**.
5. Selecciona la rama que contiene estos archivos y la carpeta `/ (root)`.
6. Abre la URL HTTPS que GitHub Pages te proporcione.
7. Desde el navegador, usa **Instalar aplicación / Add to Home screen**.

> La instalación PWA y el Service Worker requieren HTTPS (GitHub Pages lo proporciona automáticamente).

## Estructura

- `index.html` — aplicación principal.
- `standalone.html` — versión standalone existente.
- `manifest.webmanifest` — configuración PWA, nombre, colores e iconos.
- `sw.js` — Service Worker y caché offline.
- `icons/` — iconos para navegador, Android y dispositivos Apple.
- `assets/logo-source.png` — logo original generado para el proyecto.

## Nota

Esta versión conserva la aplicación sin las funciones de micrófono/reconocimiento de voz y utiliza la versión corregida de la interfaz de **Mi estado**.

## Botón "Instalar app"

La aplicación incluye un botón **📲 Instalar app**. En navegadores compatibles (por ejemplo Chrome en Android, usando HTTPS) abre directamente el diálogo nativo de instalación mediante `beforeinstallprompt`, sin que el usuario tenga que buscar la opción en el menú del navegador.

En iPhone/iPad, iOS no permite que una página web invoque programáticamente el instalador; en ese caso el botón informa al usuario de la limitación y se debe usar la opción de instalación del navegador.


### 🦅 Animación del águila
La aplicación incluye una animación de vuelo de 12 fotogramas en `assets/animations/`. El Service Worker precarga los fotogramas para que el águila también funcione cuando la PWA está sin conexión. Si el movimiento está reducido en el dispositivo (`prefers-reduced-motion`), la animación se desactiva respetuosamente.

## Cambios recientes
- El idioma de la interfaz se detecta automáticamente desde el idioma preferido del dispositivo en el primer inicio; una selección manual se conserva en el navegador.
- En preguntas de opción múltiple, cuando una pregunta tiene varias respuestas aceptadas, se selecciona aleatoriamente una de ellas como la única respuesta correcta mostrada.
- **Reportar un problema:** botón fijo abajo a la derecha (y también se abre agitando el celular) con un menú de problemas comunes de este tipo de apps (no carga, no guarda progreso, pregunta/respuesta incorrecta, traducción, problema visual, se congela/cierra, error al instalar, otro). En iPhone, la primera vez que se toca el botón se pide permiso para detectar el movimiento del celular; en Android no hace falta.
- **Reportar pregunta:** al responder cualquier pregunta aparece, junto a "Continuar", un botón "Reportar pregunta" que guarda la pregunta, tu respuesta y las respuestas correctas.
- Ambos tipos de reporte se guardan en el dispositivo (localStorage) y se pueden exportar como archivo CSV desde **Preferencias → Reportes → Exportar reportes (CSV)**, listo para abrir en Excel o Google Sheets.
- Todo lo anterior está traducido a los 5 idiomas de la app (español, inglés, chino, tagalo, vietnamita) y cambia automáticamente si cambias el idioma.
