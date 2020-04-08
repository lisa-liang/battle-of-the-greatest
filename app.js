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

// generate deck of shuffled cards
class Deck {
  constructor() {
    this.deck = [];
  }
  
  generateDeck(suits, values) { 
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
deck.generateDeck(suits, values);
deck.shuffle();
deck.deal(player1);
deck.deal(player2);

// console check
console.log(player1);
console.log(player2);




