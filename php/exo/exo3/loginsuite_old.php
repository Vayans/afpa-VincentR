<?php
// page de menu qui teste l'existence des var de session
// et affiche soit le menu soit un message d'erreur
session_start();
?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>
        <?php
        if (!(isset($_SESSION['usrnom']))) {
            echo 'ERREUR login !';
        } else {
            echo 'Au menu...';
        }
        ?>
    </title>
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