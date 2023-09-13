<?php 
session_start();
include('conexao.php');

if(empty($_POST['usuario']) || empty($_POST['senha']) || empty($_POST['nome']) || empty($_POST['confsenha']) || empty($_POST['gmail']) || empty($_POST['sexo']) ) {
    header('Location: registrando.php');
    exit;
};

$nome_usuario = mysqli_real_escape_string($conexao, trim($_POST['nome']));
$usuario = mysqli_real_escape_string($conexao, trim($_POST['usuario']));
$senha = mysqli_real_escape_string($conexao, trim(md5($_POST['senha'])));
$confirmar_senha = mysqli_real_escape_string($conexao, trim(md5($_POST['confsenha'])));
$email_user = mysqli_real_escape_string($conexao, trim($_POST['gmail']));
$sexo_user = mysqli_real_escape_string($conexao, trim($_POST['sexo']));
 
$sql = "select count(*) as total from usuario where usuario = '{$usuario}'";

$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);

if($row['total'] == 1) {
    $_SESSION['usuario_existe'] = true;
    header('Location: registrando.php');
    exit;
} else if($senha != $confirmar_senha) {
    $_SESSION['senha_diferente'] = true;
    header('Location: registrando.php');
    exit;
};


 $sql = "INSERT INTO usuario (usuario, nome_usuario, email_usuario, sexo_usuario, senha_usuario) VALUES ('{$usuario}', '{$nome_usuario}', '{$email_user}', '{$sexo_user}', '{$senha}')";

if($conexao->query($sql) === TRUE) {
    $_SESSION['status_cadastro'] = true;
};

$conexao->close();

header('Location: registrando.php');
exit;




?>