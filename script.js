// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after click
        document.getElementById('nav-links').classList.remove('show');
    });
});

// Toggle mobile menu
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}