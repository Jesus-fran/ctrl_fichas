<?php

$user = $_POST['user'];
$pass = $_POST['pass'];
$fecha_hora = $_POST['fecha_hora'];



$enlace = mysqli_connect("143.244.172.240", "admin", "Coronavirus19$", "bd_fichas");


if (!$enlace) {

    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;

}else{

    
    $insert = "INSERT INTO fichas(user, pass, fecha_hora) values('$user', '$pass', now())";

    $datos = mysqli_query($enlace, $insert);

    echo $datos;


}


?>