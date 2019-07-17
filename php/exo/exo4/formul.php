<?php // analyse du formulaire recu
// init des var
$interet = ''; // libelle des intérets utilisateur
$marequ = 'insert into Matable values(' ; // partie constante de la requete sql

// recup nom et age
$marequ .= "'$_GET[nom]',$_GET[age]," ;

// recup situation maritale (radio)
$marequ .= "'$_GET[marit]'," ;

// recup centre interet 
if (isset($_GET['internet'])) {
    $marequ .= '1,' ;
    $interet = 'Internet, ' ;
} else {
    $marequ .= '0,' ;
}

if (isset($_GET['micro'])) {
    $marequ .= '1,' ;
    $interet .= 'micro-informatique, ' ;
} else {
    $marequ .= '0,' ;
}

if (isset($_GET['jeux'])) {
    $marequ .= '1,' ;
    $interet .= 'jeux-videos.' ;
} else {
    $marequ .= '0,' ;
}

$marequ .= ')';
?>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Une petite réponse</title>
</head>

<body>
    <h2>Merci à vous, <?php echo $_GET['nom'] ; ?>.</h2>
    <p>Vous avez donc le bel âge de <b><?php echo $_GET['age'] ; ?></b> ans,
    vous êtes <b><?php echo $_GET['marit'] ; ?></b></p>
    <p>et vous vous intéressez à <b><?php echo $interet ; ?></b>.</p>

    <p>Je m'empresse d'envoyer la requête :<br>
    <b><?php echo $marequ ; ?><br></b> à notre base de données.</p>
</body>

</html>
