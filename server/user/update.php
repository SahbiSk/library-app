<?php
   require "connect.php";
 

   $postdata = file_get_contents("php://input");

 // echo $postdata;
   $request=json_decode($postdata);

  $email=$request->oldMail;
   $newMail=$request->newMail;
   $password=$request->newPassword;
   $image=$request->newImage;

   $sql="UPDATE user
         set email='$newMail',password='$password',image='$image' 
         where email='$email'";

   if(mysqli_query($conn,$sql)){
     http_response_code(200);      

     $sql="SELECT * from user where email='$newMail'";

     $res=mysqli_query($conn,$sql);
 
     $user=mysqli_fetch_assoc($res);

     echo json_encode($user);
   }else{
     http_response_code(422);      
    //  echo json_encode(["error message"=>"error"]);
   }


?>