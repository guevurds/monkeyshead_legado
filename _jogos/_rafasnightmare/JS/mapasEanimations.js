// o de sempre... chamar o mapa
window.onload = () => {

    // trocar o mapa
    const mapa = document.getElementById('mapa')
    const animacao = document.getElementById('animacao')

    // parte para a animacao 
    const FundoInicio = document.getElementById('FundoInicio')
    console.log(FundoInicio)
    const nameGame = document.getElementById('nameGame')
    console.log(nameGame)
    const ofer = document.getElementById('ofer')
    const ofer1 = document.getElementById('ofer1')
    const play = document.getElementById('play')
    console.log(play)

    //keane
    const keane = document.getElementById('keane')

}

portas

var numSala = 0
var cliqueplay = 0
var morte = 0
var salaChegou = 0
// trocar a sala 
function ProximaSala() {
    numSala += 1
    if (numSala == 0) {
        animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)
        setTimeout(() => {
            mapa.style.background = "url('midia/mapas/c1.png') no-repeat"
            mapa.style.backgroundSize = "900px 700px"
            passouAporta()
        }, 500)

        if (salaChegou == numSala) {
            mostrarKeane(210, 110)
        }

    }
    else if (numSala == 1) {
        // troca o fundo
        animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)
        setTimeout(() => {
            if (salaChegou == 0) {
                segundoVideo()

            }

            passouAporta()
            mapa.style.background = "url('midia/mapas/c2.png') no-repeat"
            mapa.style.backgroundSize = "900px 700px"

            if (salaChegou < numSala) {
                mostrarKeane(210, 110)
                salaChegou = 1
            }

        }, 500)

    } else if (numSala == 2) {
        animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)

        setTimeout(() => {

            passouAporta()
            mapa.style.background = "url('midia/mapas/c3.png') no-repeat"
            mapa.style.backgroundSize = "900px 700px"

            if (salaChegou < numSala) {
                mostrarKeane(320, 170)
                salaChegou = 2
            }

        }, 500)

    } else if (numSala == 3) {
        animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)

        setTimeout(() => {

            mapa.style.background = "url('midia/mapas/c4.png') no-repeat"
            mapa.style.backgroundSize = "900px 700px"
            passouAporta()

            if (salaChegou < numSala) {
                mostrarKeane(580, 365)
                salaChegou = 3
            }

        }, 500)

    } else if (numSala == 4) {

        animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)

        setTimeout(() => {
            mapa.style.background = "url('midia/mapas/c5.png') no-repeat"
            mapa.style.backgroundSize = "900px 700px"
            passouAporta()

            if (salaChegou < numSala) {
                mostrarKeane(210, 110)
                salaChegou = 4
            }
        }, 500)

    } else if (numSala == 5) {

        animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)

        setTimeout(() => {
            mapa.style.background = "url('midia/mapas/c6.png') no-repeat"
            mapa.style.backgroundSize = "900px 700px"
            passouAporta()

            if (salaChegou < numSala) {
                mostrarKeane(210, 110)

            }
        }, 500)

        setTimeout(() => {
            if (salaChegou < 5) {
                dialogos()
                salaChegou = 5
            }
        }, 1500)


        // Não Existe a Sala 6 pq na vdd ela é a 5 (é confuso mais meio que duas salas se passam em uma só para se ter 2 perguntas...)

    } else if (numSala == 7) {

        animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)

        setTimeout(() => {
            mapa.style.background = "url('midia/mapas/c7.png') no-repeat"
            mapa.style.backgroundSize = "900px 700px"
            passouAporta()

            if (salaChegou < numSala) {
                mostrarKeane(300, 200)
            }

            setTimeout(() => {
                if (salaChegou < numSala) {
                    salaChegou = 7
                    mostrarKeane(300, 200)
                    dialogos()
                }
            }, 1000)

        }, 500)
    } else if (numSala == 8) {
        // kkkkk a sala 8 kkkkkkkk ... dela não tem volta
        animacaoOpacidade(animacao, 0, 2, 100, 0.2, 0.1)

        setTimeout(() => {
            mapa.style.background = "url('midia/mapas/motoc/c1.PNG') no-repeat"
            mapa.style.backgroundSize = "900px 700px"
            passouAporta()
            mostrarKeane(500, 350)
            setTimeout(() => {
                if(cliqueplay == 1) {
                    musicaMotoClicker(0)
                }
                setTimeout(() => {
                    dialogos()
                }, 3000)
            }, 1000)

        }, 500)
    } else if(numSala == 9) {
        mapa.style.background = "url('midia/mapas/c8.png') no-repeat"
        mapa.style.backgroundSize = "900px 700px"
        inimigoLocal()
        qualInimigo()
        dialogos()
        animacaoOpacidade(animacao, 1, 1, 100, 0.1, 0.1 )

        setTimeout(() => {
             rafaelgirando = 2
             jogaRafael()
        })

    }

    setTimeout(() => {
        // keane 

    }, 500)

}

