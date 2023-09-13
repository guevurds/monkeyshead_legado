// "chamadas"
function chamadas(chamado) {
    var chamado = document.getElementById("'" + chamado + "'")
}
chamadas('rafael')
chamadas('iniTeste')

// console.log(inimigoTeste)

// captura das setas 
var controle = 1// controle pra nao andar que nem o the flash 
var capturarTeclado = () => {
    var tecla = event.keyCode;
    // alert(tecla)
    if (controle == 0) {
        // if pra evitar que o rafael ande caso uma tecla aleatoria seja clickado
        if (tecla >= 37 && tecla <= 40) {
            moverRafael(tecla)
            trocarSpriteRafael(rafaelLado)
            controle = 1
        }

    }
    if (tecla == 13) {
        proximaFala()
        if (falarcom) {
            eventoTeclado()
        }
    }
}
document.body.onkeydown = capturarTeclado;

// esquerda 37
// cima 38
// direita 39
// baixo 40

// rafael 
// funçoes de movimento
var rafael_X = 440
var rafael_Y = 260
var rafaelLado
var andou = 0

var aDireita, aEsquerda, aCima, aBaixo
aDireita = 0
aEsquerda = 0
aCima = 0
aBaixo = 0
var feito = 0
function moverRafael(tecla) {
    if (tecla == 37) {
        // esquerda
        rafaelLado = 'esquerda'
        if (validarConflitos(rafaelLado, 0)) { // pra garantir que ele n vai sair da tela do jogo 
            rafael_X -= 20

            aEsquerda += 1
        }
    } else if (tecla == 38) {
        // cima
        rafaelLado = 'cima'
        if (validarConflitos(rafaelLado, 0)) {
            rafael_Y -= 15

            aCima += 1
        }

    } else if (tecla == 39) {
        // direita 
        rafaelLado = 'direita'
        if (validarConflitos(rafaelLado, 0)) {
            rafael_X += 20 // rafael_X = rafael_X + 20

            aDireita += 1
        }
    } else if (tecla == 40) {
        // baixo
        rafaelLado = 'frente'
        if (validarConflitos(rafaelLado, 0)) {
            rafael_Y += 15
            aBaixo += 1

        }
    }

    moverDefinitivo(rafael, rafael_Y, rafael_X)
    if (!feito) {
        testeAndar(1)
    }
}

// animacao rafael andando
var andarMais = true

function trocarSpriteRafael(lado) {
    if (lado == 'frente') {
        rafael.style.background = "url('midia/rafaeis/rafael_frente_pe_direito.png') no-repeat ";
        rafael.style.backgroundSize = "100px 100px";
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_frente_pe_esquerdo.png') no-repeat ";
            rafael.style.backgroundSize = "100px 100px";
            moverRafael();
        }, 50)
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_parado_frente.png') no-repeat ";
            rafael.style.backgroundSize = "100px 100px";
        }, 100)
        setTimeout(() => {
            if (andarMais) { controle = 0 }

        }, 150)

    } else if (lado == 'direita') {
        rafael.style.background = "url('midia/rafaeis/rafael_direita_pe_esquerdo.png') no-repeat";
        rafael.style.backgroundSize = "100px 100px";
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_direita_pe_direito.png') no-repeat";
            rafael.style.backgroundSize = "100px 100px";
            moverRafael();
        }, 50)
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_parado_direita.png') no-repeat";
            rafael.style.backgroundSize = "100px 100px";
        }, 100)
        setTimeout(() => {
            if (andarMais) { controle = 0 }
        }, 150)
    } else if (lado == 'cima') {
        rafael.style.background = "url('midia/rafaeis/rafael_costas_pe_direito.png') no-repeat";
        rafael.style.backgroundSize = "100px 100px";
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_costas_pe_esquerdo.png') no-repeat";
            rafael.style.backgroundSize = "100px 100px";
            moverRafael();
        }, 50)
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_parado_costas.png') no-repeat";
            rafael.style.backgroundSize = "100px 100px"
        }, 100)
        setTimeout(() => {
            if (andarMais) { controle = 0 }
        }, 150)

    } else if (lado == 'esquerda') {
        rafael.style.background = "url('midia/rafaeis/rafael_esquerda_pe_direito.png') no-repeat";
        rafael.style.backgroundSize = "100px 100px";
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_esquerda_pe_esquerdo.png') no-repeat";
            rafael.style.backgroundSize = "100px 100px";
            moverRafael();
        }, 50)
        setTimeout(() => {
            rafael.style.background = "url('midia/rafaeis/rafael_parado_esquerda.png') no-repeat";
            rafael.style.backgroundSize = "100px 100px";
        }, 150)
        setTimeout(() => {
            if (andarMais) { controle = 0 }
        }, 150)
    }
}


// mover qualquer personagem SE PRECISAR

