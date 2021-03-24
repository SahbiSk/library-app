<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");
   $request=json_decode($postdata);

   $numberOfCopiesInCargo=$request->numberOfCopiesInCargo;
    $id=$request->id;

    $sql="update cargo set numberOfCopiesInCargo=$numberOfCopiesInCargo
          where id=$id";

    if(mysqli_query($conn,$sql)){
        http_response_code(201);
        echo json_encode(["id"=>$id,"numberOfCopiesInCargo"=>$numberOfCopiesInCargo]);
    }else{
        http_response_code(422);
    }



?>