function passouAporta() {
    if (numSala == 0) {
        rafael_X = 800
        keane.style.display = 'none'
    } else if (numSala == 1) {
        rafael_X = 0
    } else if (numSala == 2) {
        rafael_Y = 590
    } else if (numSala == 3) {
        rafael_Y = 590
    } else if (numSala == 4) {
        rafael_Y = 590
    } else if (numSala == 5) {
        rafael_X = 0
    } else if (numSala == 6) {
        // essa não0 exite kkk
    } else if (numSala == 7) {
        rafael_X = 0
    } else if (numSala == 8) {
        rafael_Y = 580
        rafael_X= 40
    }
    moverDefinitivo(rafael, rafael_Y, rafael_X)
    inimigoLocal()
    qualInimigo()
    controle = 0
    andarMais = true
}

function animacaoOpacidade(obj, opacidade, JAopaco, tempo, opmais, opmenos) {
    setTimeout(() => {
        if (opacidade < 1 && (JAopaco == 0 || JAopaco == 2)) {
            opacidade += opmais
            obj.style.opacity = opacidade
            if (opacidade >= 1 && JAopaco == 0) {
                JAopaco = 1 // pra ver se a tela ja ficou preta
            }
            // alert(opacidade, JAopaco)
            animacaoOpacidade(obj, opacidade, JAopaco, tempo, opmais, opmenos)
        } else if (opacidade < 2 && opacidade > 0 && JAopaco == 1) {
            opacidade -= opmenos
            obj.style.opacity = opacidade

            // alert(opacidade, JAopaco)
            animacaoOpacidade(obj, opacidade, JAopaco, tempo, opmais, opmenos)
        }
    }, tempo)
}

var tempoInicio = 500
function animacaoInicio() {
    if (tempoInicio == 500) {
        setTimeout(() => {
            animacaoOpacidade(nameGame, 0, 0, 150, 0.1, 0.1)
        }, tempoInicio)
        setTimeout(() => {
            animacaoOpacidade(ofer, 0, 0, 130, 0.1, 0.1)
        }, tempoInicio * 7)
        setTimeout(() => {
            animacaoOpacidade(ofer1, 0, 0, 150, 0.1, 0.1)
        }, tempoInicio * 13)
    }

    setTimeout(() => {
        play.style.display = "block"
        animacaoOpacidade(play, 0, 2, 100, 0.1, 0.1)
    }, tempoInicio * 20)
}

animacaoInicio()

// clique que vai dar inicio ao jogo...

function playClicado() {
    if (morte == 0) {
        // declarando video do inicio
        const videoInt = document.getElementById('introducao')
        if (cliqueplay == 0) {
            cliqueplay = 1
            animacaoOpacidade(play, 1, 1, 100, 0.1, 0.1)
            setTimeout(() => {
                animacaoOpacidade(FundoInicio, 1, 1, 150, 0.1, 0.1)
                setTimeout(() => {
                    FundoInicio.style.display = 'none'
                    videoInt.style.display = 'block'
                }, 1500)
            }, 1000)

            setTimeout(() => {
                animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)
            }, 800)

            setTimeout(() => {

                videoInt.oncontextmenu = () => false
                playVideo(videoInt)
            }, 1600)
        }
    } else {
        if (cliqueplay == 0 && portas < 8) {
            cliqueplay = 1
            animacaoOpacidade(play, 1, 1, 100, 0.1, 0.1)
            setTimeout(() => {
                animacaoOpacidade(FundoInicio, 1, 1, 150, 0.1, 0.1)
                var musicaFundo = document.getElementById('FundoInicioMusica')
                musicaFundo.play()
                musicaFundo.loop = true
                setTimeout(() => {
                    FundoInicio.style.display = 'none'
                }, 1500)
            }, 1000)

            setTimeout(() => {
                animacaoOpacidade(animacao, 0, 0, 100, 0.2, 0.1)
            }, 800)
            dialogos()

        } else if (cliqueplay == 0) {
            cliqueplay = 1
            animacaoOpacidade(play, 1, 1, 100, 0.1, 0.1)
            setTimeout(() => {
                animacaoOpacidade(FundoInicio, 1, 1, 150, 0.1, 0.1)
                musicaMotoClicker(0)
                setTimeout(() => {
                    FundoInicio.style.display = 'none'
                }, 1500)
            }, 1000)

            dialogos()
        }
    }

}
// videos..

