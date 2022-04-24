<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = 'noreply@fabulousedutainment.com';

	$email_subject = "New Contact form Submission";

	$email_body = " Name of User: $name.\n".
					"Email Address: $visitor_email.\n".
					"User Message: $message.\n";

	$to = "savicstech@gmail.com, www.fabulousedu@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers = "Reply-To: $visitor_email \r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: https://fabulousedutainment.com/success");

// 	$name=$_REQUEST['name'];
//     $email=$_REQUEST['email'];
//     $message=$_REQUEST['message'];
//     $recivermail = "adighibevictor@yahoo.com";
// 	$headers = "Reply-To: $email \r\n";
//     if (($name=="")||($email=="")||($message==""))
//         {
//                 echo "All fields are required, please fill <a href='DoctorEmpire.html#updates'>the form</a> again.";

//         }
//     else{        
//         $from="From: $name<$email>\r\nReturn-path: $email";
//         $subject="Message sent using your contact form";
//         ini_set('SMTP','localhost');
//         ini_set('sendmail_from',$email);
//         mail($recivermail , $subject, $message, $headers);
//         echo "Email sent!";
//         }
?>

