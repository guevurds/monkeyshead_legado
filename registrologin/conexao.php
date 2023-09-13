<?php
// define('HOST' , 'localhost');
// define('USUARIO' , 'root');
// define('SENHA' , 'manegtmane1');
// define('DB' , 'usuario');

define('HOST' , 'sql202.epizy.com');
define('USUARIO' , 'epiz_26729011');
define('SENHA' , 'KLDxHUqUJ0');
define('DB' , 'epiz_26729011_usuario');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possivel conectar');


?>