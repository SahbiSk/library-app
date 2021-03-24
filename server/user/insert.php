<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");

    $request=json_decode($postdata);

    $email=$request->email;
    $password=$request->password;
    $image=$request->image;

    $image=str_replace("'","\'",$image);


    
    $sql="SELECT * from user where email='$email'";

    $res=mysqli_query($conn,$sql);

    $user=mysqli_fetch_assoc($res);

    if(isset($user)){
        http_response_code(400);
        echo json_encode(["error message"=>"user already exists"]);
        exit();
    }

    if(!isset($request->role)){
        $sql="INSERT INTO user(email,password,image) VALUES('$email','$password','$image')";
    }else{
        $sql = "INSERT INTO user(email,password,role,image) VALUES('$email','$password','$request->role','$image')";
  
    }

    if(mysqli_query($conn,$sql)){
      
        $sql="SELECT * from user where email='$email'";

        $res=mysqli_query($conn,$sql);
    
        $user=mysqli_fetch_assoc($res);

        mysqli_query($conn,"DELETE FROM USER WHERE EMAIL like ''");

        echo json_encode($user);
     }else{
        http_response_code(422);  
      //  echo json_encode([ "error"=> "error"]) ;
    
    } 

?>