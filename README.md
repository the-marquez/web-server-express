# Web Server Express

Un servidor web robusto y ligero construido con **Node.js**, **Express** y **TypeScript**. Está configurado especialmente para servir aplicaciones de una sola página (SPA) como React, Vue o Angular, garantizando que el enrutamiento del lado del cliente funcione correctamente gracias a su configuración de *catch-all* para rutas no encontradas.

## 🚀 Características

- **TypeScript Nativo:** Desarrollo tipado sin necesidad de transpiladores complejos en desarrollo gracias a `--experimental-strip-types` de Node.js v24+.
- **Express 5.x Ready:** Enrutamiento moderno y soporte nativo para promesas.
- **Validación de Entorno:** Configuración estricta y segura de variables de entorno utilizando `env-var` y `dotenv`.
- **SPA Fallback:** Cualquier ruta no definida en la API redirige automáticamente a `index.html`, permitiendo que el *router* del frontend tome el control.

## 📋 Requisitos Previos

Asegúrate de tener instalado en tu entorno:
- Node.js (v24.x o superior recomendado)
- npm o yarn

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/the-marquez/web-server-express.git](https://github.com/the-marquez/web-server-express.git)
   cd web-server-express