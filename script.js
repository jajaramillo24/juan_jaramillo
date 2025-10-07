// Translation system
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Full Stack Developer | Cloud & Mobile Specialist',
            description: 'Highly versatile and committed technology professional with solid experience in full stack web and mobile development, and cloud deployment. Expert in multiple modern frontend and backend frameworks, relational databases, .NET + Entity Framework, and cloud architectures in AWS and Azure.',
            download: 'Download CV',
            projects: 'View Projects',
            available: 'Available for Work',
            opportunities: 'Open to new opportunities'
        },
        about: {
            title: 'About Me',
            subtitle: 'Get to know me better',
            innovation: {
                title: 'Innovation',
                description: 'Always exploring new technologies and creative solutions to complex problems.'
            },
            collaboration: {
                title: 'Collaboration',
                description: 'Strong believer in teamwork and effective communication for successful projects.'
            },
            growth: {
                title: 'Growth',
                description: 'Continuously learning and adapting to stay ahead in the fast-paced tech industry.'
            }
        },
        experience: {
            title: 'Experience',
            subtitle: 'My professional journey',
            jazusoft: {
                title: 'Full Stack Web Developer',
                date: 'Current',
                description: 'Frontend development with React, Vue, Angular and Ionic. Backend with Django, Laravel and .NET + Entity Framework. SQL Server management, stored procedures and view optimization. Application deployment in Azure (ACR, AKS, App Service) and AWS (Lambda, EC2, S3). CI/CD pipeline implementation and cloud infrastructure configuration.'
            },
            ubp: {
                title: 'Research Project Collaborator',
                date: '2024',
                company: 'Universidad Blas Pascal',
                description: 'Development of a facial gesture recognition application. Wheelchair control through computer vision and facial gestures.'
            },
            aa2000: {
                title: 'Systems Engineering Intern',
                date: '2024',
                description: 'SITA to VEOVO systems migration. Support and development in airport infrastructure technology.'
            }
        },
        skills: {
            title: 'Skills & Technologies',
            subtitle: 'Technologies I work with',
            frontend: {
                title: 'Frontend'
            },
            backend: {
                title: 'Backend'
            },
            cloud: {
                title: 'Cloud & DevOps'
            }
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Some of my recent work'
        },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Let\'s work together',
            location: 'Córdoba, Argentina',
            info: {
                title: 'Contact Information'
            },
            form: {
                title: 'Send Message',
                name: 'Your Name',
                email: 'Your Email',
                message: 'Your Message',
                send: 'Send Message'
            }
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Acerca de',
            experience: 'Experiencia',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        hero: {
            subtitle: 'Desarrollador Full Stack | Especialista en Cloud y Móvil',
            description: 'Profesional tecnológico altamente versátil y comprometido, con sólida experiencia en desarrollo full stack web y móvil, y despliegue en la nube. Experto en múltiples frameworks modernos de frontend y backend, bases de datos relacionales, .NET + Entity Framework, y arquitecturas cloud en AWS y Azure.',
            download: 'Descargar CV',
            projects: 'Ver Proyectos',
            available: 'Disponible para Trabajar',
            opportunities: 'Abierto a nuevas oportunidades'
        },
        about: {
            title: 'Acerca de Mí',
            subtitle: 'Conóceme mejor',
            innovation: {
                title: 'Innovación',
                description: 'Siempre explorando nuevas tecnologías y soluciones creativas para problemas complejos.'
            },
            collaboration: {
                title: 'Colaboración',
                description: 'Firme creyente en el trabajo en equipo y la comunicación efectiva para proyectos exitosos.'
            },
            growth: {
                title: 'Crecimiento',
                description: 'Aprendiendo y adaptándome continuamente para mantenerme a la vanguardia en la industria tecnológica.'
            }
        },
        experience: {
            title: 'Experiencia',
            subtitle: 'Mi trayectoria profesional',
            jazusoft: {
                title: 'Desarrollador Web Full Stack',
                date: 'Actualidad',
                description: 'Desarrollo frontend con React, Vue, Angular e Ionic. Backend con Django, Laravel y .NET + Entity Framework. Gestión de SQL Server, procedimientos almacenados y optimización de vistas. Despliegue de aplicaciones en Azure (ACR, AKS, App Service) y AWS (Lambda, EC2, S3). Implementación de pipelines CI/CD y configuración de infraestructura en la nube.'
            },
            ubp: {
                title: 'Colaborador en Proyecto de Investigación',
                date: '2024',
                company: 'Universidad Blas Pascal',
                description: 'Desarrollo de una aplicación de reconocimiento de gestos faciales. Control de silla de ruedas mediante visión por computadora y gestos faciales.'
            },
            aa2000: {
                title: 'Practicante de Ingeniería de Sistemas',
                date: '2024',
                description: 'Migración de sistemas SITA a VEOVO. Soporte y desarrollo en tecnología de infraestructura aeroportuaria.'
            }
        },
        skills: {
            title: 'Habilidades y Tecnologías',
            subtitle: 'Tecnologías con las que trabajo',
            frontend: {
                title: 'Frontend'
            },
            backend: {
                title: 'Backend'
            },
            cloud: {
                title: 'Cloud y DevOps'
            }
        },
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Algunos de mis trabajos recientes'
        },
        contact: {
            title: 'Ponte en Contacto',
            subtitle: 'Trabajemos juntos',
            location: 'Córdoba, Argentina',
            info: {
                title: 'Información de Contacto'
            },
            form: {
                title: 'Enviar Mensaje',
                name: 'Tu Nombre',
                email: 'Tu Email',
                message: 'Tu Mensaje',
                send: 'Enviar Mensaje'
            }
        }
    }
};

