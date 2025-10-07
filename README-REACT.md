# Juan Jaramillo - Interactive CV (React)

Portfolio interactivo completo construido con React + Vite, featuring el ProfileCard component de React Bits con todas las secciones originales implementadas.

## 🚀 Características

- ✨ **ProfileCard de React Bits** - Tarjeta interactiva con efecto tilt 3D (click en logo "JJ")
- � **Hero Section** - Presentación con floating card animado
- 👤 **About Section** - 3 cards con características principales
- 💼 **Experience Section** - Timeline completo con historial laboral
- 🛠️ **Skills Section** - 3 categorías (Frontend, Backend, Cloud) con barras de progreso animadas
- 🚀 **Projects Section** - 6 proyectos destacados con tags y links
- 📧 **Contact Section** - Formulario funcional e información de contacto
- �🎨 **Diseño moderno** - Glassmorphism, gradientes animados y efectos visuales
- 📱 **Responsive** - Adaptado para todos los dispositivos
- ⚡ **Vite** - Build tool ultrarrápido con HMR
- 🎯 **React 18** - Última versión con hooks modernos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎯 Funcionalidades Implementadas

### 1. Hero Section
- Título con gradiente animado
- Descripción profesional
- 2 botones de acción (Download CV, View Projects)
- Floating card con animación flotante
- Avatar placeholder "JJ"

### 2. About Section
- 3 cards glassmorphism:
  - Innovation (Lightbulb icon)
  - Collaboration (Users icon)
  - Growth (Chart-line icon)
- Animaciones de entrada staggered

### 3. Experience Timeline
- Timeline vertical con línea y marcadores
- 3 experiencias laborales:
  - **Jazusoft** - Full Stack Web Developer (Actual)
  - **Universidad Blas Pascal** - Research Project Collaborator (2024)
  - **Aeropuertos Argentina 2000** - Systems Engineering Intern (2024)
- Tags de tecnologías por experiencia
- Animaciones de slide-in

### 4. Skills & Technologies
- 3 categorías con barras de progreso animadas:
  - **Frontend**: React (90%), Vue.js (85%), Angular (80%), Ionic (85%)
  - **Backend**: .NET Core (88%), Django (82%), Laravel (80%), Node.js (75%)
  - **Cloud & DevOps**: Azure (85%), AWS (75%), CI/CD (80%), Terraform (70%)
- Efecto shimmer en las barras de progreso
- Animación de llenado al cargar la sección

### 5. Projects Section
- 6 proyectos destacados en grid responsive:
  - **E-Commerce Platform** - React, Node.js, Stripe
  - **Analytics Dashboard** - Vue.js, D3.js, Python
  - **Mobile App** - React Native, Firebase, Redux
  - **Facial Recognition** - Python, OpenCV, AI/ML
  - **Cloud Infrastructure** - Azure, AWS, Docker
  - **Full Stack App** - React, .NET, SQL Server
- Labels con gradiente
- Tags de tecnologías
- Links a Live Demo y Code (GitHub)

### 6. Contact Section
- Grid de 2 columnas (Info + Form)
- **Contact Information**:
  - Email: jjuanandres4@gmail.com
  - Phone: +54 9 351 786 6940
  - Location: Córdoba, Argentina
  - Social links: LinkedIn, GitHub, Twitter
- **Contact Form**:
  - Name, Email, Message
  - Validación básica
  - Submit con alert de confirmación

### 7. ProfileCard Modal
- Se abre al hacer click en el logo "JJ"
- Efecto tilt 3D interactivo con el mouse
- Botón "Contact Me" que navega a Contact section
- Cierre con ESC, botón X, o click fuera
- Avatar con gradiente animado
- Info de usuario con mini-avatar
- Status "Available for Work"

## 🎨 Personalización

Para personalizar la ProfileCard, edita `src/App.jsx` línea ~8-18:

```jsx
<ProfileCard
  name="Tu Nombre"              // Cambia aquí
  title="Tu Título"             // Cambia aquí
  handle="tu_usuario"           // Cambia aquí
  status="Tu estado"            // Cambia aquí
  avatarUrl="tu-imagen.jpg"     // Cambia aquí
  contactText="Texto del botón" // Cambia aquí
  enableTilt={true}             // true/false
  onContactClick={handleContactClick}
/>
```

## 🛠️ Estructura del Proyecto

```
/Users/juanjaramillo/Mates/
├── src/
│   ├── components/
│   │   ├── ProfileCard.jsx       # Componente de React Bits
│   │   └── ProfileCard.css       # Estilos del ProfileCard
│   ├── App.jsx                   # Componente principal con todas las secciones
│   ├── App.css                   # Estilos completos de la app
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Estilos globales base
├── index.html                    # HTML base React (Vite)
├── index-vanilla.html            # Tu HTML original (backup)
├── package.json
├── vite.config.js
└── README-REACT.md               # Esta documentación

# Archivos vanilla originales preservados:
├── styles.css
├── script.js
├── advanced-effects.css
├── advanced-effects.js
├── profile-card.js
└── profile-card.css
```

## 🎯 Navegación

La navegación se maneja con estado React (`currentSection`):

```jsx
const [currentSection, setCurrentSection] = useState('hero')
```

Los nav items en el sidebar actualizan este estado al hacer click:
- Home (hero)
- About
- Experience
- Skills
- Projects
- Contact

## 🎨 Efectos Visuales

- **Glassmorphism** en todas las cards
- **Gradientes animados** en títulos y elementos destacados
- **Animaciones de entrada**: fadeInUp, slideInLeft, slideInRight
- **Hover effects** con translateY y scale
- **Floating animation** en hero card
- **Shimmer effect** en skill progress bars
- **Rotating gradient** en ProfileCard border
- **Tilt 3D effect** en ProfileCard con mouse tracking

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Grid completo, sidebar, 2 columnas)
- **Tablet**: 481px - 768px (Sidebar reducido, 1-2 columnas)
- **Mobile**: ≤ 480px (Sin sidebar, 1 columna, texto centrado)

## 🚀 Deploy

Para hacer deploy:

```bash
npm run build
```

Los archivos estáticos generados estarán en `dist/` listos para subir a:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Cualquier hosting estático

## 🔧 Tecnologías Usadas

- **React 18.3.1** - UI Library
- **Vite 6.0.1** - Build tool y dev server
- **CSS3** - Estilos con variables CSS y animaciones
- **Font Awesome 6.0.0** - Iconos
- **Google Fonts (Inter)** - Tipografía

## 📄 Licencia

MIT - Juan Jaramillo © 2025

---

**Servidor corriendo en**: http://localhost:3000/

**Haz click en el logo "JJ"** para ver la ProfileCard de React Bits en acción! 🎉
