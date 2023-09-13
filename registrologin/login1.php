
<?php 
session_start();
?>

<!DOCTYPE html>
<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> Logar na Conta </title>
        <link rel="stylesheet" href="../_css/geral.css">
        <link rel="stylesheet" href="../_css/registrologin.css">
    </head>

    <body>

        

    <div id="cadastrologin"> 

         <div id="afastamento1">

             <h1> Fazer Login</h1>

         </div>


            <?php if(isset($_SESSION['nao_autenticado'])): ?>

        <div id="afastamento2" class="invalido"> <h2> Usuario ou senha invalido</h2> <div>
            
<?php
 endif; 
 unset($_SESSION['nao_autenticado']);
 ?>
        <div id="login">

        <form method="POST" action="login.php" >
            <input type="text" name="usuario" placeholder="usuario">
            <input type="password" name="senha" placeholder="senha">

             <input type="submit" value="enviar">
        </form>
    </div>
    </div>

    </body>
</html>