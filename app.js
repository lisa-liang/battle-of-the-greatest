class Player {
    constructor(player) {
        this.name = player;
        this.score = 0;
        this.card = []
    }
}

const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const suits = ['Diamond', 'Clubs', 'Heart', 'Spade'];

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

// create deck of shuffled cards
class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck(suits, values) { 
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }

  shuffle() {
      let current;
      let temp;
      for (let i = this.deck.length - 1; i > 0; i--) {
          current = Math.floor(Math.random() * this.deck.length);
          temp = this.deck[i];
          this.deck[i] = this.deck[current];
          this.deck[current] = temp;
      }
      return this.deck;
  }

  deal(player) {
    while (player.card.length < 1) {
      const cardInHand = this.deck.splice(0,1);
      player.card.push(cardInHand[0]);
    }
  }
}

// define variables
const player1 = new Player('Lisa');
const player2 = new Player('Computer');
const deck = new Deck(suits, values);



// access DOM properties
// when start button event listener is activated, random card value shows up on card-container 
const playerCard = document.querySelector('.player-card');
const compCard = document.querySelector('.comp-card');
const buttonElement = document.querySelector('#start-button');
const stackedCards = document.querySelector('#stacked-cards');


/* start button event listener */
buttonElement.addEventListener('click', function(event) {
  deck.createDeck(suits, values);
  deck.shuffle();
  // "player 1's turn" tab shows up
  // prompt player "CHOOSE FROM DECK"
  // using none as a placeholder for now
  buttonElement.style.display = 'none';
  stackedCards.style.display = 'flex';
})

stackedCards.addEventListener('click', function(event) {
  deck.deal(player1);
  deck.deal(player2);
  playerCard.innerText = player1.card[0].value
  compCard.innerText = player2.card[0].value
  // console check
  console.log(playerCard);
  console.log(player2);
})

// add class into card class then link the description to the image so that it pops up in card-container
// test run
// compCard = document.querySelector('.comp-card')
compCard.classList.add('J')
compCard.classList.add('Diamonds')



// create event listener for deck
/* click deck then console to playerCard div */








/* 
compare numbers
convert J, Q, K, A into integer values
if tied, compare suits
make an order from smallest to greatest for suits
 */
// const compare = () => {
//   if (player1.card > player2.card) {
//     player1.score += 1;
//   } else if (player1.card < player2.card) {
//     player2.score += 1;
//   } else {
//     // placeholder for now
//     break
//   }
// }

