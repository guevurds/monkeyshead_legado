// chamando as divs da pagina html
function chamando() {
    const caixaRespostas = document.getElementById('caixaRespostas')
    const respostas = document.getElementsByClassName('respostas')
    const caixaPerguntas = document.getElementById('caixaPerguntas')
}
var chamarDialogo = 0
chamando()
// fazendo funcao de chamar a caixa de perguntas
function MostraPergunta() {
    qualPergunta()
    caixaPerguntas.style.display = 'block';
    caixaRespostas.style.display = 'block';
}
// funcao esconder perguntas
function EsconderPergunta() {
    caixaPerguntas.style.display = 'none';
    caixaRespostas.style.display = 'none';
    controle = 1
    if (chamarDialogo == 1) {
        dialogos()
        chamarDialogo = 0
    } else {
        controle = 0
    }
}

// ver qual pergunta aparece
var numPergunta = 1
var harleyPergunta = 0
function qualPergunta() {
    controle = 1
    if (numSala == numPergunta) {
        if (numPergunta == 1) {
            escreverPergunta('Neusa', 'Oi, meu filho. Como eu faço para mudar o idioma do facebook?', 30)

            escreverResposta(0, ` Postar “por favor, administradores do facebook, mudem meu idioma”`, 20)
            escreverResposta(1, "Me adiciona no facebook que eu te ajudo Rafael Lindemann Duarte ", 20)
            escreverResposta(2, "Não Recomendo que você tenha facebook", 20)
            escreverResposta(3, "Eu também nao sei, me ajuda, o meu esta em chinês", 20)
            correto = 2
            perguntando = true
        } else if (numPergunta == 2) {
            escreverPergunta('Yasmin', `oi rafael homem perfeito, Eu tenho informaçoes muito impostantes no 
                              meu computador, tenho muito medo de perdelas, oq eu deveria fazer?`, 20)
            escreverResposta(0, "escreva tudo em um caderno", 20)
            escreverResposta(1, "Faça copias de segurança, backups, salve em nuvem, em um hd externo, ou em um pendrive", 20)
            escreverResposta(2, 'me diga, eu vou Lembrar pra você', 20)
            escreverResposta(3, "coloca em um ssd", 20)
            correto = 1
            perguntando = true
        } else if (numPergunta == 3) {
            escreverPergunta('Manoel', `kkkkkkk Eu criei um banco de dados para o meu jogo, <br>
                             disponibilizei para todos o acessarem e criarem suas contas la, <br>
                              mas agr alguem esta desconfigurando ele, você pode me ajudar?`, 20)

            escreverResposta(0, 'Faça um acesso controlado para o Banco de Dados e crie um programa que faça o registros das contas no banco', 18)
            escreverResposta(1, `deixe um recado escrito "por favor não trolla" `, 20)
            escreverResposta(2, "Desista de Programar, certamente você nao foi feito pra isso", 20)
            escreverResposta(3, 'impeça o acesso ao banco de dados e faça você mesmo todas as contas', 20)
            correto = 0
            perguntando = true
        } else if (numPergunta == 4) {
            escreverPergunta('Stan Lee', 'como posso evitar ter meus dados roubados?', 20)

            escreverResposta(0, 'você não morreu?', 20)
            escreverResposta(1, 'não tendo acesso a internet', 20)
            escreverResposta(2, 'desinstalando o baidu e baixando o Norton', 20)
            escreverResposta(3, 'Não saindo da safeweb, não entrando em contas em locais ou aparalhos não confiaveis e mantendo seus sofwares e antivirus atualizados', 20)
            correto = 3
            perguntando = true
        } else if (numPergunta == 5) {
            escreverPergunta('voz do Alem', "  seu tempo de teste foi expirado por favor insira a key de ativação.", 20)

            escreverResposta(0, '12345', 25)
            escreverResposta(1, '98435', 25)
            escreverResposta(2, '98453', 25)
            escreverResposta(3, '08401', 25)
            correto = 2
            perguntando = true
        } else if (numPergunta == 6) {
            escreverPergunta('voz do Alem', `Muito bem. A key foi ativada. Mas por questão de segurança,
            você deve nos informar qual tipo de licença você assinou para
            obter essa cópia de keanu reeves`, 20)

            escreverResposta(0, 'FTP', 25)
            escreverResposta(1, 'FPP', 25)
            escreverResposta(2, 'TLS', 25)
            escreverResposta(3, 'OEM', 25)

            correto = 3
            perguntando = true

        } else if (numPergunta == 'harley') {
            if (harleyPergunta == 1) {
                escreverPergunta('Harley', `Em qual orgão ou entidade publico(a) brasileiro(a) se deve ir para registrar um jogo(software)?`, 20)

                escreverResposta(0, 'Ministério da Integração Nacional', 20)
                escreverResposta(1, 'Refinanciamento da Dívida Pública Mobiliária Federal', 20)
                escreverResposta(2, 'Instituto Nacional Da Propriedade Industrial', 20)
                escreverResposta(3, 'Secretaria Especial de Políticas de Promoção da Igualdade Racial', 20)

                correto = 2
                perguntando = true
            } else if (harleyPergunta == 2) {
                escreverPergunta('Harley', `E o que é necessario para registrar um Jogo(software)?`, 20)

                escreverResposta(0, 'Vontade!', 20)
                escreverResposta(1, 'Um Jogo', 20)
                escreverResposta(2, 'Um resumo de tudo oq acontece no jogo, todas os participantes, e a faixa etaria')
                escreverResposta(3, 'Uma declaraçao de veracidade e um resumo hash ')

                correto = 3
                perguntando = true
            } else if (harleyPergunta == 3) {
                escreverPergunta('Harley', ` E como obtenho uma declaração de veracidade?`, 20)

                escreverResposta(0, 'Não Mentindo por um ano', 20)
                escreverResposta(1, 'Pagando Uma Taxa de Guia de Recolhimento da União de codigo 730', 20)
                escreverResposta(2, 'tendo um papel dizendo que o jogo é seu, com a assinatura de 2 testemunhas', 20)
                escreverResposta(3, 'Respondendo um quiz do Facebook', 20)

                correto = 1
                perguntando = true
            } else if (harleyPergunta == 4) {
                escreverPergunta('Harley', `E oq é um resumo Hash?`, 20)

                escreverResposta(0, `é um resumo feito com hastags #jogo #ensinarTI #moto #rafael #perfeito #Seguranca #informação`, 20)
                escreverResposta(1, 'é um recumo programa em C# pois # é hash', 20)
                escreverResposta(2, 'é uma explicação superfical de tudo que acontece no jogo', 20)
                escreverResposta(3, 'è um tipo de criptografia, nesse caso do codigo do jogo, que vai ser registrado')

                correto = 3
                perguntando = true
            } else if (harleyPergunta == 5) {
                escreverPergunta('Harley', ' E como faço um resumo hash?', 20)

                escreverResposta(0, 'criptografando o codigo do jogo, a forma mais comum é pelo terminal do linux com o comando md5sum', 20)
                escreverResposta(1, 'Você paga um profissional expecifico para fazer, voce da todo o codigo do seu software pra ele', 20)
                escreverResposta(2, `voce transforma todo o seu codigo em codigo morte e depois troca os pontos por "#" e os traços por "+"`, 20)
                escreverResposta(3, 'pegandando 64 letras e numeros e juntandoas aleatoriamente, depois diz que é um resumo hash', 20)

                correto = 0
                perguntando = true
            }
        }

    } else {
        escreverPergunta(0, 'VOCÊ JA RESPONDEU O QUE TINHA PARA RESPONDER AQUI<br> <br> &nbsp aperte ENTER para Sair', 40)
        escreverResposta(0, 0, 0)
        escreverResposta(1, 0, 0)
        escreverResposta(2, 0, 0)
        escreverResposta(3, 0, 0)
        perguntando = false
    }
}

