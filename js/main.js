document.addEventListener('DOMContentLoaded', () => {

// ==========================================
// THEME TOGGLE (Dark / Light)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
const currentTheme = html.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

html.setAttribute('data-theme', newTheme);
localStorage.setItem('theme', newTheme);
updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
if (theme === 'dark') {
themeIcon.classList.remove('fa-sun');
themeIcon.classList.add('fa-moon');
} else {
themeIcon.classList.remove('fa-moon');
themeIcon.classList.add('fa-sun');
}
}

// ==========================================
// MOBILE HAMBURGER MENU
// ==========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
});
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
}
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
const scrollPos = window.scrollY + 120;

sections.forEach(section => {
const top = section.offsetTop;
const height = section.offsetHeight;
const id = section.getAttribute('id');

if (scrollPos >= top && scrollPos < top + height) {
navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${id}`) {
link.style.color = 'var(--accent)';
} else {
link.style.color = '';
}
});
}
});
}

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
function revealOnScroll() {
const reveals = document.querySelectorAll('.reveal');
const windowHeight = window.innerHeight;

reveals.forEach(el => {
const elementTop = el.getBoundingClientRect().top;
const revealPoint = 120;

if (elementTop < windowHeight - revealPoint) {
el.classList.add('active');
}
});
}

// Add reveal class to animatable elements
function initRevealElements() {
const selectors = [
'.about-content p',
'.timeline-item',
'.skill-category',
'.education-card',
'.contact-card',
'.project-card'
];

selectors.forEach(selector => {
document.querySelectorAll(selector).forEach((el, index) => {
el.classList.add('reveal');
el.style.transitionDelay = `${index * 0.1}s`;
});
});
}

initRevealElements();
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load for visible elements

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
}
});
});

});