# 🎯 COMANDOS EXACTOS PARA DESPLEGAR

## ⚠️ IMPORTANTE: Lee esto primero

Antes de ejecutar cualquier comando, debes:

1. **Actualizar `vite.config.js`**:
   - Abre el archivo `vite.config.js`
   - Cambia `base: '/Mates/'` por `base: '/TU-NOMBRE-DE-REPOSITORIO/'`
   
2. **Actualizar `package.json`**:
   - Abre el archivo `package.json`
   - Cambia `homepage: "https://juanjaramillo.github.io/Mates"`
   - Por: `homepage: "https://TU-USUARIO-GITHUB.github.io/TU-REPOSITORIO"`

---

## 📝 MÉTODO 1: Paso a Paso Manual (Recomendado para primera vez)

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `Mates` (o el que prefieras)
3. Descripción: "Portfolio Personal - Full Stack Developer"
4. Público ✅
5. NO marques "Add a README"
6. Click en "Create repository"

### Paso 2: En la terminal, ejecuta estos comandos UNO POR UNO:

```bash
# Ya está hecho - Git inicializado ✓
# Ya está hecho - Primer commit creado ✓

# Ahora necesitas conectar con GitHub:
# REEMPLAZA TU-USUARIO y TU-REPOSITORIO con tus valores reales

git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

**Ejemplo real:**
```bash
git remote add origin https://github.com/juanjaramillo/Mates.git
git branch -M main
git push -u origin main
```

### Paso 3: Configura GitHub Pages

**Opción A: Con GitHub Actions (Automático - Recomendado)**

1. Ve a tu repositorio en GitHub
2. Click en "Settings" (⚙️)
3. En el menú izquierdo, click en "Pages"
4. En "Source", selecciona: **GitHub Actions**
5. ¡Listo! Se desplegará automáticamente

**Opción B: Manual con gh-pages**

Ejecuta en la terminal:
```bash
npm run deploy
```

Luego:
1. Ve a "Settings" → "Pages" en GitHub
2. En "Source", selecciona: Branch **gh-pages** → Folder **/ (root)**
3. Click en "Save"

### Paso 4: Espera 2-3 minutos

Tu sitio estará en:
```
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

---

## 🚀 MÉTODO 2: Script Automático (Después de configurar GitHub)

Una vez que hayas hecho el Paso 2 (conectar con GitHub), puedes usar:

```bash
./deploy.sh
```

Este script hace todo automáticamente:
- ✅ Verifica configuración
- ✅ Hace commit de cambios
- ✅ Push a GitHub
- ✅ Build del proyecto
- ✅ Deploy a GitHub Pages

---

## 🔄 Para Actualizar el Sitio en el Futuro

### Con GitHub Actions (automático):
```bash
git add .
git commit -m "Descripción de tus cambios"
git push
```

### Manual:
```bash
./deploy.sh
```

O:
```bash
npm run deploy
```

---

## 🐛 Si Algo Sale Mal

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
```

### Error: "Permission denied"
Necesitas configurar SSH o Personal Access Token.

**Opción fácil**: Usa HTTPS y GitHub te pedirá tu contraseña.

**Opción segura**: Configura SSH:
```bash
ssh-keygen -t ed25519 -C "tuemail@ejemplo.com"
cat ~/.ssh/id_ed25519.pub
# Copia la salida y agrégala en GitHub → Settings → SSH Keys
```

### Error: "failed to push"
```bash
git pull origin main --rebase
git push origin main
```

---

## ✅ CHECKLIST PRE-DESPLIEGUE

Marca cada item antes de desplegar:

- [ ] `vite.config.js` tiene el nombre correcto del repositorio en `base`
- [ ] `package.json` tiene la URL correcta en `homepage`
- [ ] Todos los archivos guardados
- [ ] Repositorio creado en GitHub
- [ ] `git remote` configurado correctamente
- [ ] GitHub Actions habilitado (Settings → Actions)

---

## 🎯 COMANDOS DE VERIFICACIÓN

```bash
# Ver si Git está configurado
git remote -v

# Ver el estado de los archivos
git status

# Ver el último commit
git log --oneline -1

# Ver la rama actual
git branch

# Probar el build localmente
npm run build
npm run preview
```

---

## 💡 TIPS ÚTILES

1. **Primera vez**: Usa el método manual paso a paso
2. **Actualizaciones**: Usa `./deploy.sh`
3. **Ver logs**: Ve a GitHub → Actions tab
4. **Cache del navegador**: Usa Ctrl+Shift+R para limpiar
5. **Dominio custom**: Configúralo después del primer despliegue

---

## 📞 NECESITAS AYUDA?

Si te trabas en algún paso:

1. Lee el archivo `DESPLIEGUE-PASO-A-PASO.md`
2. Verifica los errores en la terminal
3. Revisa GitHub Actions (si lo usas)
4. Verifica la configuración en Settings → Pages

---

## 🎉 PRÓXIMOS PASOS DESPUÉS DEL DESPLIEGUE

Una vez que tu sitio esté en línea:

1. ✅ Comparte la URL en LinkedIn
2. ✅ Agrégala a tu CV
3. ✅ Prueba en diferentes dispositivos
4. ✅ Configura Google Analytics (opcional)
5. ✅ Agrega un dominio personalizado (opcional)

---

**¡Buena suerte con el despliegue! 🚀**
