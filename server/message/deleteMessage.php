<?php

    require 'connect.php';

    $path=$_SERVER["PATH_INFO"];
    $id=(int)str_replace("/","",$path);

    
    $sql = "DELETE from message where id='$id'";


    if(mysqli_query($conn,$sql)){
      //  http_response_code(204);  
        echo json_encode($id);
    }else{
        http_response_code(422);
    }

?>