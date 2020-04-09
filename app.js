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

// actions to start game
// deck.createDeck(suits, values);
// deck.shuffle();
// deck.deal(player1);
// deck.deal(player2);

// console check
// console.log(player1);
// console.log(player2);


// access properties
const playerCard = document.querySelector('.player-card');
const compCard = document.querySelector('.comp-card');

/* event listener */
const buttonElement = document.querySelector('#start-button');
buttonElement.addEventListener('click', function(event) {
  deck.createDeck(suits, values);
  deck.shuffle();
  deck.deal(player1);
  deck.deal(player2);
  playerCard.innerText = player1.card[0].value
  console.log(playerCard);
  console.log(player2);
})


// create event listener for deck
/* click deck then console to playerCard div */


// compCard = document.querySelector('.comp-card')
// compCard.classList.addClass('J')
// compCard.classList.addClass('Diamonds')





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


compCard.classList.add('J')
compCard.classList.add('Diamonds')