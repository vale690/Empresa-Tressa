// Animación de scroll (fade)
const elements = document.querySelectorAll('.seccion');

function checkScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 150) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkScroll);
checkScroll();

// Formulario de contacto
const form = document.getElementById('form-contacto');
form.addEventListener('submit', e => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre && correo && mensaje) {
    alert(Gracias ${nombre}, tu mensaje fue enviado con éxito. ¡Pronto te contactaremos!);
    form.reset();
  } else {
    alert('Por favor completa todos los campos.');
  }
});
