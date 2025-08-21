//Facilitando o uso de gets do documento e manutenção do código
const state = {
    //acessa a tabela de pontuação
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox : document.getElementById("score_points"),
    },
    //acessa as informações da carta selecionada
    cardsSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    //acessa as cartas em campo de cada jogador
    fieldCards: {
        computer:document.getElementById("computer-field-card"),
        player:document.getElementById("player-field-card"),
    },
    //acessa o botão de próximo duelo
    actions: {
        button:document.getElementById("next-duel"),
    },
};

//Enum para acessar os lados do campo contendo as 5 cartas de cada jogador
const playerSides = {
    player1: "player-card",
    computer: "computer-cards",
}

//Enum para facilitar o acesso a source de imagem de cada carta
const pathImages = "./src/assets/icons/"

//Gera as cartas usando a imagem dela e coloca seus atributos
const cardData = [
    {
        id:0,
        name:"Blue Eyes White Dragon",
        type:"Paper",
        img: `${pathImages}dragon.png`,
        WinOf:[1],
        LoseOf:[2],
    },
        {
        id:1,
        name:"Dark Magician",
        type:"Rock",
        img: `${pathImages}magician.png`,
        WinOf:[2],
        LoseOf:[0],
    },
        {
        id:2,
        name:"Exodia",
        type:"Scissors",
        img: `${pathImages}exodia.png`,
        WinOf:[0],
        LoseOf:[1],
    },
];

//Gera o id da carta que será sorteada e retorna esse valor
async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

//Gera a carta selecionada para a mão de um jogador, com imagem das costas da carta
async function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if(fieldSide === playerSides.player1){ 
        cardImage.addEventListener("mouseover", () => {
        drawSelectCard(IdCard);

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    });

    }


    return cardImage;
}

//Coloca as cartas no campo de duelo
async function setCardsField(cardId){
    //Primeiro remove as cartas em campo
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId. computerCardId);

    await updateScore();
    await drawButton(duelResults);
}


//Faz com que a carta que o mouse passa por cima irá para mão do jogador à esquerda
async function drawSelectCard(index) {
    state.cardsSprites.avatar.src = cardData[index].img;
    state.cardsSprites.name.innerText = cardData[index].name;
    state.cardsSprites.type.innerText = "Attibute : " + cardData[index].type;
}

//Sorteia as 5 cartas para a mão de cada jogador
async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i < cardNumbers; i++){

        //Recebe o número de id da função getRandomCardID
        const randomIdCard = await getRandomCardId();
        //Chama a função de criar carta, passando o id anterior e o campo que a carta irá ser inserida
        const cardImage = await createCardImage(randomIdCard, fieldSide);
        //insere a carta na mão de um jogador
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

//funciona que é executada quando carrega-se a página e inicia o jogo
function init(){
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

init();