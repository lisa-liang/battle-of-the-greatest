class Player {
    constructor(player) {
        this.name = player;
        this.score = 0;
        this.card = []
    }
}
  
const deck = [];

function createDeck() {
  deck.push({face: 'Two', suit: 'diamond', value: 2, imageSrc: "images/diamonds/diamonds-r02.svg"})
  deck.push({face: 'Three', suit: 'diamond', value: 3, imageSrc: "images/diamonds/diamonds-r03.svg"})
  deck.push({face: 'Four', suit: 'diamond', value: 4, imageSrc: "images/diamonds/diamonds-r04.svg"})
  deck.push({face: 'Five', suit: 'diamond', value: 5, imageSrc: "images/diamonds/diamonds-r05.svg"})
  deck.push({face: 'Six', suit: 'diamond', value: 6, imageSrc: "images/diamonds/diamonds-r06.svg"})
  deck.push({face: 'Seven', suit: 'diamond', value: 7, imageSrc: "images/diamonds/diamonds-r07.svg"})
  deck.push({face: 'Eight', suit: 'diamond', value: 8, imageSrc: "images/diamonds/diamonds-r08.svg"})
  deck.push({face: 'Nine', suit: 'diamond', value: 9, imageSrc: "images/diamonds/diamonds-r09.svg"})
  deck.push({face: 'Ten', suit: 'diamond', value: 10, imageSrc: "images/diamonds/diamonds-r10.svg"})
  deck.push({face: 'Jack', suit: 'diamond', value: 11, imageSrc: "images/diamonds/diamonds-J.svg"})
  deck.push({face: 'Queen', suit: 'diamond', value: 12, imageSrc: "images/diamonds/diamonds-Q.svg"})
  deck.push({face: 'King', suit: 'diamond', value: 13, imageSrc: "images/diamonds/diamonds-K.svg"})
  deck.push({face: 'Ace', suit: 'diamond', value: 14, imageSrc: "images/diamonds/diamonds-A.svg"})

  deck.push({face: 'Two', suit: 'club', value: 2, imageSrc: "images/clubs/clubs-r02.svg"})
  deck.push({face: 'Three', suit: 'club', value: 3, imageSrc: "images/clubs/clubs-r03.svg"})
  deck.push({face: 'Four', suit: 'club', value: 4, imageSrc: "images/clubs/clubs-r04.svg"})
  deck.push({face: 'Five', suit: 'club', value: 5, imageSrc: "images/clubs/clubs-r05.svg"})
  deck.push({face: 'Six', suit: 'club', value: 6, imageSrc: "images/clubs/clubs-r06.svg"})
  deck.push({face: 'Seven', suit: 'club', value: 7, imageSrc: "images/clubs/clubs-r07.svg"})
  deck.push({face: 'Eight', suit: 'club', value: 8, imageSrc: "images/clubs/clubs-r08.svg"})
  deck.push({face: 'Nine', suit: 'club', value: 9, imageSrc: "images/clubs/clubs-r09.svg"})
  deck.push({face: 'Ten', suit: 'club', value: 10, imageSrc: "images/clubs/clubs-r10.svg"})
  deck.push({face: 'Jack', suit: 'club', value: 11, imageSrc: "images/clubs/clubs-J.svg"})
  deck.push({face: 'Queen', suit: 'club', value: 12, imageSrc: "images/clubs/clubs-Q.svg"})
  deck.push({face: 'King', suit: 'club', value: 13, imageSrc: "images/clubs/clubs-K.svg"})
  deck.push({face: 'Ace', suit: 'club', value: 14, imageSrc: "images/clubs/clubs-A.svg"})

  deck.push({face: 'Two', suit: 'heart', value: 2, imageSrc: "images/hearts/hearts-r02.svg"})
  deck.push({face: 'Three', suit: 'heart', value: 3, imageSrc: "images/hearts/hearts-r03.svg"})
  deck.push({face: 'Four', suit: 'heart', value: 4, imageSrc: "images/hearts/hearts-r04.svg"})
  deck.push({face: 'Five', suit: 'heart', value: 5, imageSrc: "images/hearts/hearts-r05.svg"})
  deck.push({face: 'Six', suit: 'heart', value: 6, imageSrc: "images/hearts/hearts-r06.svg"})
  deck.push({face: 'Seven', suit: 'heart', value: 7, imageSrc: "images/hearts/hearts-r07.svg"})
  deck.push({face: 'Eight', suit: 'heart', value: 8, imageSrc: "images/hearts/hearts-r08.svg"})
  deck.push({face: 'Nine', suit: 'heart', value: 9, imageSrc: "images/hearts/hearts-r09.svg"})
  deck.push({face: 'Ten', suit: 'heart', value: 10, imageSrc: "images/hearts/hearts-r10.svg"})
  deck.push({face: 'Jack', suit: 'heart', value: 11, imageSrc: "images/hearts/hearts-J.svg"})
  deck.push({face: 'Queen', suit: 'heart', value: 12, imageSrc: "images/hearts/hearts-Q.svg"})
  deck.push({face: 'King', suit: 'heart', value: 13, imageSrc: "images/hearts/hearts-K.svg"})
  deck.push({face: 'Ace', suit: 'heart', value: 14, imageSrc: "images/hearts/hearts-A.svg"})

  deck.push({face: 'Two', suit: 'spade', value: 2, imageSrc: "images/spades/spades-r02.svg"})
  deck.push({face: 'Three', suit: 'spade', value: 3, imageSrc: "images/spades/spades-r03.svg"})
  deck.push({face: 'Four', suit: 'spade', value: 4, imageSrc: "images/spades/spades-r04.svg"})
  deck.push({face: 'Five', suit: 'spade', value: 5, imageSrc: "images/spades/spades-r05.svg"})
  deck.push({face: 'Six', suit: 'spade', value: 6, imageSrc: "images/spades/spades-r06.svg"})
  deck.push({face: 'Seven', suit: 'spade', value: 7, imageSrc: "images/spades/spades-r07.svg"})
  deck.push({face: 'Eight', suit: 'spade', value: 8, imageSrc: "images/spades/spades-r08.svg"})
  deck.push({face: 'Nine', suit: 'spade', value: 9, imageSrc: "images/spades/spades-r09.svg"})
  deck.push({face: 'Ten', suit: 'spade', value: 10, imageSrc: "images/spades/spades-r10.svg"})
  deck.push({face: 'Jack', suit: 'spade', value: 11, imageSrc: "images/spades/spades-J.svg"})
  deck.push({face: 'Queen', suit: 'spade', value: 12, imageSrc: "images/spades/spades-Q.svg"})
  deck.push({face: 'King', suit: 'spade', value: 13, imageSrc: "images/spades/spades-K.svg"})
  deck.push({face: 'Ace', suit: 'spade', value: 14, imageSrc: "images/spades/spades-A.svg"})
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
    shuffleSound.play();
}

