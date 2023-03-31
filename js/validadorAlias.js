//Llamada a la funcion validar Alias
function validarAlias(){
  var inputAlias = document.getElementById("alias");
  var alias = inputAlias.value;

  if (alias.length > 5 && validarLetrasYNumeros(alias)) {
      inputAlias.setCustomValidity("");
  } else {
      inputAlias.setCustomValidity("El Alias tiene que ser mayor 5 caracteres, debe contener letras y números");
  }
}

//Funcion para validar letras y numeros dentro de un caracter alias
function validarLetrasYNumeros(cadena) {
  var regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  return regex.test(cadena);
}