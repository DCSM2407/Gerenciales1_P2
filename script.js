// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
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

    // Form submission
    const formulario = document.getElementById('formularioCotizacion');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(formulario);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            alert('¡Gracias por tu interés! Hemos recibido tu solicitud de cotización. Nos pondremos en contacto contigo pronto.');
            
            // Reset form
            formulario.reset();
            
            // In a real application, you would send this data to a server
            console.log('Datos del formulario:', data);
        });
    }
});

// Function to open form with pre-selected product
function abrirFormulario(producto) {
    const productoSelect = document.getElementById('producto');
    const contactoSection = document.getElementById('contacto');
    
    if (productoSelect) {
        productoSelect.value = producto;
    }
    
    if (contactoSection) {
        contactoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 24, 16, 0.95)';
    } else {
        header.style.background = '#2c1810';
    }
});
