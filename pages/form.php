<!-- recieve form data from contact page -->
<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $database = "database.db";

    INSERT INTO $database (naam) VALUES ($name);
    INSERT INTO $database (email) VALUES ($email);
    INSERT INTO $database (bericht) VALUES ($message);

    