<?php
    require "connect.php";

    $postdata = file_get_contents("php://input");

    $request=json_decode($postdata);

    $email=$request->email;
    $password=$request->password;

    $sql="SELECT * from user where email='$email'";

    $res=mysqli_query($conn,$sql);

    $user=mysqli_fetch_assoc($res);


   if(isset($user) && $user["password"]===$password && $user["email"]===$email){
     http_response_code(200);      
     echo json_encode($user);
   }else{
      //http_response_code(400);
      echo json_encode(["email"=>"","password"=>"","image"=>"","role"=>""]);
   }


?>