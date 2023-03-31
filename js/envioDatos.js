// Seleccionar el elemento "select" por su ID
var miSelect = document.getElementById('mySelect1');

// Agregar un evento "change" al "select"
miSelect.addEventListener('change', function() {
  // Obtener el valor seleccionado del "select"
  var valorSeleccionado = miSelect.value;
  console.log('Valor seleccionado: ' + valorSeleccionado);
  console.log(typeof valorSeleccionado);
});

