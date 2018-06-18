<?php 


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

mail('alexhuchasheva@gmail.com', 'Сообщение с сайта', "Имя: $name, email: $email, message: $message");


$response = ['result' => true];

//закодировали массив (или объект) в формат json
$jsonResponse = json_encode($response, true); 

echo $jsonResponse;