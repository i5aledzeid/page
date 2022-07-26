<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];
$number = $_POST['number'];

//Database connection
$conn = new mysqli('localhost', 'root', '', tes);
if ($conn -> connect_error) {
    die('Connection Failed: '.$conn- connect_error);
}
else {
    $stmt = $conn -> prepare("insert into account(firstName, lastName, gender, email, password, number)
        value(?, ?, ?, ?, ?, ?)");
    $stmt -> bind_param("sssssi", $firstName, $lastName, $gender, $email, $password, $number);
    $stmt -> execute();
    echo "register successfully..."
    $stmt -> close();
    $conn -> close();
}
?>