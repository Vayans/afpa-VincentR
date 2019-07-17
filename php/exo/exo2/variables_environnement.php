<?php $cejour = getdate();?>
<html>

<head>
<title>Les variables HTTP</title>
</head>

<body>
    <?php echo "<h2> En ce $cejour[mday] $cejour[month] $cejour[year] sur le serveur
     $_SERVER[SERVER_NAME], il est $cejour[hours]h$cejour[minutes].";?>
<h3>Variable HTTP serveur (getenv())</h3>
<table border="1">
<tr>
    <td><b>Variable</b></td>
    <td><b>Valeur</b></td>
</tr>
<tr>
    <td><?php echo 'GATEWAY_INTERFACE'; ?></td>
    <td><?php echo getenv('GATEWAY_INTERFACE'); ?></td>
</tr>
<tr>
    <td><?php echo 'SERVER_NAME'; ?></td>
    <td><?php echo getenv('SERVER_NAME'); ?></td>
</tr>
<tr>
    <td><?php echo 'SERVER_SOFTWARE'; ?></td>
    <td><?php echo getenv('SERVER_SOFTWARE'); ?></td>
</tr>
<tr>
    <td><?php echo 'SERVER_PROTOCOL'; ?></td>
    <td><?php echo getenv('SERVER_PROTOCOL'); ?></td>
</tr>
<?php foreach ($_SERVER as $item=>$valeur){ ?>
    <tr>
    <td><?php echo $item; ?></td>
    <td><?php echo $valeur; ?></td>
</tr>
<?php } ?>
</table>
    
</body>
</html>