function compare() {
  let p1 = player1.card[0][0];
  let p2 = player2.card[0][0];
  
  if (p1.value > p2.value) {
    player1.score += 1;
    winnerAnnounced.insertAdjacentHTML('afterbegin', `${player1.name} gets a point`);
  } else if (p1.value < p2.value) {
    player2.score += 1;
    winnerAnnounced.insertAdjacentHTML('afterbegin', `${player2.name} gets a point`);
  } else {
// spade
    if (p1.suit === 'spade' && p2.suit === 'diamond') {
      player1.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player1.name} gets a point`);
    } else if (p1.suit === 'spade' && p2.suit === 'club') {
      player1.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player1.name} gets a point`);
    } else if (p1.suit === 'spade' && p2.suit === 'heart') {
      player1.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player1.name} gets a point`);
// hearts
    } else if (p1.suit === 'heart' && p2.suit === 'diamond') {
      player1.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player1.name} gets a point`);
    } else if (p1.suit === 'heart' && p2.suit === 'club') {
      player1.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player1.name} gets a point`);
    } else if (p1.suit === 'heart' && p2.suit === 'spade') {
      player2.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player2.name} gets a point`);
// club
    } else if (p1.suit === 'club' && p2.suit === 'diamond') {
      player1.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player1.name} gets a point`);
    } else if (p1.suit === 'club' && p2.suit === 'heart') {
      player2.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player2.name} gets a point`);
    } else if (p1.suit === 'club' && p2.suit === 'spade') {
      player2.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player2.name} gets a point`);
// diamond
    } else if (p1.suit === 'diamond' && p2.suit === 'club') {
      player2.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player2.name} gets a point`);
    } else if (p1.suit === 'diamond' && p2.suit === 'heart') {
      player2.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player2.name} gets a point`);
    } else if (p1.suit === 'diamond' && p2.suit === 'spade') {
      player2.score += 1;
      winnerAnnounced.insertAdjacentHTML('afterbegin', `${player2.name} gets a point`);
    } 
  }
}


// define new variables for class Player
const player1 = new Player('Lisa');
const player2 = new Player('Computer');


/* ACCESS DOM MANIPULATION  */
const playerCard = document.querySelector('.player-card');
const compCard = document.querySelector('.comp-card');
const startButton = document.querySelector('#start-button');
const stackedCards = document.querySelector('#stacked-cards');
const directions = document.querySelector('.direction');
const cardsContainer = document.querySelector('.card-container');
const logo = document.querySelector('#logo');
// keep track of scores/winner
const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');
const scoreTab = document.querySelector('.score-tab');
const winnerAnnounced = document.querySelector('.winner');
// icons
const infoIcon = document.querySelector('#info-icon');
const exitIcon = document.querySelector('#exit-icon');
const infoCard = document.querySelector('#info-card');
const refreshButton = document.querySelector('#refresh-button');
// sound effects
const clickSound = document.querySelector('#click-sound');
const shuffleSound = document.querySelector('#shuffle-sound');
const loserSound = document.querySelector('#loser-sound');
const winnerSound = document.querySelector('#winner-sound');


/* start button event listener */
startButton.addEventListener('click', function(event) {
  clickSound.play();
  createDeck();  
  shuffle();
  clearFrontPage();
  showMainPage();
})


function clearFrontPage() {
  startButton.style.display = 'none';
  logo.style.display = 'none';
}

function showMainPage() {
  stackedCards.style.display = 'flex';
  directions.style.display = 'flex';
  cardsContainer.style.display = 'flex';
  scoreTab.style.display = 'flex';
  infoIcon.style.display = 'flex';
  refreshButton.style.display = 'flex';
}

/* EVENT LISTENERS ----------------------------------------------------- */
// click info icon to get game info
infoIcon.addEventListener('click', function(event) {
  clickSound.play();
  infoCard.style.display = 'flex';
  infoIcon.style.display = 'none';
  exitIcon.style.display = 'flex';
})

// info icon turns into an exit button. click on exit button to exit game info
exitIcon.addEventListener('click', function(event) {
  clickSound.play();
  infoCard.style.display = 'none';
  infoIcon.style.display = 'flex';
  exitIcon.style.display = 'none';
})

// refresh to start game over - need to add functions
refreshButton.addEventListener('click', function(event) {
  clickSound.play();
})


/* stacked card event listener */
// make a for loop for 5 times
stackedCards.addEventListener('click', function(event) {
  play();
})


function play() {
  playerOnesTurn();
  playerTwosTurn();
  compare();
  announceWinner();
}

function playerOnesTurn() {
  deal(player1);
  playerCard.insertAdjacentHTML('afterbegin', `<img class="cards" src="${player1.card[0][0].imageSrc}"/>`);
}

function playerTwosTurn() {
  deal(player2);
  compCard.insertAdjacentHTML('afterbegin', `<img class="cards" src="${player2.card[0][0].imageSrc}"/>`);
}

function announceWinner() {
  directions.style.display = 'none';
  winnerAnnounced.style.display = 'flex';
  updateScore();
}

// update scores
function updateScore() {
  p1Score.innerHTML = `${player1.name} : ${player1.score}`;
  p2Score.innerHTML = `${player2.name} : ${player2.score}`;
  // announce final winner of the game
  if (player1.score === 5) {
    winnerAnnounced.innerHTML = `You won the game`;
    winnerSound.play();
  }
  if (player2.score === 5) {
    winnerAnnounced.innerHTML = `You lost the game`;
    loserSound.play();
  } 
}






