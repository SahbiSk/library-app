<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');


 function connect(){


    $hostName = "localhost:3325";

    $dbname = "mini-projet-php";
   
    $username="monarch";
   
    $password="monarch";

    $connect = mysqli_connect($hostName,$username,$password,$dbname);
    if(mysqli_connect_errno($connect)){
        die("Failed to connect ".mysqli_connect_error());
    }
    
    mysqli_set_charset($connect,"utf8");
    return $connect;
}

$conn=connect();    



 ?>