function playVideo(video) {
    video.play()
    validarFimVideo(video)
}


var ovideo = 0
var acabouOVideo = ovideo.currentTime / ovideo.duration

function validarFimVideo(video) {
    var pular = document.getElementById('pular')
    pular.style.display = "block"
    ovideo = video
    setTimeout(() => {
        acabouOVideo = ovideo.currentTime / ovideo.duration
        if (acabouOVideo == 1) {
            // o processo 
            animacaoOpacidade(video, 1, 1, 100, 0.1, 0.1)
            setTimeout(() => {
                video.style.display = "none";
                controle = 0
                pular.style.display = 'none'
                dialogos()
            }, 1000)
        } else {
            validarFimVideo(video)
        }
    }, 500)

    
}

function pularVideo() {
    var pular = document.getElementById('pular')
    pular.style.display = "block"

  
        ovideo.currentTime = ovideo.duration

}

function segundoVideo() {
    video2 = document.getElementById('video2')
    video2.style.opacity = 1
    video2.style.display = "block"
    video2.oncontextmenu = () => false
    setTimeout(() => {
        playVideo(video2)
    }, 400)
}

function chamarMorte() {
    // parar musicas 
    var musicaFundo = document.getElementById('FundoInicioMusica')
    musicaFundo.pause()
    musicaFundo.loop = false
    musicaMotoClicker(1)

    //iniciar o video da morte
    const videoMorte = document.getElementById('videoMorreu')
    videoMorte.oncontextmenu = () => false
    setTimeout(() => {
        animacaoOpacidade(videoMorte, 0, 2, 100, 0.1, 0.1)
        videoMorte.style.display = 'block'

        setTimeout(() => {
            resetar(checkpoint)
            FundoInicio.style.opacity = 1
            FundoInicio.style.display = 'block'
            tempoInicio = 20
            animacaoInicio()
        }, 1000)


        EsconderPergunta()
    }, 1000)
    setTimeout(() => {

        playVideo(videoMorte)
    }, 1500)


}

// musicas ...

function musicaMotoClicker(stop) {
    var musicaMoto = document.getElementById('musicaMoto')
    if (stop == 0) {
        musicaMoto.play()
        musicaMoto.loop = true
    } else {
        musicaMoto.pause()
    }

}


// keane 
var keane_X = 150
var keane_Y = 150
function moverKeane(paraX, paraY) {
    var andar = 0

    if (keane_X < paraX) {
        keane_X += 5
        andar = 1
    } else if (keane_X > paraX) {
        keane_X -= 5
        andar = 1
    }

    if (keane_Y < paraY) {
        keane_Y += 5
        andar = 1
    } else if (keane_Y > paraY) {
        keane_Y -= 5
        andar = 1
    }

    if (andar == 1) {
        andarKeane(paraX, paraY)
    }

}

function andarKeane(paraX, paraY) {

    setTimeout(() => {
        moverDefinitivo(keane, keane_Y, keane_X)
        moverKeane(paraX, paraY)
    }, 50)

}

var continuaBug = 0

function bugDoKeane() {
    if (continuaBug == 1) {
        setTimeout(() => {
            moverDefinitivo(keane, (Math.random() * 900), (Math.random() * 650))
            bugDoKeane()
        }, 100)
    } else {
        moverDefinitivo(keane, keane_Y, keane_X)
    }

}

// programar baloes (eu acho)
var falando = false

function balao(qual, texto, tamanho) {

    const fala = document.getElementById('texto')
    const imagem = document.getElementById('imagem')
    var balao = fala
    var cabeca

    imagem.style.display = 'block'

    falando = true

    if (qual == 1) {
        // keane
        cabeca = "url('midia/outrasImg/keanecabeca.png')"

    } else if (qual == 2) {
        // rafael
        cabeca = "url('midia/outrasImg/rafaelcabeca.png')"

    } else if (qual == 3) {
        // a harley mano
        cabeca = "url('midia/outrasImg/cabecadeHarley.png')"

    } else if(qual == 4) {
        // zuck
        cabeca = "url('midia/outrasImg/cabecadeZuck.png')"
    } else {
        // açao? voz do alem?
        imagem.style.display = 'none'
    }

    imagem.style.background = cabeca + ' no-repeat'
    imagem.style.backgroundSize = '150px, 150px'

    balao.style.fontSize = tamanho + "px"

    balao.innerHTML = "<p>" + texto + "</p>"

}


