const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const header = document.querySelector('header');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

navItems.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
}

if (savedTheme === 'dark') {
    setTheme(true);
} else if (savedTheme === 'light') {
    setTheme(false);
} else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark);
}

themeToggle.addEventListener('click', function() {
    const isDarkNow = body.classList.contains('dark-mode');
    setTheme(!isDarkNow);
    localStorage.setItem('theme', isDarkNow ? 'light' : 'dark');
});