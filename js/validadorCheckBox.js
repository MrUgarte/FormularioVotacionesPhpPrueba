//Evento validador de checkbox
const form = document.querySelector('#my-form');
form.addEventListener('submit', (event) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length < 2) {
      event.preventDefault(); // Prevenir que el formulario se envíe
      alert('Seleccione al menos dos opciones de como se enteró de nosotros.'); // Mostrar mensaje de error
    }
});