var dialogoAberto = false
var tempoEspera = false
var falarcom = false
var podePular = true
function proximaFala() {
    if (!tempoEspera) {
        if (dialogoAberto == true) {
            falarcom = false
            numFala++
            dialogos()
            tempoEspera = true
        } else {
            if (podePular = true) {
                falarcom = true
            } else {
                falarcom = false
            }
        }
    }

    setTimeout(() => {
        if (podePular == true) {
            tempoEspera = false
        }
    }, 1000)

}

function fecharDialogo() {
    const caixaDialogo = document.getElementById('caixaDialogo')
    caixaDialogo.style.display = 'none'
    dialogoAberto = false
    numFala = 1
    numDialogo++
    andarMais = true
    falando = false
    if( cliquedamoto == false) {controle = 0}
}

function keaneAproximaSala(x, y, tempo) {
    andarKeane(x, y)
    setTimeout(() => {
        keane.style.display = 'none'
        controle = 0
        andarMais = true
        portas++
    }, tempo)
}

function mostrarKeane(x, y) {
    keane.style.display = 'block'
    keane_X = x
    keane_Y = y
    moverDefinitivo(keane, keane_Y, keane_X)
}


// dialogos 
numDialogo = 0
var numFala = 1
function dialogos() {
    const caixaDialogo = document.getElementById('caixaDialogo')
    caixaDialogo.style.display = 'block'
    var musicaFundo = document.getElementById('FundoInicioMusica')
    dialogoAberto = true
    andarMais = false
    controle = 1

    if (numDialogo == -1) {
        numDialogo = 2
    }

    else if (numDialogo == 0) {
        if (numFala == 1) {
            musicaFundo.play()
            musicaFundo.loop = true

            musicaMotoClicker(1)
            
            balao(1, 'use as setas do teclado para se mover. Ande para cima, baixo, direita e esquerda (aperte <b>ENTER</b> para a proxima fala ou para continuar)', 20)
        } else if (numFala == 2) {

            fecharDialogo()
        }

    } else if (numDialogo == 1) {
        if (numFala == 1) {
            balao(1, `muito bem, Lembre-se disso: "98453" e OEM, você vai precisar... <br>
            Agora, siga-me`, 25)
        } else if (numFala == 2) {
            keaneAproximaSala(830, 270, 8100)

            fecharDialogo()
        }

    } else if (numDialogo == 2) {

        if (numFala == 1) {
            balao(1, 'muito bem, ali esta um inimigo, ande até ele e aperte <b> ENTER </b>, mas cuidado!, se você errar você <B>MORRE!</b>', 24)
        } else if (numFala == 2) {
            balao(2, 'Meu inimigo é uma velha???', 20)
        } else if (numFala == 3) {
            balao(1, 'Foi você que sonhou com isso cara, <br> Você é Louco', 20)
        } else if (numFala == 4) {
            balao(2, 'Cadê a nicotina?')
        } else if (numFala == 5) {
            fecharDialogo()
        }

    } else if (numDialogo == 3) {
        if (numFala == 1) {
            balao(1, 'Muito Bem! <br> Ao Proximo', 20)
        } else if (numFala == 2) {
            keaneAproximaSala(440, 0, 3100)

            fecharDialogo()
        }

    } else if (numDialogo == 4) {
        if (numFala == 1) {
            balao(1, 'Muito Bem! <br> Ao Proximo', 20)
        } else if (numFala == 2) {
            keaneAproximaSala(440, 0, 3100)

            fecharDialogo()
        }
    } else if (numDialogo == 5) {
        if (numFala == 1) {
            balao(1, 'Muito Bem! <br> A caverna!', 20)
        } else if (numFala == 2) {
            caixaDialogo.style.display = 'none'
            podePular = false
            tempoEspera = true
            dialogoAberto = false
            keaneAproximaSala(440, 0, 3100)
            setTimeout(() => {
                balao(2, `Pelomenos ele não disse "Ao Proximo"... `, 20)
                caixaDialogo.style.display = 'block'
                setTimeout(() => {
                    podePular = true
                    tempoEspera = false
                    dialogoAberto = true
                }, 500)
            }, 3200)
        } else if (numFala == 3) {
            balao(1, '(De dentro da caverna) Eu Ouvi isso! ', 20)
        } else if (numFala == 4) {
            fecharDialogo()
        }
    } else if (numDialogo == 6) {
        if (numFala == 1) {
            caixaDialogo.style.display = 'none'
            podePular = false
            tempoEspera = true
            dialogoAberto = false
            falarcom = false
            setTimeout(() => {
                balao(2, 'Você não vai dizer nada!?', 20)
                caixaDialogo.style.display = 'block'
                setTimeout(() => {
                    podePular = true
                    tempoEspera = false
                    dialogoAberto = true
                }, 500)
            }, 3500)
        } else if (numFala == 2) {
            balao(1, `Não, você reclamou do meu "Muito Bem!, Ao Proximo"`, 20)
        } else if (numFala == 3) {
            balao(2, 'Não foi serio, Você se abala muito facil...', 20)
        } else if (numFala == 4) {
            balao(1, 'Vamos!', 25)
        } else if (numFala == 5) {
            keaneAproximaSala(810, 230, 6000)

            fecharDialogo()
        }
    } else if (numDialogo == 7) {
        if (numFala == 1) {
            balao(1, `Então, alI N@ N@!u3L@ P09t@ 324o2674529632874631432180473615tgewqf6ewtdgd6r8sad7saD9RSAsv762362g432614732tedqf6dsads<br>
                           sa7d6s7a6d9sa7d7s67sa876dsa76d8s6f7ds96ad7sa6fd7as87ds6f87ds6af9dsa6fa868d7s6fda7s6ds867fdsa6ds89f7s6fad7s6f9d86saf<br>
                           7ds6f7a8d6s87f6ds9a6f7ds67af6ds76f7d8s9af7ds6f7ds6f7asd986s7a6fdsa6f7dsa698d6sf7a6ds9f767df6ads9f7ds6f79ds6f87ds6a7<br>
                           a8s7d6sa89D67SA87dsa896D7SA6d98sad7sa96D9SA6786sa98D67SAd6sa86DSA89d67s96d9as7ds8967S6D78 e92f19162a2c4cbc200e9c724b56f311
                           44859ac32070e154f3f404ff51f92e87 88df14e6957d2adb8ae54d0269f546ab 308741e53acba4778e5f5cfdf1ca8cb2
                          308741e53acba4778e5f5cfdf1ca8cb2 4e76434eea3c9d9cf9cb10bbf3f4a74b 4e76434eea3c9d9cf9cb10bbf3f4a74b
                          de8db2ceb5324d1964b7285cc195cd56 8d09ab77c546a9a2d06307bc34226822 4e76434eea3c9d9cf9cb10bbf3f4a74b
                           7ca1accbd924cc73490ff12576c2432c`)
        } else if (numFala == 2) {
            fecharDialogo()
            continuaBug = 1
            bugDoKeane()
            setTimeout(() => {
                dialogos()
            }, 5000)
        }
    } else if (numDialogo == 8) {
        if (numFala == 1) {
            balao(2, 'o que que ta acontecendo????', 20)
        } else if (numFala == 2) {
            balao(1, ' L3MBR3S3-S3...', 20)
        } else if (numFala == 3) {
            fecharDialogo()
            MostraPergunta()
        }
    } else if (numDialogo == 9) {
        if (numFala == 1) {
            continuaBug = 0
            balao(2, 'eu preciso de nicotina, o que foi isso???', 20)
        } else if (numFala == 2) {
            balao(1, `Bom, eu não sou exatamente fruto da sua imaginação fértil, eu
            sou na verdade um programa “pré-instalado” no seu cérebro, como
            uma espécie de firewall contra o Zuckerbeck. Eu sou
            automaticamente ativado quando o cérebro é invadido por esse
            desgraçado e, bom, como ele ainda não virou pó nem nada, eu
            vou continuar existindo. Mas cada usuário precisa de uma key
            pra me ativar. Enfim, vamos logo pra acabar com essa
            palhaçada.`, 20)
        } else if (numFala == 3) {
            fecharDialogo()
            portas++
            keaneAproximaSala(810, 230, 6100)
        }
    } else if (numDialogo == 10) {
        if (numFala == 1) {
            balao(1, 'então ali esta um buraco, vamos pular nele!', 20)
        } else if (numFala == 2) {
            balao(2, 'Pera ai, você tem certeza?', 20)
        } else if (numFala == 3) {
            balao(1, 'claro que tenho!', 20)
        } else if (numFala == 4) {
            balao(2, 'mas tudo esta indicando que não devemos fazer isso')
        } else if (numFala == 5) {
            balao(1, 'E você prefere acreditar em tudo ou em keane reves?', 20)
        } else if (numFala == 6) {
            balao(2, 'mas você nem é o keane reeves de verdade...', 20)
        } else if (numFala == 7) {
            balao(1, 'CALE A BOCA!', 55)
        } else if (numFala == 8) {
            balao(1, 'Vamos!', 25)
        } else if (numFala == 9) {
            fecharDialogo()
            keaneAproximaSala(560, 200, 4000)
        }
    } else if (numDialogo == 11) {
        if (numFala == 1) {
            balao(2, 'Por que eu to fazendo isso? ', 20)
            checkpoint = 2
        } else if (numFala == 2) {
            chamarTrocarMapa()
            fecharDialogo()
            musicaFundo.pause()
            musicaFundo.loop = false
        }
    } else if (numDialogo == 12) {
        if (numFala == 1) {
            balao(2, 'Porque ta tudo preto? e que musica é essa?', 20)
        } else if (numFala == 2) {
            balao(1, 'Ah, eu esqueci de acender a luz', 20)
        } else if (numFala == 3) {
            balao(2, 'Que!?', 30)
        } else if (numFala == 4) {
            animacaoOpacidade(animacao, 1, 1, 100, 0.2, 0.2)
            balao(1, 'Pronto!', 25)
        } else if (numFala == 5) {
            balao(2, 'Ué, esse lugar me é familiar...', 20)
        } else if (numFala == 6) {
            balao(1, 'É o cabecademanoel.ga, você esta no MotoClubeClicker!', 20)
        } else if (numFala == 7) {
            balao(2, 'Eu sabia que não deveria ter pulado...', 20)
        } else if (numFala == 8) {
            balao(2, 'E o que eu faço?', 20)
        } else if (numFala == 9) {
            balao(1, 'clique em qualquer lugar!', 20)
        } else if (numFala == 10) {
            balao(2, 'Eu nunca gostei de jogos de clique...', 20)
        } else if (numFala == 11) {
            cliquedamoto = true
            fecharDialogo()
            
        }
    } else if (numDialogo == 13) {
        if (numFala == 1) {
            balao(3, 'HaHaHaHaHAHAHAHA!!!!', 30)
        } else if (numFala == 2) {
            balao(0, '(SIM, É UMA HARLEY COM OLHOS)', 40)
        } else if (numFala == 3) {
            balao(2, 'Eu nunca gostei de harleys...', 20)
        } else if (numFala == 4) {
            balao(3, 'Você sempre falou mal de mim né, filho da @#$! ? Agora eu vou pegar os direitos autorais do jogo do seu amiguinho Manoel', 20)
        } else if (numFala == 5) {
            balao(2, 'Fique a vontade. Proximoo', 20)
        } else if( numFala == 6) {
            balao(1, `Rafael! Você não pode ir embora. Esse é um dos desafios. Se a Harley pegar os direitos autorais do site do Manoel, 
            tudo irá por água abaixo. Afinal, esse é o melhor site de botões do mundo, tem até uma plaquinha comprovando isso`, 20)
            mostraPlaca()
        } else if(numFala == 7) {
            balao(2, 'Meu Deus, mas é cada uma... <br> E o que eu tenho que fazer para te impedir Harley?' )
        } else if(numFala == 8) {
            balao(3, 'Você deve responder corretamente Minhas Perguntas sobre registro de sofware')
            escondePlaca()
        } else if(numFala == 9) {
            balao(2, 'Ahhh, de novo...', 25)
        } else if (numFala == 10) {
            numPergunta = 'harley'
            numSala = 'harley'
            harleyPergunta = 1
            MostraPergunta()
            fecharDialogo()
        }
        
    } else if (numDialogo == 14) {
        if(numFala == 1) {
            balao(3, 'Nãooooooooooooooo', 40)
        outraMoto()
        } else if (numFala == 2) {
            balao(2, 'O que foi isso?', 20)
        } else if(numFala == 3) {
            balao(2, 'Ah! uma moto normal, finalmente alguma coisa normal')
        } else if(numFala == 4) {
            tremedera()
            balao(2,'Por que eu fui dizer isso...')
            setTimeout(() => {
                if(numFala == 4) {
                    fecharDialogo()
                }
            },1500)
        } else if (numFala == 5) {
            fecharDialogo()
        }
    } else if (numDialogo == 15) {
        if(numFala == 1) {
            balao(4, 'so mais alguns segundos e eu vou dominar a mente dele')
        } else {
            fecharDialogo()
        }
    } else if(numDialogo == 16) {
        if(numFala == 1) {
            balao(4, 'AHHHHHHHHHHHHH... estou morrendo...')
        } else if(numFala == 2) {
            balao(4, 'morri')
        } else if (numFala == 3) {
            balao(2, 'como assim? oq foi isso ?')
        } else if (numFala == 4) {
            fecharDialogo()
            Fim()
        }
    } 
}


