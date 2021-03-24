<?php

    require 'connect.php';

    $users=[];
    $sql = "SELECT * from  user";

    if($result=mysqli_query($conn,$sql)){
        
        $cr=0;
        while($row=mysqli_fetch_assoc($result)){
            $users[$cr]['id']=$row['id'];
            $users[$cr]['email ']=$row['email'];
            $users[$cr]['password']=$row['password'];
            $users[$cr]['role']=$row['role'];
            $users[$cr]['image']=$row['image'];
            $cr++;
        }
        echo json_encode($users);

    }else{
        http_response_code(404);
    }

?>