const emojis = [
    "imagens/reyna.png",
    "imagens/reyna.png",
    "imagens/jett.jpg",
    "imagens/jett.jpg",
    "imagens/neon.png",
    "imagens/neon.png",
    "imagens/fade.jpeg",
    "imagens/fade.jpeg",
    "imagens/viper.jpg",
    "imagens/viper.jpg",
    "imagens/sage.png",
    "imagens/sage.png",
    "imagens/yoru.jpeg",
    "imagens/yoru.jpeg",
    "imagens/omen.jpeg",
    "imagens/omen.jpeg",
];


let openCards = [];
let paresMatch = 0;
let paresTotal = emojis.length/2;
let tentativas = 0;
/*--------------------embaralhador de emojis--------------------*/
let randomEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))
/*.sort() me permite criar uma ordenação de acordo com alguma regra de alguma função que eu passo aqui dentro
aqui ele está passando uma função anônima () =>
invoca o método random e se esse número aleatório for > 0.5 
? significa: if ternário
: significa: else

ou seja, para cada elemento, ele vai colocar o peso de 2 ou -1
e aí ele vai colocar os que tem peso -1 para trás e peso 2 para frente
e como terá mais de um elemento com o peso 2 ou -1, ele vai fazer uma ordenação por ordem de chegada
ou seja: a melhor maneira de deixar algo randômico é dar o mesmo peso para duas coisas pq aí o computador que vai decidir também
*/

/*--------------------para desenhar os elementos na tela--------------------*/
for(let i=0; i<emojis.length; i++){
    let box = document.createElement("div");//criando dinamicamente uma caixa
    box.className = "item";//adicionando a classe item
    const image = document.createElement("img");//criando dinamicamente uma img
    image.src = randomEmojis[i];
    box.appendChild(image);

    box.onclick = handleClick;
    //toda vez que clicar eu vou chamar uma função chamada handleClick

    document.querySelector(".game").appendChild(box);//colocar/pendurar(appendChild) isso na minha div com class game    
}

let foiChecado = false;

function handleClick(){
    if(!this.classList.contains("boxOpen")){
        if(!foiChecado && openCards.length < 2 && !this.classList.contains("boxOpen")){
            this.classList.add("boxOpen");//toda vez que um card for aberto, vamos criar uma classe chamada boxOpen
            console.log(openCards);
            openCards.push(this);//guardando a carta clicada no vetor
        }
        if(openCards.length == 2){
            foiChecado = true;
            tentativas++;
            setTimeout(checkMatch, 500);//onde chamo minha função e ela vai durar 500 millisegundos
        }   
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        paresMatch++;
    }
    else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];
    openCards.pop();
    openCards.pop();
    if(paresMatch === paresTotal){
        alert("Você venceu em " + tentativas + " tentativas, parabéns!");
   }
   foiChecado = false;
    
   console.log(openCards);
}