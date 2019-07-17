<?php
// controle variable de session
session_start();
if (!(isset($_SESSION['usrnom']))) {
    header('Location: login.html'); // retour au form de login
    exit();
}
?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Une page à accès sécurisé</title>
</head>

<body>
    <?php // cas d'erreur ==> retour vers login.htm
    if (!(isset($_SESSION['usrnom']))) {
        echo "<h1> ERREUR login : vous n'avez pas droit d'accès à ce site</h1>
            <p><a href='login.html'>Retour à la page d'accueil</a></p>";
    } else // authentification OK ==> menu
    {
        echo "<h1> Au menu du jour pour vous, $_SESSION[usrnom]...</h1> 
            <ul>
            <li><a href='../'>Sommaire</a></li>
            <li>Et aussi...</li>
            <li>Et encore...</li>
            <li>Et pour finir...</li>
            </ul>";
    }
    ?>
</body>

</html>