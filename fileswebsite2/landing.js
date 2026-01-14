// Menuo Landing Page Scripts

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            const menu = document.getElementById('mobileMenu');
            if (menu && menu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

// Stats Tab Switching
document.querySelectorAll('.stats-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Chart bars animation delay
document.querySelectorAll('.mockup-bar, .mini-bar, .stats-chart-bar-fill').forEach((bar, index) => {
    bar.style.animationDelay = `${index * 0.1}s`;
});
