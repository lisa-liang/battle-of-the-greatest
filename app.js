class Player {
    constructor(player) {
        this.name = player;
        this.score = 0;
        this.card = []
    }
}
  
const deck = [];

function createDeck() {
  deck.push({face: 'Ace', suit: 'Diamond', value: 14, imageSrc: "images/diamonds/diamonds-A.svg"})
  deck.push({face: 'Two', suit: 'Diamond', value: 2, imageSrc: "images/diamonds/diamonds-r02.svg"})
  deck.push({face: 'Three', suit: 'Diamond', value: 3, imageSrc: "images/diamonds/diamonds-r03.svg"})
  deck.push({face: 'Four', suit: 'Diamond', value: 4, imageSrc: "images/diamonds/diamonds-r04.svg"})
  deck.push({face: 'Five', suit: 'Diamond', value: 5, imageSrc: "images/diamonds/diamonds-r05.svg"})
  deck.push({face: 'Six', suit: 'Diamond', value: 6, imageSrc: "images/diamonds/diamonds-r06.svg"})
}

function shuffle() {
    let current;
    let temp;
    for (let i = deck.length - 1; i > 0; i--) {
        current = Math.floor(Math.random() * deck.length);
        temp = deck[i];
        deck[i] = deck[current];
        deck[current] = temp;
    }
    return deck;
}

function deal(player) {
    const cardInHand = deck.splice(0,1);
    player.card.push(cardInHand);
}

// define variables
const player1 = new Player('Lisa');
const player2 = new Player('Computer');


// access DOM properties 
const playerCard = document.querySelector('.player-card');
const compCard = document.querySelector('.comp-card');
const buttonElement = document.querySelector('#start-button');
const stackedCards = document.querySelector('#stacked-cards');
const directions = document.querySelector('.direction');
const tabP1 = document.querySelector('#p1-tab');
const cardsContainer = document.querySelector('.card-container');
// const scoreTabs = document.querySelector('.score-tab');


/* start button event listener */
buttonElement.addEventListener('click', function(event) {
  createDeck();  
  shuffle();
      // using none as a placeholder for now
  buttonElement.style.display = 'none';
  stackedCards.style.display = 'flex';
  directions.style.display = 'flex';
  tabP1.style.display = 'flex';
  cardsContainer.style.display = 'flex';
})

/* stacked card event listener */
stackedCards.addEventListener('click', function(event) {
  deal(player1);
  deal(player2);
  playerCard.insertAdjacentHTML('afterbegin', `<img class="cards" src="${player1.card[0][0].imageSrc}"/>`)
  compCard.insertAdjacentHTML('afterbegin', `<img class="cards" src="${player2.card[0][0].imageSrc}"/>`) 

  // console check
  console.log(player1);
  console.log(player2);
})



