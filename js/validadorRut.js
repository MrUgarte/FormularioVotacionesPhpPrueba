//Validacion del formato RUT
function validarRUT(rut) {
    // Expresión regular para validar el formato de un RUT chileno
    var regex = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/;
    
    if (!regex.test(rut)) {
      return false; // El formato del RUT es incorrecto
    }
    
    // Separamos el número del dígito verificador
    var partes = rut.split("-");
    var num = partes[0].replace(/\./g, ""); // Eliminamos los puntos
    var dv = partes[1];
    
    // Calculamos el dígito verificador
    var suma = 0;
    var multiplo = 2;
    
    for (var i = num.length - 1; i >= 0; i--) {
      suma += num.charAt(i) * multiplo;
      multiplo++;
      
      if (multiplo > 7) {
        multiplo = 2;
      }
    }
    
    var resto = suma % 11;
    var dvr = 11 - resto;
    
    if (dvr == 11) {
      dvr = "0";
    } else if (dvr == 10) {
      dvr = "K";
    }
    
    // Comparamos el dígito verificador calculado con el ingresado
    if (dvr != dv.toUpperCase()) {
      return false; // El RUT es inválido
    }
    
    return true; // El RUT es válido
}


//Llamada a la funcion validar RUT
function validarInputRUT() {
    var inputRUT = document.getElementById("rut");
    var rut = inputRUT.value;
    
    if (validarRUT(rut)) {
      inputRUT.setCustomValidity("");
    } else {
      inputRUT.setCustomValidity("El RUT es inválido");
    }
}
  
//Llamada a la funcion validar Alias
function validarAlias(){
    var inputAlias = document.getElementById("inputAlias");
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