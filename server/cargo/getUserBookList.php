<?php

    require 'connect.php';
    $path=$_SERVER["PATH_INFO"];
    $user_id=str_replace("/","",$path);

    $sql="select * from book 
          where id in (SELECT book_id from cargo
                        where user_id='$user_id')";
    $books=[];
        
    if($result=mysqli_query($conn,$sql)){
                            
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $books[$cr]['id']=(int)$row['id'];
        $books[$cr]['title']=$row['title'];
        $books[$cr]['description']=$row['description'];
        $books[$cr]['image']=$row['image'];
        $books[$cr]['numberOfBooksLeft']=(int)$row['numberOfBooksLeft'];
        $books[$cr]['date_added']=$row['date_added'];
        $cr++;
        }
        echo json_encode($books);
                    
        }else{
            http_response_code(404);
            }
     




?>