// escrever Perguntas e Respostas
function escreverPergunta(nome, texto, tamanho) {
    if (nome) {
        caixaPerguntas.innerHTML = '<h1>' + nome + ':</h1> <p>' + texto + '</p>';
        caixaPerguntas.style.fontSize = tamanho + 'px';
    } else {
        caixaPerguntas.innerHTML = '<p>' + texto + '</p>'
        caixaPerguntas.style.fontSize = tamanho + 'px'
    }
}

function escreverResposta(qual, texto, tamanho) {
    var letra
    switch (qual) {
        case 0: letra = 'A. '
            break;
        case 1: letra = 'B. '
            break;
        case 2: letra = 'C. '
            break;
        case 3: letra = 'D. '
            break;
        default: letra = ' '
            break;
    }

    const respostas = document.getElementsByClassName('respostas')
    respostas[qual].innerHTML = '<p>' + letra + texto + '</p>'
    respostas[qual].style.fontSize = tamanho + 'px'
}
var correto = 0
var perguntando = true

function validarResposta(resposta) {
    // alert('chamou')
    if (perguntando) {
        // alert('perguntando')
        if (resposta == correto) {
            if (numPergunta != 'harley') {
                numPergunta++
            } else {
                harleyPergunta++
            }

            // alert('numPergunta + 1 =' +numPergunta)
            if (numPergunta == 7) {
                chamarDialogo = 1
                // alert('é o 7')
                EsconderPergunta()
            } else if (numPergunta == 'harley') {
                if (harleyPergunta >= 1 && harleyPergunta <= 4) {
                    EsconderPergunta()
                    MostraPergunta()
                } else if (harleyPergunta == 5) {
                    chamarDialogo = 1
                    EsconderPergunta()
                }

            } else if (numPergunta != 6) {
                // alert('não é o 6')
                acertou()
                chamarDialogo = 1
                perguntando = false

            } else {
                // alert('é o 6')
                numSala++
                // alert('sala++')
                EsconderPergunta()
                MostraPergunta()
            }

        } else {
            errou()
            perguntando = false
        }

    }
}


function acertou() {
    escreverPergunta('voz do alem', 'PARABENS!, VOCÊ ACERTOU! <br> <br> &nbsp aperte ENTER para Sair', 30)
    escreverResposta(0, 0, 0);
    escreverResposta(1, 0, 0);
    escreverResposta(2, 0, 0);
    escreverResposta(3, 0, 0);
}

function errou() {
    escreverPergunta('voz do alem', 'MORRA, Infeliz voce ERROU!!!', 30)
    morte++
    chamarMorte()
}

