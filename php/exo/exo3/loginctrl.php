<?php
// page de controle de login
// page "aveugle" qui memorise les var de session
session_start();
$_SESSION['usrnom'] = $_POST['nom'];
header ('location:loginsuite.php');
?>