// aparencia inimigo

function qualInimigo() {
    if (numSala == 1) {
        iniTeste.style.display = 'block'
        iniTeste.style.background = "url('midia/inimigos/neusa.png') no-repeat";
        iniTeste.style.backgroundSize = "100px, 100px"
    } else if (numSala == 2) {
        iniTeste.style.background = "url('midia/inimigos/yasmin.png') no-repeat";
        iniTeste.style.backgroundSize = "100px, 100px"
    } else if (numSala == 3) {
        iniTeste.style.background = "url('midia/inimigos/manoel.png') no-repeat";
        iniTeste.style.backgroundSize = "100px, 100px"
    } else if (numSala == 4) {
        iniTeste.style.background = "url('midia/inimigos/stan.png') no-repeat";
        iniTeste.style.backgroundSize = "100px, 100px"
    } else if (numSala == 9) {
        iniTeste.style.background = "url('midia/inimigos/zuck/zuck_parado_frente.png') no-repeat";
        iniTeste.style.backgroundSize = "100px, 100px"
    } else {
        iniTeste.style.display = 'none'
    }
}

// morte 

var checkpoint = 1

function resetar(checkpoint) {
 if (checkpoint == 1) {
    numSala = 0
    numDialogo = -1
    numPergunta = 1
    portas = 1
    continuaBug = 0
    salaChegou = 0

    keane.style.opacity = 1

    keane_X = 150
    keane_Y = 150

    rafael_X = 400
    rafael_Y = 200

    cliqueplay = 0
 } else if (checkpoint == 2) {
    numSala = 7
    numDialogo = 12
    numPergunta = 7
    portas = 8
    continuaBug = 0
    salaChegou = 7

    keane.style.opacity = 1

    keane_X = 560
    keane_Y = 200

    rafael_X = 60
    rafael_Y = 215

    cliqueplay = 0
 }
   

    moverDefinitivo(keane, keane_Y, keane_X)
    moverDefinitivo(rafael, rafael_Y, rafael_X)
    harley.style.display = 'none'
    ProximaSala()

}


