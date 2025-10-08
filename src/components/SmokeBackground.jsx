import { useEffect, useRef } from 'react';
import './SmokeBackground.css';

export default function SmokeBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mouseTrailRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    class SmokeParticle {
      constructor(x, y, fromMouse = false) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        
        if (fromMouse) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 4 + 2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
        } else {
          this.vx = (Math.random() - 0.5) * 1.5;
          this.vy = -Math.random() * 1.2 - 0.8; // Tendencia a subir más rápido
        }
        
        this.size = Math.random() * 80 + 60;
        this.targetSize = this.size * (Math.random() * 0.2 + 1.1);
        this.life = 1;
        this.decay = Math.random() * 0.0015 + 0.0008;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.06;
        
        // Colores violetas variados
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
          this.color = { r: 99, g: 102, b: 241 }; // Violeta
        } else if (colorChoice < 0.66) {
          this.color = { r: 168, g: 85, b: 247 }; // Púrpura
        } else {
          this.color = { r: 139, g: 92, b: 246 }; // Violeta medio
        }
      }

      update(mouseX, mouseY, mouseVX, mouseVY) {
        // El humo sigue al mouse con retraso suave
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 450;

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance * 1.2;
          const angle = Math.atan2(dy, dx);
          
          // Seguir al mouse con mucha más fuerza
          this.vx += Math.cos(angle) * force * 1.5;
          this.vy += Math.sin(angle) * force * 1.5;
          
          // Agregar velocidad del mouse para efecto de arrastre fuerte
          this.vx += mouseVX * 0.15;
          this.vy += mouseVY * 0.15;
        }

        // Movimiento natural hacia arriba mucho más pronunciado
        this.vy -= 0.08;
        
        // Turbulencia mucho más notoria
        this.vx += (Math.random() - 0.5) * 0.3;
        this.vy += (Math.random() - 0.5) * 0.3;

        // Aplicar velocidad
        this.x += this.vx;
        this.y += this.vy;

        // Fricción menor para mantener velocidad
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Crecer mucho más rápido
        if (this.size < this.targetSize) {
          this.size += (this.targetSize - this.size) * 0.05;
        }

        // Rotación
        this.rotation += this.rotationSpeed;

        // Vida de la partícula
        this.life -= this.decay;

        // Reiniciar si sale de los límites
        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
      }

      draw(ctx) {
        if (this.life <= 0) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Crear gradiente radial más suave
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        
        const alpha = this.life * 0.08; // Mucho más sutil
        const { r, g, b } = this.color;
        
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.25})`);
        gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${alpha * 0.1})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        
        // Dibujar elipse para efecto más orgánico
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Más partículas para movimiento más visible
    const particleCount = Math.min(25, Math.floor((width * height) / 25000));
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new SmokeParticle());
    }

    let lastMouseX = width / 2;
    let lastMouseY = height / 2;

    // Manejador de movimiento del mouse
    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      mouseRef.current.vx = (currentX - lastMouseX) * 0.5;
      mouseRef.current.vy = (currentY - lastMouseY) * 0.5;
      mouseRef.current.x = currentX;
      mouseRef.current.y = currentY;

      lastMouseX = currentX;
      lastMouseY = currentY;

      // Agregar posición al trail
      mouseTrailRef.current.push({ x: currentX, y: currentY, time: Date.now() });
      if (mouseTrailRef.current.length > 10) {
        mouseTrailRef.current.shift();
      }

      // Crear más partículas siguiendo al mouse
      const speed = Math.sqrt(mouseRef.current.vx ** 2 + mouseRef.current.vy ** 2);
      if (speed > 2 && Math.random() > 0.5) {
        particlesRef.current.push(new SmokeParticle(currentX, currentY, true));
      }
    };

    // Manejador de redimensionamiento
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animación
    const animate = () => {
      // Trail más visible para ver el movimiento rápido
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, width, height);

      // Actualizar velocidad del mouse con fricción
      mouseRef.current.vx *= 0.9;
      mouseRef.current.vy *= 0.9;

      // Actualizar y dibujar partículas
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.update(
          mouseRef.current.x,
          mouseRef.current.y,
          mouseRef.current.vx,
          mouseRef.current.vy
        );
        particle.draw(ctx);
        return particle.life > 0;
      });

      // Mantener un número constante de partículas
      while (particlesRef.current.length < particleCount) {
        particlesRef.current.push(new SmokeParticle());
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="smoke-bg-wrapper">
      <canvas ref={canvasRef} className="smoke-canvas" />
    </div>
  );
}
