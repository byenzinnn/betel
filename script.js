// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        anime({
            targets: spans[0],
            rotate: 45,
            translateY: 6,
            duration: 300,
            easing: 'easeOutCubic'
        });
        anime({
            targets: spans[1],
            opacity: 0,
            duration: 300,
            easing: 'easeOutCubic'
        });
        anime({
            targets: spans[2],
            rotate: -45,
            translateY: -6,
            duration: 300,
            easing: 'easeOutCubic'
        });
    } else {
        anime({
            targets: spans[0],
            rotate: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeOutCubic'
        });
        anime({
            targets: spans[1],
            opacity: 1,
            duration: 300,
            easing: 'easeOutCubic'
        });
        anime({
            targets: spans[2],
            rotate: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeOutCubic'
        });
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        anime({
            targets: spans[0],
            rotate: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeOutCubic'
        });
        anime({
            targets: spans[1],
            opacity: 1,
            duration: 300,
            easing: 'easeOutCubic'
        });
        anime({
            targets: spans[2],
            rotate: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeOutCubic'
        });
    });
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Hero Animations
anime.timeline({
    easing: 'easeOutExpo'
})
.add({
    targets: '.accent-bar',
    width: [0, 48],
    duration: 800
})
.add({
    targets: '.hero-title',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000
}, '-=400')
.add({
    targets: '.hero-subtitle',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000
}, '-=800')
.add({
    targets: '.hero-description',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000
}, '-=800')
.add({
    targets: '.hero-buttons .btn',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: anime.stagger(100)
}, '-=600');

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;

            // Section headers
            if (target.classList.contains('section-header')) {
                anime({
                    targets: target.querySelector('.accent-line'),
                    width: [0, 48],
                    duration: 600,
                    easing: 'easeOutExpo'
                });
                anime({
                    targets: target.querySelector('.section-title, .section-subtitle'),
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    delay: 200,
                    easing: 'easeOutExpo'
                });
            }

            // Lead text
            if (target.classList.contains('lead-text')) {
                anime({
                    targets: target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });
            }

            // Institutional cards
            if (target.classList.contains('institutional-card')) {
                anime({
                    targets: target,
                    opacity: [0, 1],
                    translateY: [40, 0],
                    scale: [0.95, 1],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }

            // Value cards
            if (target.classList.contains('value-card')) {
                const index = Array.from(target.parentElement.children).indexOf(target);
                anime({
                    targets: target,
                    opacity: [0, 1],
                    translateY: [40, 0],
                    scale: [0.95, 1],
                    duration: 600,
                    delay: index * 100,
                    easing: 'easeOutExpo'
                });
            }

            // Service cards
            if (target.classList.contains('service-card')) {
                const index = Array.from(target.parentElement.children).indexOf(target);
                anime({
                    targets: target,
                    opacity: [0, 1],
                    translateY: [40, 0],
                    duration: 600,
                    delay: index * 100,
                    easing: 'easeOutExpo'
                });
            }

            // Business items
            if (target.classList.contains('business-item')) {
                anime({
                    targets: target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }

            // Checklist items
            if (target.classList.contains('checklist')) {
                anime({
                    targets: target.querySelectorAll('li'),
                    opacity: [0, 1],
                    translateX: [-20, 0],
                    duration: 600,
                    delay: anime.stagger(100),
                    easing: 'easeOutExpo'
                });
            }

            // Bullet list items
            if (target.classList.contains('bullet-list')) {
                anime({
                    targets: target.querySelectorAll('li'),
                    opacity: [0, 1],
                    translateX: [-20, 0],
                    duration: 600,
                    delay: anime.stagger(100),
                    easing: 'easeOutExpo'
                });
            }

            // Process steps
            if (target.classList.contains('step')) {
                const index = Array.from(target.parentElement.children).indexOf(target) - 1;
                if (index >= 0) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateX: [-30, 0],
                        duration: 600,
                        delay: index * 100,
                        easing: 'easeOutExpo'
                    });
                }
            }

            // Images
            if (target.classList.contains('section-image')) {
                anime({
                    targets: target,
                    opacity: [0, 1],
                    scale: [1.1, 1],
                    duration: 1200,
                    easing: 'easeOutExpo'
                });
            }

            // CTA
            if (target.classList.contains('cta-title')) {
                anime({
                    targets: target.previousElementSibling,
                    width: [0, 48],
                    duration: 600,
                    easing: 'easeOutExpo'
                });
                anime({
                    targets: target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    delay: 200,
                    easing: 'easeOutExpo'
                });
                anime({
                    targets: target.nextElementSibling,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    scale: [0.95, 1],
                    duration: 800,
                    delay: 400,
                    easing: 'easeOutExpo'
                });
            }

            observer.unobserve(target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.section-header').forEach(el => observer.observe(el));
document.querySelectorAll('.lead-text').forEach(el => observer.observe(el));
document.querySelectorAll('.institutional-card').forEach(el => observer.observe(el));
document.querySelectorAll('.value-card').forEach(el => observer.observe(el));
document.querySelectorAll('.service-card').forEach(el => observer.observe(el));
document.querySelectorAll('.business-item').forEach(el => observer.observe(el));
document.querySelectorAll('.checklist').forEach(el => observer.observe(el));
document.querySelectorAll('.bullet-list').forEach(el => observer.observe(el));
document.querySelectorAll('.step').forEach(el => observer.observe(el));
document.querySelectorAll('.section-image').forEach(el => observer.observe(el));
document.querySelectorAll('.cta-title').forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Button hover animations
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        anime({
            targets: this.querySelector('svg'),
            translateX: [0, 5],
            duration: 300,
            easing: 'easeOutCubic'
        });
    });

    btn.addEventListener('mouseleave', function() {
        anime({
            targets: this.querySelector('svg'),
            translateX: [5, 0],
            duration: 300,
            easing: 'easeOutCubic'
        });
    });
});

// Card hover effects with anime.js
document.querySelectorAll('.value-card, .service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        anime({
            targets: this,
            boxShadow: '0 10px 40px rgba(204, 255, 0, 0.1)',
            duration: 300,
            easing: 'easeOutCubic'
        });
    });

    card.addEventListener('mouseleave', function() {
        anime({
            targets: this,
            boxShadow: '0 0 0 rgba(204, 255, 0, 0)',
            duration: 300,
            easing: 'easeOutCubic'
        });
    });
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-bg');
    if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutCubic'
    });
});

// Animate icons on hover
document.querySelectorAll('.icon, .icon-lg, .check-icon').forEach(icon => {
    icon.parentElement.addEventListener('mouseenter', function() {
        anime({
            targets: icon,
            scale: [1, 1.1],
            rotate: [0, 5],
            duration: 400,
            easing: 'easeOutElastic(1, .6)'
        });
    });

    icon.parentElement.addEventListener('mouseleave', function() {
        anime({
            targets: icon,
            scale: [1.1, 1],
            rotate: [5, 0],
            duration: 400,
            easing: 'easeOutElastic(1, .6)'
        });
    });
});

console.log('Betel Corp - Landing Page carregada com sucesso! 🚀');
