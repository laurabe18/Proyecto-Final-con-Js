<?php
$destino = "lauriitaromero_18@hotmail.com"
$nombre = $_POST["nombre"];
$dia = $_POST["dia"];
$horario = $_POST["horario"];
$teleono = $_POST["telefono"];
$contenido = "nombre: " . $nombre . "\ndia: " . $dia . "\nHorario:" . $horario . "\nTelefono:";
mail($destino, "Contacto", $contenido);
header("location:gracias.html");
?>

