<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");
   $request=json_decode($postdata);

    $user_id =$request->user_id ;
    $content=$request->content;

    $sql = "INSERT INTO MESSAGE(user_id,content)
            VALUES('$user_id','$content')";

  //  echo json_encode(mysqli_query($conn,$sql));


if(mysqli_query($conn,$sql)){
    http_response_code(201);
    
    $sql="SELECT * FROM MESSAGE 
    where id=(select max(id) from message) ";
    
    $res=mysqli_query($conn,$sql);

    $message=mysqli_fetch_assoc($res);

    echo json_encode($message) ;
}else{
   //http_response_code(400);
}

?>