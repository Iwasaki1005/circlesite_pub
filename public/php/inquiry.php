<?php
require_once 'mail.php';

// define('FROM_MAIL_ADDRESS', 'info@neverland-f.com');
define('TO_MAIL_ADDRESS', 'info@neverland-f.com');
define('MAIL_SUBJECT', 'ねばーランド.Fからのお問い合わせです');

$data = file_get_contents('php://input');
$data = json_decode($data);
$message = <<<EOT
E-メール: $data->user_mail
件名: $data->user_index
お問い合わせ内容:
$data->user_text
EOT;

try {
	$mail = new Mail($data->user_mail, TO_MAIL_ADDRESS);
	$mail->setSubject(MAIL_SUBJECT);
	$mail->setMessage($message);
	$mail->setLanguage('ja');
	$mail->setInternalEncoding('UTF-8');
	$mail->send();
	$result['response'] = "OK";
	$result['message'] = $message;
}
catch (Exception $e)
{
	http_response_code(403);
	$result['response'] = "ERROR";
	$result['message'] = $e->getMessage();
}
finally
{
	print json_encode($result);
}