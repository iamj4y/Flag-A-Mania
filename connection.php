<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'dbmdfm1Ku3cO';

$conn = new mysqli($servername, $username, $password, $database);

$config_file = 'connection.php';
$file = fopen($config_file, "r");
$contents = fread($file, filesize($config_file));
fclose($file);

?>