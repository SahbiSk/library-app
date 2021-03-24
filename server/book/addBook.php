<?php
    require 'connect.php';
    
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    $title = $request->title;
    $description = $request->description;
    $image = $request->image;
    $numberOfBooksLeft = 1;
    $image = str_replace("'", "\'", $image);
    
    $sql = "INSERT INTO book(title,description,image,numberOfBooksLeft) VALUES('$title','$description','$image','$numberOfBooksLeft')";
    
    if (mysqli_query($conn, $sql)) {
        http_response_code(201);
        mysqli_query($conn,"DELETE FROM BOOK WHERE TITLE in(NULL,'')");
        echo json_encode(["title" => $title, "description" => $description, "image" => $image, "numberOfBooksLeft" => $numberOfBooksLeft]);
    } else {
        http_response_code(422);
    }
?>
