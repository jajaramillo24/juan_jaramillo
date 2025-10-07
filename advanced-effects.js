// Advanced Effects JavaScript - Magic Bento, Logo Loop, Scroll Stack, Gradual Blur

// Logo Loop Component
class LogoLoop {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            speed: options.speed || 120,
            direction: options.direction || 'left',
            logoHeight: options.logoHeight || 48,
            gap: options.gap || 40,
            pauseOnHover: options.pauseOnHover !== false,
            scaleOnHover: options.scaleOnHover !== false,
            fadeOut: options.fadeOut !== false,
            fadeOutColor: options.fadeOutColor || '#ffffff',
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.createTrack();
        this.setupAnimation();
        this.addEventListeners();
    }
    
    createTrack() {
        const logos = [
            { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
            { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
            { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
            { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
            { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
            { name: 'Java', icon: 'fab fa-java', color: '#ED8B00' },
            { name: 'C#', icon: 'fas fa-code', color: '#239120' },
            { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
            { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
            { name: 'TypeScript', icon: 'fas fa-code', color: '#3178C6' },
            { name: 'Django', icon: 'fas fa-code', color: '#092E20' },
            { name: 'Laravel', icon: 'fas fa-code', color: '#FF2D20' },
            { name: '.NET', icon: 'fas fa-code', color: '#512BD4' },
            { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078D4' },
            { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
            { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
            { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
            { name: 'GitHub', icon: 'fab fa-github', color: '#181717' }
        ];
        
        const track = document.createElement('div');
        track.className = 'logo-loop-track';
        
        // Create two sets of logos for seamless loop
        [...logos, ...logos].forEach(logo => {
            const logoItem = document.createElement('div');
            logoItem.className = 'logo-item';
            logoItem.innerHTML = `<i class="${logo.icon} logo-icon" style="color: ${logo.color}"></i>`;
            logoItem.title = logo.name;
            track.appendChild(logoItem);
        });
        
        this.container.appendChild(track);
        this.track = track;
    }
    
    setupAnimation() {
        const duration = this.options.speed;
        const direction = this.options.direction === 'right' ? 'reverse' : 'normal';
        
        this.track.style.animation = `logoLoop ${duration}s linear infinite ${direction}`;
    }
    
    addEventListeners() {
        if (this.options.pauseOnHover) {
            this.container.addEventListener('mouseenter', () => {
                this.track.style.animationPlayState = 'paused';
            });
            
            this.container.addEventListener('mouseleave', () => {
                this.track.style.animationPlayState = 'running';
            });
        }
        
        if (this.options.scaleOnHover) {
            this.track.addEventListener('mouseenter', (e) => {
                if (e.target.classList.contains('logo-item')) {
                    e.target.style.transform = 'scale(1.1) translateY(-5px)';
                }
            });
            
            this.track.addEventListener('mouseleave', (e) => {
                if (e.target.classList.contains('logo-item')) {
                    e.target.style.transform = '';
                }
            });
        }
    }
}

// Gradual Blur Component
class GradualBlur {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            target: options.target || 'parent',
            position: options.position || 'bottom',
            height: options.height || '6rem',
            strength: options.strength || 2,
            divCount: options.divCount || 5,
            curve: options.curve || 'bezier',
            exponential: options.exponential !== false,
            opacity: options.opacity || 1,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.createBlurOverlay();
    }
    
    createBlurOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'gradual-blur-overlay';
        
        const blurHeight = this.options.height;
        const strength = this.options.strength;
        
        overlay.style.cssText = `
            position: absolute;
            ${this.options.position}: 0;
            left: 0;
            right: 0;
            height: ${blurHeight};
            background: linear-gradient(
                to ${this.options.position === 'bottom' ? 'top' : 'bottom'},
                var(--bg-primary) 0%,
                rgba(10, 10, 10, 0.8) 20%,
                rgba(10, 10, 10, 0.4) 40%,
                rgba(10, 10, 10, 0.1) 60%,
                transparent 100%
            );
            pointer-events: none;
            z-index: 2;
            backdrop-filter: blur(${strength}px);
        `;
        
        this.container.appendChild(overlay);
    }
}

// Scroll Stack Component
class ScrollStack {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            itemDistance: options.itemDistance || 100,
            itemScale: options.itemScale || 0.03,
            itemStackDistance: options.itemStackDistance || 30,
            stackPosition: options.stackPosition || '20%',
            scaleEndPosition: options.scaleEndPosition || '10%',
            baseScale: options.baseScale || 0.85,
            scaleDuration: options.scaleDuration || 0.5,
            rotationAmount: options.rotationAmount || 0,
            blurAmount: options.blurAmount || 0,
            useWindowScroll: options.useWindowScroll !== false,
            onStackComplete: options.onStackComplete,
            ...options
        };
        
        this.scrollerRef = { current: null };
        this.stackCompletedRef = { current: false };
        this.animationFrameRef = { current: null };
        this.lenisRef = { current: null };
        this.cardsRef = { current: [] };
        this.lastTransformsRef = { current: new Map() };
        this.isUpdatingRef = { current: false };
        
        this.init();
    }
    
    init() {
        this.setupScroller();
        this.setupCards();
        this.setupLenis();
        this.addEventListeners();
    }
    
    setupScroller() {
        this.scrollerRef.current = this.container;
    }
    
    setupCards() {
        const cards = this.container.querySelectorAll('.scroll-stack-card');
        this.cardsRef.current = Array.from(cards);
        
        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${this.options.itemDistance}px`;
            }
            card.style.willChange = 'transform, filter';
            card.style.transformOrigin = 'top center';
            card.style.backfaceVisibility = 'hidden';
            card.style.transform = 'translateZ(0)';
            card.style.webkitTransform = 'translateZ(0)';
            card.style.perspective = '1000px';
            card.style.webkitPerspective = '1000px';
        });
    }
    
    calculateProgress(scrollTop, start, end) {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }
    
    parsePercentage(value, containerHeight) {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }
    
    getScrollData() {
        if (this.options.useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
                scrollContainer: document.documentElement
            };
        } else {
            const scroller = this.scrollerRef.current;
            return {
                scrollTop: scroller.scrollTop,
                containerHeight: scroller.clientHeight,
                scrollContainer: scroller
            };
        }
    }
    
    getElementOffset(element) {
        if (this.options.useWindowScroll) {
            const rect = element.getBoundingClientRect();
            return rect.top + window.scrollY;
        } else {
            return element.offsetTop;
        }
    }
    
    updateCardTransforms() {
        if (!this.cardsRef.current.length || this.isUpdatingRef.current) return;
        
        this.isUpdatingRef.current = true;
        
        const { scrollTop, containerHeight } = this.getScrollData();
        const stackPositionPx = this.parsePercentage(this.options.stackPosition, containerHeight);
        const scaleEndPositionPx = this.parsePercentage(this.options.scaleEndPosition, containerHeight);
        
        const endElement = this.options.useWindowScroll
            ? document.querySelector('.scroll-stack-end')
            : this.scrollerRef.current?.querySelector('.scroll-stack-end');
        
        const endElementTop = endElement ? this.getElementOffset(endElement) : 0;
        
        this.cardsRef.current.forEach((card, i) => {
            if (!card) return;
            
            const cardTop = this.getElementOffset(card);
            const triggerStart = cardTop - stackPositionPx - this.options.itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - this.options.itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;
            
            const scaleProgress = this.calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = this.options.baseScale + i * this.options.itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = this.options.rotationAmount ? i * this.options.rotationAmount * scaleProgress : 0;
            
            let blur = 0;
            if (this.options.blurAmount) {
                let topCardIndex = 0;
                for (let j = 0; j < this.cardsRef.current.length; j++) {
                    const jCardTop = this.getElementOffset(this.cardsRef.current[j]);
                    const jTriggerStart = jCardTop - stackPositionPx - this.options.itemStackDistance * j;
                    if (scrollTop >= jTriggerStart) {
                        topCardIndex = j;
                    }
                }
                
                if (i < topCardIndex) {
                    const depthInStack = topCardIndex - i;
                    blur = Math.max(0, depthInStack * this.options.blurAmount);
                }
            }
            
            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
            
            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + this.options.itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + this.options.itemStackDistance * i;
            }
            
            const newTransform = {
                translateY: Math.round(translateY * 100) / 100,
                scale: Math.round(scale * 1000) / 1000,
                rotation: Math.round(rotation * 100) / 100,
                blur: Math.round(blur * 100) / 100
            };
            
            const lastTransform = this.lastTransformsRef.current.get(i);
            const hasChanged =
                !lastTransform ||
                Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
                Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
                Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
                Math.abs(lastTransform.blur - newTransform.blur) > 0.1;
            
            if (hasChanged) {
                const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
                const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';
                
                card.style.transform = transform;
                card.style.filter = filter;
                
                this.lastTransformsRef.current.set(i, newTransform);
            }
            
            if (i === this.cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !this.stackCompletedRef.current) {
                    this.stackCompletedRef.current = true;
                    this.options.onStackComplete?.();
                } else if (!isInView && this.stackCompletedRef.current) {
                    this.stackCompletedRef.current = false;
                }
            }
        });
        
        this.isUpdatingRef.current = false;
    }
    
    handleScroll = () => {
        this.updateCardTransforms();
    }
    
    setupLenis() {
        if (this.options.useWindowScroll) {
            // Use native scroll for window scroll
            window.addEventListener('scroll', this.handleScroll, { passive: true });
        } else {
            const scroller = this.scrollerRef.current;
            if (!scroller) return;
            
            scroller.addEventListener('scroll', this.handleScroll, { passive: true });
        }
        
        // Initial update
        this.updateCardTransforms();
    }
    
    addEventListeners() {
        // Add resize listener
        window.addEventListener('resize', () => {
            this.updateCardTransforms();
        });
    }
    
    destroy() {
        if (this.animationFrameRef.current) {
            cancelAnimationFrame(this.animationFrameRef.current);
        }
        if (this.lenisRef.current) {
            this.lenisRef.current.destroy();
        }
        
        if (this.options.useWindowScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        } else {
            const scroller = this.scrollerRef.current;
            if (scroller) {
                scroller.removeEventListener('scroll', this.handleScroll);
            }
        }
        
        window.removeEventListener('resize', this.updateCardTransforms);
        
        this.stackCompletedRef.current = false;
        this.cardsRef.current = [];
        this.lastTransformsRef.current.clear();
        this.isUpdatingRef.current = false;
    }
}

// Magic Bento Component
class MagicBento {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            textAutoHide: options.textAutoHide !== false,
            enableStars: options.enableStars !== false,
            enableSpotlight: options.enableSpotlight !== false,
            enableBorderGlow: options.enableBorderGlow !== false,
            enableTilt: options.enableTilt !== false,
            enableMagnetism: options.enableMagnetism !== false,
            clickEffect: options.clickEffect !== false,
            spotlightRadius: options.spotlightRadius || 300,
            particleCount: options.particleCount || 12,
            glowColor: options.glowColor || '99, 102, 241',
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.setupCards();
        if (this.options.enableSpotlight) {
            this.setupSpotlight();
        }
        this.addEventListeners();
    }
    
    setupCards() {
        const cards = this.container.querySelectorAll('.magic-bento-card');
        
        cards.forEach(card => {
            if (this.options.enableTilt) {
                this.addTiltEffect(card);
            }
            
            if (this.options.enableMagnetism) {
                this.addMagnetismEffect(card);
            }
            
            if (this.options.clickEffect) {
                this.addClickEffect(card);
            }
            
            if (this.options.enableStars) {
                this.addParticleEffect(card);
            }
        });
    }
    
    addTiltEffect(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }
    
    addMagnetismEffect(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const magnetX = (x - centerX) * 0.05;
            const magnetY = (y - centerY) * 0.05;
            
            card.style.transform += ` translate(${magnetX}px, ${magnetY}px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    }
    
    addClickEffect(card) {
        card.addEventListener('click', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height)
            );
            
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: ${maxDistance * 2}px;
                height: ${maxDistance * 2}px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(${this.options.glowColor}, 0.4) 0%, rgba(${this.options.glowColor}, 0.2) 30%, transparent 70%);
                left: ${x - maxDistance}px;
                top: ${y - maxDistance}px;
                pointer-events: none;
                z-index: 1000;
            `;
            
            card.appendChild(ripple);
            
            ripple.animate([
                { transform: 'scale(0)', opacity: 1 },
                { transform: 'scale(1)', opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => ripple.remove();
        });
    }
    
    addParticleEffect(card) {
        const particles = [];
        
        card.addEventListener('mouseenter', () => {
            for (let i = 0; i < this.options.particleCount; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.cssText = `
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        border-radius: 50%;
                        background: rgba(${this.options.glowColor}, 1);
                        box-shadow: 0 0 6px rgba(${this.options.glowColor}, 0.6);
                        pointer-events: none;
                        z-index: 100;
                        left: ${Math.random() * 100}%;
                        top: ${Math.random() * 100}%;
                    `;
                    
                    card.appendChild(particle);
                    particles.push(particle);
                    
                    particle.animate([
                        { transform: 'scale(0)', opacity: 0 },
                        { transform: 'scale(1)', opacity: 0.3 },
                        { transform: 'scale(0)', opacity: 0 }
                    ], {
                        duration: 4000 + Math.random() * 4000,
                        easing: 'ease-in-out'
                    }).onfinish = () => {
                        particle.remove();
                        const index = particles.indexOf(particle);
                        if (index > -1) particles.splice(index, 1);
                    };
                }, i * 100);
            }
        });
        
        card.addEventListener('mouseleave', () => {
            particles.forEach(particle => {
                particle.animate([
                    { transform: 'scale(1)', opacity: 0.3 },
                    { transform: 'scale(0)', opacity: 0 }
                ], {
                    duration: 500,
                    easing: 'ease-out'
                }).onfinish = () => particle.remove();
            });
            particles.length = 0;
        });
    }
    
    setupSpotlight() {
        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `
            position: fixed;
            width: 800px;
            height: 800px;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(circle,
                rgba(${this.options.glowColor}, 0.15) 0%,
                rgba(${this.options.glowColor}, 0.08) 15%,
                rgba(${this.options.glowColor}, 0.04) 25%,
                rgba(${this.options.glowColor}, 0.02) 40%,
                rgba(${this.options.glowColor}, 0.01) 65%,
                transparent 70%
            );
            z-index: 200;
            opacity: 0;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
            will-change: transform, opacity;
        `;
        
        document.body.appendChild(spotlight);
        this.spotlight = spotlight;
    }
    
    addEventListeners() {
        if (this.options.enableSpotlight && this.spotlight) {
            document.addEventListener('mousemove', (e) => {
                const rect = this.container.getBoundingClientRect();
                const mouseInside = e.clientX >= rect.left && e.clientX <= rect.right && 
                                  e.clientY >= rect.top && e.clientY <= rect.bottom;
                
                if (mouseInside) {
                    this.spotlight.style.left = e.clientX + 'px';
                    this.spotlight.style.top = e.clientY + 'px';
                    this.spotlight.style.opacity = '0.8';
                } else {
                    this.spotlight.style.opacity = '0';
                }
            });
        }
    }
}

// Enhanced Glass Card Effects
class EnhancedGlassCard {
    constructor(card, options = {}) {
        this.card = card;
        this.options = {
            enableTilt: options.enableTilt !== false,
            enableMagnetism: options.enableMagnetism !== false,
            enableRipple: options.enableRipple !== false,
            enableGlow: options.enableGlow !== false,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.card.classList.add('enhanced-glass-card');
        
        if (this.options.enableTilt) {
            this.addTiltEffect();
        }
        
        if (this.options.enableMagnetism) {
            this.addMagnetismEffect();
        }
        
        if (this.options.enableRipple) {
            this.addRippleEffect();
        }
        
        if (this.options.enableGlow) {
            this.addGlowEffect();
        }
    }
    
    addTiltEffect() {
        this.card.addEventListener('mousemove', (e) => {
            const rect = this.card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            this.card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        this.card.addEventListener('mouseleave', () => {
            this.card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }
    
    addMagnetismEffect() {
        this.card.addEventListener('mousemove', (e) => {
            const rect = this.card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const magnetX = (x - centerX) * 0.02;
            const magnetY = (y - centerY) * 0.02;
            
            this.card.style.transform += ` translate(${magnetX}px, ${magnetY}px)`;
        });
        
        this.card.addEventListener('mouseleave', () => {
            this.card.style.transform = '';
        });
    }
    
    addRippleEffect() {
        this.card.classList.add('ripple');
    }
    
    addGlowEffect() {
        this.card.classList.add('pulse-glow');
    }
}

// Text Reveal Animation
class TextReveal {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            delay: options.delay || 0,
            stagger: options.stagger || 0.1,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.element.classList.add('text-reveal');
        const text = this.element.textContent;
        this.element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${this.options.delay + (index * this.options.stagger)}s`;
            this.element.appendChild(span);
        });
    }
}

// Initialize all advanced effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Logo Loop
    const logoLoopContainer = document.querySelector('.logo-loop-container');
    if (logoLoopContainer) {
        new LogoLoop(logoLoopContainer, {
            speed: 20,
            direction: 'left',
            logoHeight: 48,
            gap: 40,
            pauseOnHover: true,
            scaleOnHover: true
        });
    }
    
    // Initialize Gradual Blur
    const gradualBlurContainers = document.querySelectorAll('.gradual-blur-container');
    gradualBlurContainers.forEach(container => {
        new GradualBlur(container, {
            position: 'bottom',
            height: '6rem',
            strength: 2
        });
    });
    
    // Scroll Stack removed - using original timeline instead
    
    // Initialize Magic Bento
    const magicBentoContainers = document.querySelectorAll('.magic-bento-grid');
    magicBentoContainers.forEach(container => {
        new MagicBento(container, {
            textAutoHide: true,
            enableStars: true,
            enableSpotlight: true,
            enableBorderGlow: true,
            enableTilt: true,
            enableMagnetism: true,
            clickEffect: true,
            spotlightRadius: 300,
            particleCount: 12,
            glowColor: '99, 102, 241'
        });
    });
    
    // Initialize Enhanced Glass Cards
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
        new EnhancedGlassCard(card, {
            enableTilt: true,
            enableMagnetism: true,
            enableRipple: true,
            enableGlow: true
        });
    });
    
    // Initialize Text Reveal
    const textRevealElements = document.querySelectorAll('.text-reveal');
    textRevealElements.forEach(element => {
        new TextReveal(element);
    });
});

// Export classes for external use
window.LogoLoop = LogoLoop;
window.GradualBlur = GradualBlur;
window.ScrollStack = ScrollStack;
window.MagicBento = MagicBento;
window.EnhancedGlassCard = EnhancedGlassCard;
window.TextReveal = TextReveal;
