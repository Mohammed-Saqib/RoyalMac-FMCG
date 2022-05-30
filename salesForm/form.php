<?php 
if(isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "sales@royalmacinternational.com";
$body = "";

$body .= "From: ".$name. "\r\n";
$body .= "Email: ".$email. "\r\n";
$body .= "Message: ".$message. "\r\n";
mail($to,$subject,$body);
header('location:../index.html');
}
?>