// uma coisinha sobre a Aparicao da harley...
var cliquedamoto = false
function cliqueCenario8() {
    if (cliquedamoto == true) {
        cliquedamoto = false
        mapa.style.background = "url('midia/mapas/motoc/c2.PNG') no-repeat"
        mapa.style.backgroundSize = '900px 700px'

        TheHarley()
    }
}
var harley_X = 800
var harley_Y = 0

function TheHarley() {
    harley_X = 800
    harley_Y = 0
    
    var harley = document.getElementById('harley')
    harley.style.display = 'block'

    moverDefinitivo(harley, harley_Y, harley_X)
    harley.style.transform = "rotate(" + oGrau + "deg)";
    dialogos()
    
    moverAnimacao(harley, harley_X, harley_Y, 150, 370, 10, diminuioGrau)
    harley_X = 150
    harley_Y = 370



}

 var FimMovimento = false

function moverAnimacao(objeto, o_X, o_Y, x, y, tempo, funcao) {

    if (o_X < x) {
        o_X += 5
    } else if (o_X > x) {
        o_X -= 5
    }

    if (o_Y > y) {
        o_Y -= 5
    } else if (o_Y < y) {
        o_Y += 5
    }

  movimentoAnimacao(objeto, o_X, o_Y, x, y, tempo, funcao)
}

