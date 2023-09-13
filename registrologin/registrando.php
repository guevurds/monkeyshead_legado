<?php
session_start();
$a = 2;
$b = 3;
?>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> Criar Conta </title>
        <link rel="stylesheet" href="../_css/geral.css">
        <link rel="stylesheet" href="../_css/registrologin.css">
    </head>

    <body>

        

        <div id="cadastrologin"> 

            <h1> Criar Conta </h1>
        <?php 
        
        if($_SESSION['status_cadastro']) {
            echo " <a href='login1.php'> <div class='valido'><h2> Cadastro Efetuado! Clique aqui e faça o login informando seu usuario e senha </h2></div> </a>";
         } else if ($_SESSION['usuario_existe']) {
             echo "<div class='invalido'><h2> O Usuario informado ja existe, tente outro </h2></div>";
         } else if ($_SESSION['senha_diferente']) {
            echo "<div class='invalido'><h2> As senhas não são iguais </h2></div>";
         };

         unset($_SESSION['status_cadastro']);
         unset($_SESSION['usuario_existe']);
         unset($_SESSION['senha_diferente']);

        ?>
           <div id="registro">
        <form method="POST" action="cadastrando.php" >
            <input type="text" name="nome" placeholder="Nome">
            <input type="text" name="usuario" placeholder="Usuario">
            <input type="password" name="senha" placeholder="Senha">
            <input type="password" name="confsenha" placeholder="Confirmar Senha">
            <input type="email" name="gmail" placeholder="Email">
            <label> Sexo:</label>
             <div>
                 <input type="radio" name="sexo" value="homem"> Homem
                 <input type="radio" name="sexo" value="mulher"> Mulher
             </div>

             <input type="submit" value="Enviar">
        </form>

        </div>

    </div>

    </body>
</html>