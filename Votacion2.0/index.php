<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Votacion</title>
</head>
<body>
    <form method="post" action="procesar.php" id="my-form">
        <label for="nombre">Nombre y apellido</label>
        <input type="text" name="nombre" id="nombre" required/><br>

        <label for="alias">Alias</label>
        <input type="text" name="alias" id="alias" oninput="validarAlias()" required/><br>

        <label for="rut">RUT</label>
        <input type="text" name="rut" id="rut" oninput="validarInputRUT()" required/><br>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" required/><br>

        <label for="region">Región</label>
        <select name="región"  id="mySelect1" >
          <?php 
            
            include 'php/conexion.php';
            $consulta="SELECT * FROM region_cl";
            $ejecutar=mysqli_query($conexion,$consulta) or die(mysqli_error($conexion));
            
          ?>
          <?php foreach ($ejecutar as $opciones): ?>
              
            <option value="<?php echo $opciones['str_descripcion']?>"><?php echo $opciones['str_descripcion']?></option>
            
          <?php endforeach ?>
        </select><br>

        <label for="comuna">Comuna</label>
        <select name="comuna" id="mySelect2" >
          <?php 

            include 'php/conexion.php';
            
            $consulta="SELECT C.str_descripcion FROM comuna_cl C JOIN provincia_cl P ON C.id_pr = P.id_pr JOIN region_cl R ON P.id_re = R.id_re AND R.str_descripcion = '$miValor'";
            $ejecutar=mysqli_query($conexion,$consulta) or die(mysqli_error($conexion));
                
          ?>
          <?php foreach ($ejecutar as $opciones): ?>

            <option value="<?php echo $opciones['str_descripcion']?>"><?php echo $opciones['str_descripcion']?></option>
                
          <?php endforeach ?>
        </select><br>

        <label for="candidato">Candidato</label>
        <select name="candidato" >
          <option value="">Candidato</option>
        </select><br>

        <label for="comoSeEntero">Como se enteró de Nosotros: </label>
          <label>
            <input type="checkbox" name="comoSeEntero[]" value="web" checked/> Web
          </label>
          <label>
            <input type="checkbox" name="comoSeEntero[]" value="tv" /> TV
          </label>
          <label>
            <input type="checkbox" name="comoSeEntero[]" value="redes" /> Redes Sociales
          </label>
          <label>
            <input type="checkbox" name="comoSeEntero[]" value="amigo" /> Amigo
          </label>
        <br />
        
        <input type="submit" value="Votar"/>

        <script src="js/validadorRut.js"></script>
        <script src="js/validadorAlias.js"></script>
        <script src="js/validadorCheckBox.js"></script>
        <script src="js/envioDatos.js"></script>
    </form>
</body>
</html>