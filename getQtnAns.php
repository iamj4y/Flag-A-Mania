<?php
    include('connection.php');

    $query = "SELECT * FROM countryLog ORDER BY RAND() LIMIT 4";
    $result = $conn->query($query);

    $countries = [];
    while ($row = $result->fetch_assoc()) {
        $countries[] = $row;
    }

    $json = json_encode($countries);

    echo $json;
?>