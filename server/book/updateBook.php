<?php
    require 'connect.php';
    
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    $id =(int)$request->id;
    $numberOfBooksLeft = ((int)$request->numberOfBooksLeft);
    
    $sql = "UPDATE BOOK SET numberOfBooksLeft='$numberOfBooksLeft' 
            WHERE ID=$id";

    if (mysqli_query($conn, $sql)) {
        http_response_code(200);
        echo json_encode(["id" => $id, "numberOfBooksLeft" => $numberOfBooksLeft]);
    } else {
        http_response_code(422);
    }
?>
