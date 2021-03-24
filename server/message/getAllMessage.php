<?php

    require 'connect.php';

    $messages=[];
    $sql = "SELECT * from  message";

    if($result=mysqli_query($conn,$sql)){
        
        $cr=0;
        while($row=mysqli_fetch_assoc($result)){
            $messages[$cr]['id']=$row['id'];
            $messages[$cr]['user_id']=$row['user_id'];
            $messages[$cr]['content']=$row['content'];
            $messages[$cr]['date_reception']=$row['date_reception'];
            $cr++;
        }
        echo json_encode($messages);

    }else{
        http_response_code(404);
    }

?>