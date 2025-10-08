#!/bin/bash

# 🚀 Script de Despliegue Rápido para GitHub Pages
# Ejecuta este script para desplegar tu portfolio

echo "🚀 Iniciando despliegue del Portfolio..."
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Función para imprimir con color
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

# 1. Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. ¿Estás en el directorio correcto?"
    exit 1
fi

print_status "Directorio verificado ✓"

# 2. Verificar configuración de Git
if ! git remote get-url origin > /dev/null 2>&1; then
    print_warning "No hay remote 'origin' configurado."
    echo ""
    echo "Por favor, sigue estos pasos:"
    echo "1. Ve a https://github.com y crea un nuevo repositorio"
    echo "2. Ejecuta estos comandos (reemplaza TU-USUARIO y TU-REPO):"
    echo ""
    echo "   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    exit 1
fi

print_success "Remote 'origin' configurado"

# 3. Verificar cambios pendientes
if [[ -n $(git status -s) ]]; then
    print_status "Hay cambios pendientes. Creando commit..."
    git add .
    
    # Pedir mensaje de commit
    echo ""
    read -p "Mensaje del commit (Enter para usar mensaje por defecto): " COMMIT_MSG
    
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="Update: $(date '+%Y-%m-%d %H:%M')"
    fi
    
    git commit -m "$COMMIT_MSG"
    print_success "Commit creado: $COMMIT_MSG"
else
    print_success "No hay cambios pendientes"
fi

# 4. Push a GitHub
print_status "Subiendo cambios a GitHub..."
if git push; then
    print_success "Cambios subidos a GitHub"
else
    print_error "Error al subir cambios. Verifica tu conexión y permisos."
    exit 1
fi

# 5. Construir el proyecto
print_status "Construyendo proyecto para producción..."
if npm run build; then
    print_success "Build completado exitosamente"
else
    print_error "Error en el build. Revisa los errores arriba."
    exit 1
fi

# 6. Desplegar a GitHub Pages
print_status "Desplegando a GitHub Pages..."
if npm run deploy; then
    print_success "¡Despliegue completado!"
else
    print_error "Error en el despliegue"
    exit 1
fi

# 7. Obtener URL del sitio
REPO_URL=$(git remote get-url origin)
REPO_NAME=$(basename "$REPO_URL" .git)
USER_NAME=$(basename $(dirname "$REPO_URL"))

SITE_URL="https://${USER_NAME}.github.io/${REPO_NAME}/"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✓ ¡DESPLIEGUE EXITOSO!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Tu sitio estará disponible en aproximadamente 2-3 minutos en:"
echo -e "${BLUE}${SITE_URL}${NC}"
echo ""
echo "Para ver el progreso del despliegue:"
echo "https://github.com/${USER_NAME}/${REPO_NAME}/actions"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Preguntar si quiere abrir el navegador
read -p "¿Abrir el sitio en el navegador? (s/n): " OPEN_BROWSER
if [[ $OPEN_BROWSER == "s" || $OPEN_BROWSER == "S" ]]; then
    open "$SITE_URL" 2>/dev/null || xdg-open "$SITE_URL" 2>/dev/null || start "$SITE_URL" 2>/dev/null
    print_success "Abriendo navegador..."
fi

echo ""
print_success "¡Todo listo! 🎉"
