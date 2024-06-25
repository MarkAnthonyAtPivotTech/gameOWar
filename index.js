class Card {
    constructor(face,suit,value) {
        this.face = face;
        this.suit = suit;
        this.value = value;
    }
}

class Player {
    constructor() {
        this.hand = [];
    }
}


class Game {
    constructor() {
        this.deck = [];
        this.makeDeck();
        //this.playGame();
    }

    makeDeck() {
        let suits = [ '🗡️','💎','❤️','🍀'];
        let faces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
        
        
        for (let suit of suits) {
            for (let x = 0; x < faces.length; x++) {
                this.deck.push(new Card(faces[x],suit,x+2))
            }
        }
        
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }

        // slice the deck in half and to each player
    }


    playGame() {
        //go through each players deck, one card at a time

        //see who has the bigger card

        //the player who win's gets a point;
    }
}

let gameOfWar = new Game();

console.log(gameOfWar);