function movimentoAnimacao(objeto, o_X, o_Y, x, y, tempo, funcao) {

    setTimeout(() => {
        moverDefinitivo(objeto, o_Y, o_X)
        if (o_Y != y || o_X != x) {
            moverAnimacao(objeto, o_X, o_Y, x, y, tempo,funcao)
        } else {
            funcao()
        }
    }, tempo)

}

var oGrau = 30

function diminuioGrau(harley) {
    var harley = document.getElementById('harley')
    if (oGrau > 0) {
        setTimeout(() => {
            oGrau -= 1
            harley.style.transform = "rotate(" + oGrau + "deg)";
            diminuioGrau(harley)
        }, 10)
    }
}

tamanhoD = 400

function outraMoto() {
    setTimeout(() => {
        if (tamanhoD > 150) {
            tamanhoD -= 5
            harley.style.backgroundSize = tamanhoD + "px " + tamanhoD +'px'
            harley.style.width = tamanhoD+'px'
            harley.style.height = tamanhoD+'px'

            harley_Y+= 4
            harley.style.top = harley_Y +'px'
            outraMoto()
        } else {
            harley.style.background = "url('midia/inimigos/moto.png') no-repeat"
            harley.style.backgroundSize = tamanhoD + "px " +tamanhoD + 'px'
        }
    }, 20)
    
    
}

// Placa tosca

function mostraPlaca() {
    var placa = document.getElementById('placa')
    placa.style.background = "url('midia/outrasImg/placa.png') no-repeat"
    placa.style.backgroundSize ='400px 400px'
    placa.style.height = '400px'
    placa.style.width = '400px'
    placa.style.backgroundColor = 'transparent'
    placa.style.left = '100px'
    placa.style.top = '300px'
}

