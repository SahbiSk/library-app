<?php

    require 'connect.php';


    $sql = "DELETE from user";
if(mysqli_query($conn,$sql)){
    http_response_code(201);  
    echo json_encode([ "email"=> $email, "password"=> $password, "image"=> $image]) ;
}else{
    http_response_code(422);
}

?>