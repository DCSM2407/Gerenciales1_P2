// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Referencias principales
    const btnToggleCarrito = document.getElementById('btn-toggle-carrito');
    const carritoFlotante = document.getElementById('carrito-flotante');
    const btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const carritoItems = document.getElementById('carrito-items');
    const totalCarrito = document.getElementById('total-carrito');
    const btnCheckout = document.getElementById('checkout');

    // Array para almacenar productos en carrito
    let carrito = [];

    // Función para abrir/cerrar carrito flotante
    function toggleCarrito() {
        carritoFlotante.classList.toggle('mostrar');
        const isVisible = carritoFlotante.classList.contains('mostrar');
        carritoFlotante.setAttribute('aria-hidden', !isVisible);
    }

    // Evento abrir carrito
    btnToggleCarrito.addEventListener('click', () => {
        toggleCarrito();
    });

    // Evento cerrar carrito
    btnCerrarCarrito.addEventListener('click', () => {
        toggleCarrito();
    });

    // Agregar productos al carrito
    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            const productoCard = btn.closest('.producto-card');
            const id = productoCard.dataset.id;
            const nombre = productoCard.dataset.nombre;
            const precio = parseFloat(productoCard.dataset.precio);
            const cantidadInput = productoCard.querySelector('.cantidad-input');
            let cantidad = parseInt(cantidadInput.value);
            if (isNaN(cantidad) || cantidad < 1) cantidad = 1;

            // Verificar si producto ya existe en carrito
            const productoExistente = carrito.find(p => p.id === id);
            if (productoExistente) {
                productoExistente.cantidad += cantidad;
            } else {
                carrito.push({ id, nombre, precio, cantidad });
            }

            // Reset cantidad input a 1
            cantidadInput.value = 1;

            // Actualizar carrito visual y contador
            actualizarCarrito();

            // Abrir carrito automáticamente al agregar producto
            carritoFlotante.classList.add('mostrar');
            carritoFlotante.setAttribute('aria-hidden', false);
        });
    });

    // Función para actualizar el contenido del carrito y total
    function actualizarCarrito() {
        carritoItems.innerHTML = '';
        let total = 0;

        if (carrito.length === 0) {
            carritoItems.innerHTML = '<li>El carrito está vacío.</li>';
            totalCarrito.textContent = '0.00';
            btnCheckout.disabled = true;
            contadorCarrito.textContent = '0';
            return;
        }

        carrito.forEach(producto => {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;

            const li = document.createElement('li');
            li.textContent = `${producto.nombre} x${producto.cantidad} - Q.${subtotal.toFixed(2)}`;

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.classList.add('btn');
            btnEliminar.style.marginLeft = '10px';
            btnEliminar.onclick = () => {
                carrito = carrito.filter(p => p.id !== producto.id);
                actualizarCarrito();
            };

            li.appendChild(btnEliminar);
            carritoItems.appendChild(li);
        });

        totalCarrito.textContent = total.toFixed(2);
        btnCheckout.disabled = false;
        contadorCarrito.textContent = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    }

    // Evento para finalizar compra
    btnCheckout.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('Tu carrito está vacío.');
            return;
        }

        let mensaje = 'Gracias por tu compra:\n\n';
        carrito.forEach(p => {
            mensaje += `${p.nombre} x${p.cantidad} = Q.${(p.precio * p.cantidad).toFixed(2)}\n`;
        });
        mensaje += `\nTotal: Q.${carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0).toFixed(2)}\n\nNos pondremos en contacto contigo para coordinar el envío.`;

        alert(mensaje);
        carrito = [];
        actualizarCarrito();
        toggleCarrito();
    });

    // Formulario de contacto - confirmación simple
    const formulario = document.getElementById('formularioCotizacion');
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(formulario);
            const data = Object.fromEntries(formData);

            Swal.fire({
                title: '¡Gracias por tu solicitud!',
                text: `Hola ${data.nombre}, hemos recibido tu solicitud de cotización. Nos pondremos en contacto contigo pronto.`,
                icon: 'success',
                confirmButtonColor: '#d4a574',
                confirmButtonText: 'Cerrar'
            });

            formulario.reset();
        });
    }


    // Inicializar contador y carrito vacíos al cargar
    actualizarCarrito();

    // Menú móvil toggle (para completar funcionalidad existente)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
