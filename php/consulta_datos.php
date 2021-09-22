<?php

$enlace = mysqli_connect("143.244.172.240", "admin", "Coronavirus19$", "bd_fichas");
$datos_user = array();

if (!$enlace) {

    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;

}else{

    $consulta = "SELECT * FROM  fichas ORDER BY fecha_hora";

    $datos = mysqli_query($enlace, $consulta);
    

    foreach ($datos as $key){

        $user = $key['user'];
        $pass = $key['pass'];
        $fecha_hora = $key['fecha_hora'];

        $array_temp = array("user"=>"$user", "pass"=>"$pass", "fecha_hora"=>"$fecha_hora");
        array_push($datos_user, $array_temp);

    }

    echo json_encode($datos_user);

}


?>