function escondePlaca() {
    var placa = document.getElementById('placa') 
    placa.style.display = 'none'
}

// function tremedera 
var tela_Y = 10
var tela_X = 350
var tela_A = 0
var tela_D = 900

controleT = 0

function tremedera() {
    var tela = document.getElementById('tela_jogo')
     setTimeout(() => {
         if (controleT < 400) {
             if(controleT == 1) {
                 musicaMotoClicker(1)
                 var terremoto = document.getElementById('Terremoto')
                 terremoto.play()
             }

             // Y tremendo

             if(tela_Y == 10) {
                 tela_Y -= 5
             } else {
                 tela_Y += 5
             }

             // X tremendo 

             if(tela_X == 350) {
                 tela_X -= 25
             } else {
                 tela_X += 25
             }

             
             moverDefinitivo(tela, tela_Y, tela_X)

             tremedera()
         }

         if (controleT == 400) {
            var terremoto = document.getElementById('Terremoto')

             terremoto.pause()

             var tartaruga = document.getElementById('tartaruga')
             tartaruga.play()
             tartaruga.loop = true
             animacaoOpacidade(animacao, 0, 2, 100, 0.1, 0.1)
             tremedera()
         }


         if (controleT > 400 && controleT < 410 ) {
             if(tela_X == 350) {
                moverAnimacao(tela, tela_X, tela_Y, 600, 800, 1, tremedera)
                tela_X = 600
                tela_Y = 800
             } else if (tela_X == 600) {
                moverAnimacao(tela, tela_X, tela_Y, 0, 0, 1, tremedera)
                tela_X = 0
                tela_Y = 0
             } else if(tela_X == 0 ) {
                moverAnimacao(tela, tela_X, tela_Y, 350, 10, 1, tremedera)
                tela_X = 350
                tela_Y = 10
             }
            
         } 


         if (controleT >= 410 && controleT < 590) {
             if(controleT == 500) {
                 jogaRafael()
             }
             if (tela_A == 360) {
                 tela_A = 0
             }

             tela_D -= 2

             tela_A += 20  

             tela.style.transform = "rotate(" +tela_A+ "deg)"
             tela.style.width = tela_D + 'px'
             tela.style.height = tela_D + 'px'

             animacao.style.width = tela_D + 'px'
             animacao.style.height = tela_D + 'px'

             mapa.style.width = tela_D + 'px'
             mapa.style.height = tela_D + 'px'
             tremedera()
         }

         if(controleT == 600) {
            tela.style.width = 900 + 'px'
            tela.style.height = 700 + 'px'

            animacao.style.width = 900 + 'px'
            animacao.style.height = 700 + 'px'

            mapa.style.width = 900 + 'px'
            mapa.style.height = 700 + 'px'

            chamarTrocarMapa()
         }
          controleT++
     },25)
}


//// outra parte da grande animacao kkkkkkkkkkk

var controleRafa = 0
var rafa_A = 0
var rafaelgirando = 1
function jogaRafael() {
    
    setTimeout(() => {
        if( rafaelgirando == 1) {
        if (controleRafa == 0) {
            keane.style.display = 'none'
            var harley = document.getElementById('harley')
            harley.style.display = 'none'
            moverAnimacao(rafael, rafael_X, rafael_Y, 1000, 1000, 75, setandoRafa) 
        rafael_Y = -50
        rafael_X = -50
        controleRafa++
        }
    }

    if(rafaelgirando == 2) {
        moverAnimacao(rafael, rafael_X, rafael_Y, 400, 200, 75, morteZuck) 
        rafaelgirando++
    }

        if(controleRafa < 90) {
            if(rafa_A == 360) {
                rafa_A = 0
            }
    
            rafa_A += 20 
            rafael.style.transform = "rotate(" +rafa_A+"deg)"
        }
        
        jogaRafael()
    }, 25)
    
}

function setandoRafa() {
   moverDefinitivo(rafael, rafael_Y, rafael_X)
   /// talvez tirar
   controleT = 600
   rafa_A = 340
   numSala = 8
   tremedera()
}


// morte ZUCk


function morteZuck() {
    dialogos()
    moverAnimacao(iniTeste, ini_teste_X, ini_teste_Y, 100000, 100000, 3, nada)
    controleRafa = 90 
}

// nada 

function nada() {
    iniTeste.style.display = "none"
}


function Fim() {
    animacao.innerHTML = "<h1> Rafael Acordou <h1> <br> <h2> FIM <h2>  <br> Desculpe mas era pra ter um video aki"
    animacaoOpacidade(animacao, 0, 2, 100, 0.1, 0.1)
}
