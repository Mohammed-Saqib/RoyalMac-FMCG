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

if(isset($_POST['pName'], $_POST['pCompanyName'], $_POST['pEmail'], $_POST['pNumber'], $_POST['requirements'], $_POST['sCountry'], $_POST['pPhoneCode']))
{
$name = $_POST['pName'];
$companyName = $_POST['pCompanyName'];
$country = $_POST['sCountry'];
$phoneNumber = $_POST['phoneCode'] . ' ' . $_POST['phoneNumber'];
$email = $_POST['pEmail'];
$requirements = $_POST['requirements'];

$to = "sales@royalmacinternational.com";
$body = "";

$body .= "From: ".$name. "\r\n";
$body .= "Company Name: ".$companyName. "\r\n";
$body .= "Country: ".$country. "\r\n";
$body .= "Phone Number: ".$phoneNumber. "\r\n";
$body .= "Email: ".$email. "\r\n";
$body .= "Requirements: ".$requirements. "\r\n";
mail($to,$subject,$body);
header('location:../index.html');
}
?>