let currentLanguage = 'en';

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.setAttribute('placeholder', translation);
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Add transition effect
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
}

// Helper function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    switchLanguage(savedLanguage);
    
    // Initialize particles
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: '#6366f1'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.05,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.05,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.5,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: '#6366f1',
                opacity: 0.05,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 0.1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 4,
                    speed: 3
                },
                repulse: {
                    distance: 150,
                    duration: 0.8
                },
                push: {
                    particles_nb: 2
                },
                remove: {
                    particles_nb: 1
                }
            }
        },
        retina_detect: true
    });

    // Initialize navigation
    initNavigation();
    
    // Initialize language switcher
    initLanguageSwitcher();
    
    // Initialize animations
    initAnimations();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize skill bars
    initSkillBars();
    
    // Initialize form handling
    initFormHandling();
    
    // Initialize intersection observer for animations
    initIntersectionObserver();
});

// Language switcher functionality
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Navigation functionality
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item and target section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize skill bar animations
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };
    
    // Animate skill bars when skills section is visible
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateSkillBars, 500);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(skillsSection);
    }
}

// Form handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Message sent successfully!', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(34, 197, 94, 0.9)' : type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.glass-card, .timeline-item, .skill-category, .project-card, .about-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize animations
function initAnimations() {
    // Add loading animation to elements
    const animatedElements = document.querySelectorAll('.glass-card, .timeline-item, .skill-category, .project-card, .about-card');
    
    animatedElements.forEach((element, index) => {
        element.classList.add('loading');
        
        // Stagger the loading animation
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 100);
    });
    
    // Parallax effect for hero section
    // Add parallax effect for hero section
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('scroll', () => {
            const scrolled = mainContent.scrollTop;
            const heroVisual = document.querySelector('.hero-visual');
            
            if (heroVisual) {
                heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });
    }
    
    // Mouse move effect for floating card
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            floatingCard.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
        });
    }
}

// Add CSS for additional animations
const additionalStyles = `
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Hover effects for interactive elements */
    .glass-card:hover {
        transform: translateY(-5px) scale(1.02);
    }
    
    .project-card:hover .project-image {
        transform: scale(1.05);
    }
    
    .project-image {
        transition: transform 0.3s ease;
    }
    
    /* Pulse animation for active nav items */
    .nav-item.active::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: rgba(99, 102, 241, 0.2);
        border-radius: 12px;
        transform: translate(-50%, -50%);
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.7;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    
    /* Glow effect for buttons */
    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn-primary:hover::before {
        left: 100%;
    }
    
    /* Loading spinner for form submission */
    .fa-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add scroll-based animations for main content
const mainContent = document.querySelector('.main-content');
if (mainContent) {
    mainContent.addEventListener('scroll', throttle(() => {
        const scrolled = mainContent.scrollTop;
        const rate = scrolled * -0.3;
        
        // Parallax effect for background
        const particles = document.getElementById('particles-js');
        if (particles) {
            particles.style.transform = `translateY(${rate}px)`;
        }
    }, 16));
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    const currentSection = document.querySelector('.section.active').id;
    const currentIndex = sections.indexOf(currentSection);
    
    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        e.preventDefault();
        const nextSection = sections[currentIndex + 1];
        document.querySelector(`[data-section="${nextSection}"]`).click();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        const prevSection = sections[currentIndex - 1];
        document.querySelector(`[data-section="${prevSection}"]`).click();
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    const currentSection = document.querySelector('.section.active').id;
    const currentIndex = sections.indexOf(currentSection);
    
    if (touchEndY < touchStartY - 50 && currentIndex < sections.length - 1) {
        // Swipe up
        const nextSection = sections[currentIndex + 1];
        document.querySelector(`[data-section="${nextSection}"]`).click();
    } else if (touchEndY > touchStartY + 50 && currentIndex > 0) {
        // Swipe down
        const prevSection = sections[currentIndex - 1];
        document.querySelector(`[data-section="${prevSection}"]`).click();
    }
}

// Add performance optimization
const optimizePerformance = () => {
    // Reduce particle count on mobile
    if (window.innerWidth < 768) {
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            window.pJSDom[0].pJS.particles.number.value = 40;
            window.pJSDom[0].pJS.fn.draw();
        }
    }
    
    // Disable animations on low-end devices
    if (navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduce-motion');
    }
};

// Run performance optimization
window.addEventListener('load', optimizePerformance);
window.addEventListener('resize', debounce(optimizePerformance, 250));

// Add error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You could add error reporting here
});

// Add service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