function moverDefinitivo(personagem, valorY, valorX) {
    personagem.style.left = valorX + "px"
    personagem.style.top = valorY + "px"
}
// inimigos
var ini_teste_X = 400
var ini_teste_Y = 200
function moverInimigoTeste() {

    moverDefinitivo(iniTeste, ini_teste_Y, ini_teste_X)
    console.log(dim_ini_teste)
}
var dim_ini_teste = [ini_teste_Y, ini_teste_X + 100, ini_teste_Y + 100, ini_teste_X]



setTimeout(() => {
    moverInimigoTeste()
}, 100)

// validar se o rafael vai passar por cima das coisas kkkk 
var numSala = 0 // numSala que ele vai estar inicia na numSala 0
var portas = 0

function validarConflitos(lado, dialogar) {
    if(numSala < 4) {
       return validarAndar(lado, dialogar)
    } else {
        if( numSala == 4) {
            
                if (lado == 'esquerda') {
                    if(rafael_X - 20 <= 340) {
                        return false
                    } else { return validarAndar(lado, dialogar) }

                } else if ( lado == 'direita') {
                    if(rafael_X +20 >= 500 && rafael_Y + 15> 260 ) {
                        return false
                    } else {
                        return validarAndar(lado, dialogar)
                    }

                }else if (lado == 'cima') {
                    if (rafael_Y <= 170) {
                        return false
                    }  else {
                        return validarAndar(lado, dialogar)
                    }
                } else if (lado == 'frente') {
                    if(rafael_X +20 >= 500 && rafael_Y + 15>= 260){
                        return false
                    } else {
                        return validarAndar(lado, dialogar)
                    }
                }
        } else if (numSala == 6 || numSala == 5 || numSala == 7)  {
            if(lado == 'cima') {
                if (rafael_Y <= 170) {
                    return false
                }  else {
                    return validarAndar(lado, dialogar)
                }
            } else if (lado == 'frente') {
                if(rafael_Y + 15>= 260) {
                    return false
                } else {
                    return validarAndar(lado, dialogar)
                }
            }else if (lado == 'esquerda' || lado == 'direita') {
                return validarAndar(lado, dialogar)
            }
        } else if (numSala == 8) {
            return validarAndar(lado, dialogar)
        }
    }
}

