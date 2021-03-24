<?php

    require 'connect.php';


    $sql = "DELETE from message";
if(mysqli_query($conn,$sql)){
    http_response_code(200);  
    echo json_encode([]) ;
}else{
    http_response_code(422);
}

?>