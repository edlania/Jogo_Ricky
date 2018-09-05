//var bloco_aleatorio = document.getElementById("teste");


/*console.log(bloco_aleatorio.InnerHTML);
bloco_aleatorio.InnerHTML += " - modificado";
console.log(bloco_aleatorio.InnerHTML);*/

//function evento (){
// if(bloco_aleatorio.innerText == "Oi"){
// bloco_aleatorio.innerText ="Tchau";

// }

//else{

//bloco_aleatorio.innerHTML = "Oi";

// }


//}
/*bloco_aleatorio.onmousedown = evento;
bloco_aleatorio.onmouseup = evento;
bloco_aleatorio.onmouseleave = function () {
    if(bloco_aleatorio.innerText == "Tchau"){
        bloco_aleatorio.innerText ="Saudades";

    }
}*/

// Toda vez que o mouse se mexer no body, atualize
//uma variavel 'contador' acrescentando '1' e exiba
//o valor da varivavel no 'innerText' do 'bloco_aleatorio'
//var body = document.getElementsByTagName("body")[0];
/*
var bloco_aleatorio = document.getElementById("teste");

var contador = 0;

//body.onmousemove = function (){
    contador++;

    bloco_aleatorio.innerText = contador;
};
*/


//var bloco_aleatorio = document.getElementById("aleatorio");

//var bloco_verde = document.getElementById("verde");
//bloco_verde.style.background = "#5FB53A";

//var bloco_amarelo = document.getElementById("amarelo");
//bloco_amarelo.style.background = "#FFE703";

//var bloco_vermelho = document.getElementById("vermelho");
//bloco_vermelho.style.background = "#E11E00";


//bloco_aleatorio.onmousemove = function (){

//};


//setInterval(function()
//{
//  var cores_aleatorias = Math.floor  ((Math.random()*3)+1);

//  if(cores_aleatorias == 1 )
// {
// bloco_aleatorio.style.background = "#5FB53A";

// }
// else if(cores_aleatorias == 2){
//   bloco_aleatorio.style.background = "#FFE703"
//  }

//  else{
//  bloco_aleatorio.style.background ="#E11E00"
//  }


// console.log(bloco_aleatorio);
//}, 1000);

// aleatorio for igual id correspondente contador +1


//bloco_verde.onmouseenter = function () {
// if (bloco_aleatorio.style.background == bloco_verde.style.background) {
// console.log("Mouse no bloco verde e cor do aleatório também verde")
// }
//};

//bloco_amarelo.onmouseenter = function () {
//  if (bloco_aleatorio.style.background == bloco_amarelo.style.background) {
// console.log("Mouse no bloco amarelo e cor do aleatório também amarelo")
//  }
//};

//bloco_vermelho.onmouseenter = function () {
//if (bloco_aleatorio.style.background == bloco_vermelho.style.background) {
//console.log("Mouse no bloco vermelho e cor do aleatório também vermelho")
// }
//};


//contador = 0;

//contador_dois = 0;


//bloco_verde.onmouseenter = function () {
//  if (bloco_aleatorio.style.background == bloco_verde.style.background) {
//  contador += 1;
//  if (contador > 10){
//      console.log("VOCÊ GANHOU!!!!!!!!!! :D")
//  }
//  if (contador_dois == 0*2){
//      console.log("VOCÊ PERDEU :(")
//   }


//  console.log(contador + " " + "Você acertou cor verde com verde :D")
//    }
//else if (bloco_aleatorio != bloco_vermelho && bloco_amarelo)
//   {
// contador = 0;
//   if (contador > 10){
//     console.log("VOCÊ GANHOU!!!!!!!!!! :D")

//}
//   console.log(contador +" " + "Você errou cor verde com verde :(")


//}};
//bloco_vermelho.onmouseenter = function () {
//  if (bloco_aleatorio.style.background == bloco_vermelho.style.background) {
//  contador += 1;
//   if (contador > 10){
//     console.log("VOCÊ GANHOU!!!!!!!!!! :D")
//   }
//   console.log(contador + " " + " Você acertou cor vermelha com vermelha :D")
//   }
//  else if (bloco_aleatorio != bloco_verde && bloco_amarelo)
//  {
//   contador = 0;
//   if (contador > 10){
//      console.log("VOCÊ GANHOU!!!!!!!!!! :D")
//   }
// console.log(contador +" " + " Você errou cor vermelha com vermelha :(")


//  }};

//bloco_amarelo.onmouseenter = function () {
//  if (bloco_aleatorio.style.background == bloco_amarelo.style.background) {
//   contador += 1;
//    console.log(contador + " " + "Você acertou cor amarela com amarela :D")
// }
//  else if (bloco_aleatorio != bloco_verde && bloco_vermelho) {
//     contador = 0;
//      console.log(contador + " " + "Você errou cor amarela com amarela :(")
//    };