function validarAndar(lado, dialogar) { // parametros da direção e se é pra testar o andar ou o falar
    if (lado == 'esquerda') { // andar para a esquerda
        if (rafael_X - 20 < 0) {
            if (numSala == 1) {
                if (rafael_Y >= 245 && rafael_Y <= 335) {
                    numSala -= 2
                    ProximaSala()
                    return true
                } else {
                    return false
                }
            } // pra ele n passar a parede da esquerda
            return false // retorna falso pq ele n pode ficar com o x menor que 0 ou seja nao pode passsar a parede
        } else if ((numSala >= 1 && numSala <= 4) || numSala == 7) { // ve o numero da numSala se a numSala foi 0 não tera inimigo entao os testes dentro nao sao necessarios
            if (rafael_X - 20 <= dim_ini_teste[1] - 60 && rafael_Y + 100 > dim_ini_teste[0] && rafael_Y <= dim_ini_teste[2] && rafael_X >= dim_ini_teste[3] - 30) {
                // ACIMA ^ testes em relaçao as coordenadas do inimigo para que ele n possa atravessalo 
                if (dialogar == 0) {  // é a questao se ele esta tentando falar com o inimigo ou não 
                    return false // se n estiver retorna falso pq ele n pode andar em cima do bixo
                } else {  // se ele n pude rpassar por cima ele vai ativar a pergunta
                    return true // se ele estiver tentando falar com o bixo ai ele pode
                }
            } else { // caso numSala nao seja maior ou igual a 1
                if (dialogar == 0) { // no saco a a validaçao de novo do dialogar pq se ele pode andar ele n pode falar
                    return true // ele n pode falar mas pode andar se andar TRUE
                } else {
                    return false // se for pra falar da (FALSE)
                }
            }
        } else {
            if (dialogar == 0) {
                return true // se ele estiver na numSala 0
            } else {
                return false
            }
        }

        // Fim da esquerda / Inicio da Direita
    } else if (lado == 'direita') {
        if (numSala == 7) {
            if(rafael_X > 480) {

                dialogos()
                controle = 1
                andarMais = false
                portas++
                return true
            }
        }
        if (rafael_X + 20 >= 820) {  // se ele estiver tentando passar a parede da direita
            // teste para entrar na porta e trocar o mapa
            if (numSala >= 4 && numSala <= 6) {
                if (rafael_Y >= 170 && rafael_Y <= 245) {
                    if (portas == numSala + 1) {
                        chamarTrocarMapa()
                        controle = 1
                        andarMais = false
                        return true // retorna true dizendo que ele pode andar
                    } else {
                        return false
                    }
                }
            }
            else if (rafael_Y >= 245 && rafael_Y <= 335) {

                if (numSala == 0) {
                    if (portas == numSala + 1) {
                        chamarTrocarMapa()
                        controle = 1
                        andarMais = false
                        return true // retorna true dizendo que ele pode andar
                    } else {
                        balao(1, 'não va ai agr!', 25)
                        return false
                    }
                }
            } else {
                if (dialogar == 0) {
                    return false // se ele estiver na numSala 0
                } else {
                    return false
                }
            }
        } else if (numSala >= 1) { // validar a numSala

            if (rafael_X + 20 >= dim_ini_teste[3] - 40 && rafael_Y + 100 > dim_ini_teste[0] && rafael_Y <= dim_ini_teste[2] && rafael_X < dim_ini_teste[3] - 40) {
                if (dialogar == 0) {
                    return false
                } else {
                    return true
                }
            } else {
                if (dialogar == 0) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            if (dialogar == 0) {
                return true // se ele estiver na numSala 0
            } else {
                return false
            }
        }

        // fim da direita / Inicio de Cima
    } else if (lado == 'cima') {
        // padrão zin
        // independe da sala
        if (rafael_Y - 15 <= 95) {
            if (numSala == 3) {
                    if (rafael_X >= 400 && rafael_X <= 480) {
                        if (portas == numSala + 1) {
                            if (rafael_Y -15 < 95) { 
                                chamarTrocarMapa()
                            controle = 1
                            andarMais = false
                            }
                            return true
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }

            } else if (rafael_Y - 15 <= 15) {
                if (numSala == 1 || numSala == 2) {
                    if(rafael_X >= 400 && rafael_X <= 560) {
                        if (portas == numSala + 1) {
                            chamarTrocarMapa()
                            controle = 1
                            andarMais = false
                            return true
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            } else {
                return true
            } 
        } else if (numSala >= 1) { // se sala maior que um (pq vai ter umm inimigo)

            if (rafael_X > dim_ini_teste[3] - 40 && rafael_X < dim_ini_teste[1] - 40 && rafael_Y >= dim_ini_teste[0] - 95 && rafael_Y - 15 < dim_ini_teste[2] + 5) {
                if (dialogar == 0) {
                    return false
                } else {
                    return true
                }
            } else {
                if (dialogar == 0) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            if (dialogar == 0) {
                return true // se ele estiver na numSala 0
            } else {
                return false
            }

        }



        // por sala 



        // Fim de Cima / Inicio de Baixo ou Frente 
    } else if (lado == 'frente') {
        if (rafael_Y + 15 > 590) {
            if (numSala == 2 || numSala == 3) {
                if (rafael_X >= 340 && rafael_X <= 500) {
                    numSala -= 2
                    chamarTrocarMapa()
                    controle = 1
                    andarMais = false
                    return true // retorna true dizendo que ele pode andar
                }
            } else {
                return false
            }
        } else if (numSala >= 1) {
            if (rafael_X > dim_ini_teste[3] - 40 && rafael_X < dim_ini_teste[1] - 40 && rafael_Y + 15 >= dim_ini_teste[0] - 95 && rafael_Y < dim_ini_teste[2] + 5) {
                if (dialogar == 0) {
                    return false
                } else {
                    return true
                }
            } else {
                if (dialogar == 0) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            if (dialogar == 0) {
                return true // se ele estiver na numSala 0
            } else {
                return false
            }
        }
    }
}
// teste pra chamar as perguntas (ou não)
var val = 1
function eventoTeclado() {

    if (val == 1) {
        if (validarAndar(rafaelLado, 1)) {
            MostraPergunta()
            val = 0
        }
    } else {
        EsconderPergunta()
        val = 1
    }
}
//  trocar o mapa 
function chamarTrocarMapa() {
    controle = 1
    ProximaSala()
}

function inimigoLocal() {
    if (numSala == 1) {
        ini_teste_X = 400
        ini_teste_Y = 200
    } else if (numSala == 2) {
        ini_teste_X = 260
        ini_teste_Y = 275
    } else if (numSala == 3) {
        ini_teste_X = 320
        ini_teste_Y = 335
    } else if (numSala == 4) {
        ini_teste_X = 400
        ini_teste_Y = 200
    } else if(numSala == 9) {
        ini_teste_X = 400
        ini_teste_Y = 200
    } else {
        ini_teste_X = -9999
        ini_teste_Y = -9999
    }
    // independente da sala
    iniTeste.style.display = 'block'
    dim_ini_teste = [ini_teste_Y, ini_teste_X + 100, ini_teste_Y + 100, ini_teste_X]
    moverInimigoTeste()
}


function testeAndar(parametro) {
    if (aEsquerda >= 1 && aDireita >= 1 && aCima >= 1 && aBaixo >= 1) {
        dialogos()
        feito = 1
    }
}

