<?php
$servername = "localhost"; // Replace this with your actual database host
$username = "root";
$password = "";
$dbname = "dbmdfm1Ku3cO";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully to " . $servername;
}

$conn->close();
?>
