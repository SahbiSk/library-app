<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");
    $request=json_decode($postdata);

    $user_id=$request->user_id;
    $book_id=$request->book_id;

    $sql="INSERT INTO CARGO(user_id,book_id,numberOfCopiesInCargo) 
          VALUES('$user_id','$book_id',1)";

    if(mysqli_query($conn,$sql)){
   
        mysqli_query($conn,"DELETE FROM cargo WHERE user_id in(NULL,'')");
              
        $sql="SELECT * FROM  CARGO WHERE user_id='$user_id' and book_id=$book_id";
        $res=mysqli_query($conn,$sql);
       http_response_code(201);
       $row=mysqli_fetch_assoc($res);

       foreach ($row as $key => $value) {
           $row[$key]=$key==="user_id"?$value:(int)$value;
       }

       echo json_encode($row);
        
      }else{
        http_response_code(422);
    }



?>