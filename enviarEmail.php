<?php
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'lib/PHPMailer/src/Exception.php';
require 'lib/PHPMailer/src/PHPMailer.php';
require 'lib/PHPMailer/src/SMTP.php';
$emailSolicitante = $_POST['email'];

// Instância da classe
$mail = new PHPMailer(true);
try
{
    // Configurações do servidor
    $mail->isSMTP();        //Devine o uso de SMTP no envio
    $mail->SMTPAuth = true; //Habilita a autenticação SMTP
    $mail->Username   = 'contato@lucassena.com';
    $mail->Password   = '7uc@$S3n4';
    // Criptografia do envio SSL também é aceito
    $mail->SMTPSecure = 'tls';
    // Informações específicadas pelo Google
    $mail->Host = 'smtp.titan.email';
    $mail->Port = 587;
    // Define o remetente
    $mail->setFrom('contato@lucassena.com', 'Love Sounds');
    // Define o destinatário
    $mail->addAddress($emailSolicitante, '');
    // Conteúdo da mensagem
    $mail->isHTML(true);  // Seta o formato do e-mail para aceitar conteúdo HTML
    $mail->Subject = 'Seu e-book LoveSounds chegou! =)';
    $mail->Body = 'Planejar o casamento dos seus sonhos pode ser desafiador, mas estamos aqui para ajudar! <br>Nosso Guia de Casamento Completo está repleto de dicas essenciais para tornar seu grande dia perfeito.<br><br>

    Cada tópico foi cuidadosamente elaborado para garantir que você tenha todas as informações necessárias para um planejamento tranquilo e bem-sucedido.<br><br>
    
    Não perca a chance de transformar seu sonho em realidade! Confira o anexo e comece a planejar o casamento dos seus sonhos hoje mesmo.<br>';
    $mail->AltBody = 'Este é o corpo da mensagem para clientes de e-mail que não reconhecem HTML';
    $mail->addAttachment('Guia_do_seu_casamento.pdf');


    // Enviar
    $mail->send();
    echo 'A mensagem foi enviada! <br> Você será redirecionado para a página inicial';

    header('Location: index.html');
    exit;
}
catch (Exception $e)
{
    echo "Falha ao enviar e-mail: {$mail->ErrorInfo}";
}
?>