<!-- <?php
// $to      = 'piotr.romatowski@gmail.com';
// $name =$_POST['name'];
// $email =$_POST['email'];
// $subject = 'Formularz';
// $message = $_POST['message'];
// $headers = 'From: ' . $name . '(' . $email . ')';
// $headers .='Content-Type : text/html; charset=utf-8\r\n';

// mail($to, $subject, $message, $headers);


$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'New Form User';
$email_subject = 'New Form Submission';
$email_body ='User Name : $name.\n'.
                'User Email: $visitor_email.\n'.
                    'User Message: $message.\n';

$to = 'piotr.romatowski@gmail.com';
$headers = 'From : $email_from \r\n';
$headers .= 'Reply-To: $visitor_email \r\n';

mail($to,$email_subject,$email_body,$headers);

header('Location: index.html')

?> -->