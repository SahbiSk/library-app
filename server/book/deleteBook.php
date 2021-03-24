<?php

    require 'connect.php';

    $path=$_SERVER["PATH_INFO"];
    $id=(int)str_replace("/","",$path);

    $sql = "DELETE from book where id='$id'";


    if(mysqli_query($conn,$sql)){
        http_response_code(200); 
        $sql = "DELETE from cargo where book_id='$id'";
        mysqli_query($conn,$sql); 
       echo json_encode(["id"=>$id]);
    }else{
        http_response_code(422);
    }

?>