<?php

require 'Voiture.php';

$maVoiture = new Voiture('AB-123-CD', 'rouge', 2, 100, 60.0, 5);
?>

<html>
<head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
    <title>Voiture</title>
</head>

<body>
    <?php var_dump($maVoiture) ?>
    <?php $maVoiture->setAssure(true) ?>
    <hr>
    <?php var_dump($maVoiture) ?>
    <?php $maVoiture->repeindre('rouge') ?>
    <hr>
    <?php var_dump($maVoiture) ?>
</body>

</html>

