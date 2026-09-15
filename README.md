# 🌿 Centro La Seda — Psicología y Crecimiento

Sitio web corporativo y plataforma pública para el **Centro La Seda**, un espacio multidisciplinar de psicología, psicoterapia, talleres vivenciales y formación especializada ubicado en Granada.

Este proyecto está desarrollado con un enfoque de alto rendimiento, maquetación editorial premium y optimización quirúrgica para SEO Local (Google EEAT y posicionamiento en Granada).

---

## 🚀 Tecnologías Principales

* **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js 3 - SSR habilitado para SEO).
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo y utilidades fluidas).
* **Entorno:** [Docker](https://www.docker.com/) & Docker Compose (Contenedores aislados para desarrollo).
* **Servidor de Desarrollo:** Vite (HMR - Hot Module Replacement rápido).

---

## 🎨 Identidad Visual y Estilo

El sitio sigue una línea de diseño limpia, minimalista y orgánica orientada a transmitir paz, confianza y profesionalidad:

* **Fondo General (Crema Suave):** `#FDFBF9` (o clases `bg-stone-50`)
* **Texto Principal (Antracita):** `#27252B` (o clases `text-stone-900`)
* **Color de Acento (Verde Musgo):** `#71B1A5`
* **Tipografía:** Combinación editorial usando familias *Serif* para encabezados principales e *Italics* estéticas, y *Sans* para bloques de lectura limpios.

---

## 📂 Estructura del Proyecto (Estructura Nuxt 4 / App layer)

```text
LASEDA/
├── app/                      # Capa principal de la aplicación visual
│   ├── layouts/              # Plantillas globales (Menu, estructuras comunes)
│   │   └── default.vue
│   ├── pages/                # Enrutamiento automático basado en archivos
│   │   ├── conocenos.vue     # Equipo, filosofía y espacio físico
│   │   ├── contacto.vue      # Formulario de conversión y datos locales
│   │   ├── formaciones.vue   # Especialización para profesionales
│   │   ├── index.vue         # Landing page principal (Home)
│   │   ├── talleres.vue      # Constelaciones familiares y espacios grupales
│   │   └── terapias.vue      # Catálogo de psicología clínica
│   └── app.vue               # Componente raíz de Nuxt
├── public/                   # Archivos estáticos accesibles directamente
│   └── images/               # Logos, iconos y recursos multimedia locales
├── docker-compose.yml        # Configuración del contenedor de desarrollo
├── nuxt.config.ts            # Configuración global de Nuxt y módulos
└── README.md                 # Documentación del proyecto