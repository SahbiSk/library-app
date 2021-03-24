<?php

    require 'connect.php';
    
    $path=$_SERVER["PATH_INFO"];
    $id=(int)str_replace("/","",$path);

    $sql="delete from  CARGO where book_id=$id";

    if(mysqli_query($conn,$sql)){
        http_response_code(200);
       echo json_encode(["id"=>$id]);
    }else{
        http_response_code(422);
    }



?>