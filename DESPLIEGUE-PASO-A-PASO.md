# 🚀 GUÍA COMPLETA DE DESPLIEGUE EN GITHUB PAGES

## ⚠️ IMPORTANTE: Antes de empezar

**Actualiza estos archivos con TU información:**

1. En `vite.config.js`:
   - Cambia `base: '/Mates/'` por `base: '/TU-REPOSITORIO/'`

2. En `package.json`:
   - Cambia `homepage: "https://juanjaramillo.github.io/Mates"` 
   - Por: `homepage: "https://TU-USUARIO.github.io/TU-REPOSITORIO"`

---

## 📋 PASO A PASO

### **PASO 1: Verifica que Git esté configurado**

```bash
# En la terminal, verifica tu usuario de Git
git config user.name
git config user.email

# Si no están configurados:
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```

---

### **PASO 2: Inicializa Git (si no lo has hecho)**

```bash
cd /Users/juanjaramillo/Mates
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
```

---

### **PASO 3: Crea el repositorio en GitHub**

1. Ve a https://github.com
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. **Nombre del repositorio**: `Mates` (o el que prefieras)
4. **Descripción**: "Portfolio personal - Full Stack Developer"
5. Deja en **Public** (para usar GitHub Pages gratis)
6. **NO** marques "Add a README" (ya lo tenemos)
7. Click en **"Create repository"**

---

### **PASO 4: Conecta tu proyecto local con GitHub**

GitHub te dará estos comandos (cópialos de allí):

```bash
# Ejemplo (reemplaza con TU usuario y repositorio):
git remote add origin https://github.com/TU-USUARIO/Mates.git
git branch -M main
git push -u origin main
```

---

### **PASO 5: Configura GitHub Pages**

#### **Opción A: Con GitHub Actions (Recomendado - Automático)**

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (⚙️)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - **GitHub Actions**
5. ¡Listo! Se desplegará automáticamente con cada push

#### **Opción B: Manual con gh-pages**

En tu terminal:

```bash
npm run deploy
```

Luego en GitHub:
1. Ve a **Settings** → **Pages**
2. En **Source**, selecciona:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
3. Click en **Save**

---

### **PASO 6: Espera el despliegue**

- **Con GitHub Actions**: Tarda 2-3 minutos
  - Ve a la pestaña **Actions** en GitHub para ver el progreso
  
- **Con gh-pages manual**: Tarda 1-2 minutos
  - Refrescar la página de Settings → Pages

---

### **PASO 7: ¡Visita tu sitio!**

Tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

Ejemplo: `https://juanjaramillo.github.io/Mates/`

---

## 🔄 ACTUALIZAR EL SITIO

### Con GitHub Actions (automático):
```bash
git add .
git commit -m "Actualización del portfolio"
git push
```

### Manual:
```bash
npm run deploy
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### ❌ Problema: "La página muestra 404"

**Solución:**
1. Verifica que el `base` en `vite.config.js` coincida con el nombre del repo
2. Espera 5 minutos (a veces tarda)
3. Limpia caché del navegador (Ctrl + Shift + R)

---

### ❌ Problema: "Los estilos no se cargan"

**Solución:**
1. Asegúrate de que `base` en `vite.config.js` termina con `/`
   ```js
   base: '/Mates/',  // ✅ Correcto
   base: '/Mates',   // ❌ Incorrecto
   ```

---

### ❌ Problema: "Las imágenes no se ven"

**Solución:**
Asegúrate de que las rutas de imágenes empiecen con `/` o estén en la carpeta `public/`

```jsx
// ✅ Correcto
<img src="/avatar.jpg" />

// ❌ Incorrecto (en producción)
<img src="./avatar.jpg" />
```

---

### ❌ Problema: "Error en Actions"

**Solución:**
1. Ve a **Settings** → **Actions** → **General**
2. En **Workflow permissions**, selecciona:
   - ✅ **Read and write permissions**
3. Guarda y vuelve a hacer push

---

## 📱 VERIFICAR EN DIFERENTES DISPOSITIVOS

Una vez desplegado, verifica en:
- ✅ Desktop (Chrome, Firefox, Safari)
- ✅ Mobile (Chrome, Safari)
- ✅ Tablet

---

## 🎯 COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Preview local de producción
npm run preview

# Desplegar a GitHub Pages
npm run deploy

# Ver el estado de Git
git status

# Ver diferencias
git diff

# Hacer commit y push
git add .
git commit -m "Mensaje descriptivo"
git push
```

---

## 🔒 IMPORTANTE SOBRE PRIVATE

Si tu repositorio es **Private**, GitHub Pages es solo para **GitHub Pro**.

Para usar GitHub Pages gratis:
- Ve a **Settings** → **General**
- Scroll hasta **Danger Zone**
- Click en **Change visibility**
- Selecciona **Public**

---

## ⚡ OPTIMIZACIONES POST-DESPLIEGUE

### 1. **Agregar Custom Domain (Opcional)**
Si tienes un dominio propio:
1. Ve a **Settings** → **Pages**
2. En **Custom domain**, agrega tu dominio
3. Configura DNS en tu proveedor de dominios

### 2. **Habilitar HTTPS**
- En **Settings** → **Pages**
- Marca **Enforce HTTPS** ✅

### 3. **Google Analytics (Opcional)**
Agrega tracking para ver visitantes

### 4. **SEO**
- Agrega meta tags en `index.html`
- Crea `sitemap.xml`
- Crea `robots.txt`

---

## 📊 MONITOREAR DESPLIEGUES

### Ver logs de GitHub Actions:
1. Ve a la pestaña **Actions**
2. Click en el workflow más reciente
3. Expande los steps para ver detalles

### Ver commits:
```bash
git log --oneline
```

---

## 🎉 ¡LISTO!

Tu portfolio está ahora en línea y listo para compartir:

📧 Email signature
💼 LinkedIn
📝 CV
🐦 Twitter/X
💬 Slack

---

## 💡 TIPS PRO

1. **Rama de desarrollo**: 
   ```bash
   git checkout -b dev
   # Trabaja aquí y luego merge a main
   ```

2. **Tags para versiones**:
   ```bash
   git tag v1.0.0
   git push --tags
   ```

3. **Backup antes de cambios grandes**:
   ```bash
   git branch backup-fecha
   ```

---

¿Necesitas ayuda? Abre un issue en GitHub o contáctame! 🚀
