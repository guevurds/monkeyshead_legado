<?php
session_start();
?>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> CabecaDeManoel </title>
    <link rel="stylesheet" type="text/css" href="_css/geral.css">
    <link rel="stylesheet" type="text/css" href="_css/home.css">

    <script type="text/javascript">


    </script>
    <section id="all">

        <header id="cabecalho">
            <nav class="menu">
                <ul>
                    <li><a href="#inicio">inico</a></li>
                    <li><a href="#linkjogos">jogos</a></li>
                    <li><a href="#contato">contato</a></li>
                </ul>

            </nav>

            <div class="autenticacao">
                <?php 
                
                if($_SESSION['usuario']) {
                    echo " <div id='logado'> 
                   <peq> Logado:  </peq> <d> {$_SESSION['usuario']} </d>
                   <peql> <a href='logout.php'> Sair </a> </peql> 
                       </div>
                    ";
                } else {
                    echo "<li><a href='registrologin/login1.php'>login</a></li>
                         <li><a href='registrologin/registrando.php'>registrar</a></li>";
                };

                ?>
                
                </ul>
            </div>
            <ul>

        </header>

        <section id="inicio" class="paginas">
            <h1 class="myTitulo"> Inicio</h1>

            <h1> MonkeyHead </h1>

            <p class="aviso">
                MonkeyHead precisa de anuncios para gerar algum dinheiro seja compreensivo
            </p>

            <h2> Sobre </h2>

            <p>
                este site foi criado pro min Manoel da Silveira Rocha Junior, com a intençâo de poder mostrar a meus
                amigos e colegas
                oq eu estava fazando de "Legal" com a programação, mas recente eu decidi tentar fazer algo um pouco mais
                profissional,
                ainda sou um aspirante a desenvolvedor mas talvez você goste do meu trabalho.
            </p>

            <p>
                Sozinho eu não posso ir tao longe entao tentarei montar uma equipe e talvez transformar isso em "algo de
                verdade",
                se você tiver algum conhecimento de programação, design ou só tem uma historia que acha que ficaria
                legal em um jogo,
                você pode entrar em <a href="#contato">contato</a> e nos podemos conversar.
            </p>


        </section>


        <section id="jogos" class="paginas">
            <div id="linkjogos"></div>
            <h1 class="myTitulo">Jogos</h1> 

            <div id="gamesName">

                <h2>Jogos</h2>

                <table>

                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <td onmousemove="selecionado('moto')" onmouseleave="voltar()" onclick="link(1)">
                            <h3 class="game"> <a href="_jogos/_motogrupo/MotoGrupoClicker.html"> MotoGrupo Clicker </a> </h3>
                        </td>
                    </tr>
                    <tr>
                    <td onmousemove="selecionado('nightmare')" onmouseleave="voltar()" onclick="link(2)">
                            <h3 class="game"> <a href="_jogos/_rafasnightmare/thenightmare.html"> Rafa's Nightmare </a> </h3>
                        </td>
                    </tr>

                </table>
            </div>

            <div id="gamesImage">

            <section id="section1">

                <div class="slides1" id="slide1">
                    <h1> 1 </h1>
                </div>

                <div class="slides1" id="slide2">
                    <h1> 2 </h1>
                </div>

                <div class="slides1" id="slide3">
                    <h1> 3 </h1>
                </div>

            </section>

            <section id="section2">

                <div class="slides2" id="slide4">
                    <h1> 4 </h1>
                </div>
                <div class="slides2" id="slide5">
                    <h1> 5 </h1>
                </div>
                <div class="slides2" id="slide6">
                    <h1> 6 </h1>
                </div>

            </section>

            </div>

            <div id="entre">
                <p>
                    Infelizmente temos poucos jogos (um jogo) no momento, mas é um começo
                </p>

            </div>


        </section>

        <section id="contato" class="paginas">
            <h1 class="myTitulo"> Contato</h1>

            <h2> Ainda Estou Trabalhando nisso... </h2>
        </section>


    </section>

    <div id="chiu"></div>

    <script>

        var fase = 1
        var emcima = 0
        var oSlide
        var td

        var mouse = "nada"
        var seila = 0

        function inicio() {
            const slides = document.querySelectorAll("#gamesImage > section")
            oSlide = Array.from(slides)
            const gamet = document.querySelectorAll("td")
            td = Array.from(gamet)
            
            processo1()
        }

        function processo1() {
            if (fase == 1) {
                oSlide[0].style.display = "block"
                oSlide[1].style.display = "none"
                td[0].style.color = "black"
                td[0].style.backgroundColor = "white"
                td[1].style.color = "white"
                td[1].style.backgroundColor = "#333"
                setTimeout(() => {
                    if (fase == 1) {
                        fase = 2
                    processo1()
                    }
                    
                }, 15000)
            } else if (fase == 2) {
                oSlide[1].style.display = "block"
                oSlide[0].style.display = "none"
                td[1].style.color = "black"
                td[1].style.backgroundColor = "white"
                td[0].style.color = "white"
                td[0].style.backgroundColor = "#333"
                setTimeout(() => {
                    if (fase == 2) {
                        fase = 1
                    processo1()
                    }
                    
                }, 15000)
            }
        }

        function selecionado(qual) {
            if(qual == "moto") {

                if(emcima == 0) {
                    fase = 0
                    emcima = 1
                    oSlide[0].style.display = "block"
                    oSlide[1].style.display = "none"
                    td[0].style.color = "black"
                    td[0].style.backgroundColor = "white"
                    td[1].style.color = "white"
                    td[1].style.backgroundColor = "#333"
                }  
            } else if (qual == "nightmare") {
                if (emcima == 0) {
                    fase = 0
                    emcima = 1
                    td[1].style.color = "black"
                    td[1].style.backgroundColor = "white"
                    td[0].style.color = "white"
                    td[0].style.backgroundColor = "#333"
                    oSlide[1].style.display = "block"
                    oSlide[0].style.display = "none"
                }
            }
        }

        function voltar() {
            fase = 1
            emcima = 0
            processo1()
        }

        function link(qual) {
            const gameLink = document.querySelectorAll(".game > a")
            const gameArray = Array.from(gameLink)
            if (qual == 1) {
                gameArray[0].click()
            }
        }

        inicio()






    </script>





    </body>

</html>