// "Você tem um planeta inteiro... andando por aí, gerando energia para você?! Isso é escravidão!",
//     "Bem, cientificamente, tradições são idiotas.",
//     "V*dia, minha geração fica traumatizada logo no café da manhã!",
//     "Eu sou uma Cirurgiã de verdade!",
//     "Você acha que consegue me controlar com um corte de cabelo?"
var personagens = [
    {

        "nome": "Morty",
        "id": "mortyy",
        "frases": [
            "Você tem um planeta inteiro... andando por aí, gerando energia para você?! Isso é escravidão!",
            "Oh, geez...",
            "Ninguém existe por um propósito. Ninguém pertence a lugar nenhum.",
            "Sr. Presidente, se eu aprendi alguma coisa hoje, é que as vezes você tem que ligar o f*da-se!"
        ]
    },
    {

        "nome": "Rick",
        "id": "rickyy",
        "frases": [
            "Bem, cientificamente, tradições são idiotas.",
            "Eu vou te dizer o que eu acho das escolas, Jerry: É uma perda de tempo(...) Escola não é um lugar para pessoas inteligentes",
            "Wubba Lubba Dub Dub",
            "Eu me transformei em um picles, Morty! Eu sou Picles Riiiick!"

        ]

    },
    {
        "nome": "Summer",
        "id": "irma",
        "frases": [
            "V*dia, minha geração fica traumatizada logo no café da manhã!",
            "Você é o caçula. Você não é a causa da tristeza dos seus pais, você é só um sintoma disso.",
            "Quê? Qual garota adolescente tem fotos de sua família?",
            "Minhas opções são: dizer nada, ser sarcástica, ou latir sim como um animal treinado."
        ]
    },
    {
        "nome": "Beth",
        "id": "mae",
        "frases": [
            "Eu sou uma Cirurgiã de verdade!",

        ]
    },
    {
        "nome": "Jerry",
        "id": "pai",
        "frases": [
            "Você acha que consegue me controlar com um corte de cabelo?",
            "Você já tentou relaxar? É um paradoxo!",
            "A vida é esforço e só vou parar quando eu morrer.",



        ]
    }
];




var bloco_morty = document.getElementById("mortyy");
var bloco_ricky = document.getElementById("rickyy");
var bloco_irma = document.getElementById("irma");
var bloco_mae = document.getElementById("mae");
var bloco_pai = document.getElementById("pai");
var bloco_frase = document.getElementById("blocodefrase");

var acertos = 0;

var bloco_acerto = document.getElementById("acertos");
var erros = 0;
var bloco_erro = document.getElementById("erros");

var id_frase_atual;

function atualizarPlacar() {
    bloco_acerto.innerText = acertos;
    bloco_erro.innerText = erros;
}


function clique() {
    // console.log(this.id);
    //  var fraseExibida = personagem ["frases"][indice_aleatorio_frase];
    // console.log(fraseExibida);
    //  console.log(id_frase_atual);
    // Peguei a frase
    // Checar se o bloco que foi clicado possui aquela frase dentro das frases existentes
    // Pegar frases existentes

    /*if(onclick  == personagem ["frases"][indice_aleatorio_frase]){
        //  bloco_aleatorio.innerText ="Saudades";
        console.log("acertou")
    }*/

    // var frases_existentes =

    // var n = str.indexOf();
    // console.log(n);


    if (this.id == id_frase_atual) {


        acertos++;

        if (acertos == 6) {
            $("#vitória").animate({

                "opacity": 1,
                "font-size": "61px",
                "top": "160px"

            }, 3000, function () {
                $(this).html($(this).html());
            });


        }

        atualizarPlacar();
        exibir_frase_aleatoria();
    }

    else if (this.id != id_frase_atual) {

        // console.log("Você Errou :(");
        erros++;
        atualizarPlacar();
        if (erros == 3) {
            $("#game_over").animate({
                "opacity": 1,
                "font-size": "70px",
                "top": "148px",

            }, 3000, function () {
                $(this).html($(this).html());
            });

        }


    }
}

    bloco_morty.onclick = clique;
    bloco_ricky.onclick = clique;
    bloco_irma.onclick = clique;
    bloco_mae.onclick = clique;
    bloco_pai.onclick = clique;

    function exibir_frase_aleatoria() {
        var indice_aleatorio = Math.floor((Math.random() * personagens.length));

        var personagem = personagens[indice_aleatorio];

        id_frase_atual = personagem.id;

        frases = personagem.frases;

        var indice_aleatorio_frase = Math.floor((Math.random() * frases.length));


        bloco_frase.innerText = personagem.frases[indice_aleatorio_frase];
    }

    exibir_frase_aleatoria();




// bloco_frase.innerText += personagem.frases;



//function atualizarPlacar(){
//bloco_acerto.innerText = acertos;
//bloco_erros.innerText = erros;



/*if(indice_aleatorio == 0  )
 {;

}
 else if(cores_aleatorias == 2){
   bloco_aleatorio.style.background = "#FFE703"
  }

  else{
  bloco_aleatorio.style.background ="#E11E00"
  }
console.log(indice_aleatorio);*/




//1 - crie um bloco div de html com um id e altere o texto desse bloco quando o usuário clicar em um botao (tambem referenciado por um id)
//2 - utilizando o css, faça com que esse bloco de htlm tenha sua cor alterada quando o usuário passar o mouse em cima (utilizando o comando :hover do CSS)
//3 - construa três blocos de html com a mesma classe e altere o texto deles quando o usuário passar o mouse em cima de qualquer um deles pela primeira vez


/*

var bloco_exercicio = document.getElementById("exercicio_um");
var bloco_ultimo = document.getElementsByClassName("ultimo_exercicio");


for(var i = 0; i<bloco_ultimo.length; i++)

    bloco_ultimo[i].onmousemove = function () {
        if(this.className == "ultimo_exercicio"){
            this.innerText = "Mudouuuu";

        }

    }


bloco_exercicio.innerText = "texto sem clique";



bloco_exercicio.onclick = function clique (){

    if(bloco_exercicio  != "testo sem clique") {
       bloco_exercicio.innerText = "Oie"}



};
*/





























