const Board = require("./board");
const Player = require("./player");

class Game{
    constructor(){
        this.board = new Board(3);
        this.player1 = new Player("X");
        this.player2 = new Player("O");
        this.currentPlayer = this.player1;
    }

    switchPlayer(){
        this.currentPlayer
        = (this.currentPlayer == this.player1)
        ? this.player2 : this.player1;
    }

    run(reader, callback){
        console.clear();
        this.board.print();
        reader.question(`Player ${this.currentPlayer.symbol}, enter position:`, pos => {
            pos = pos.split(" ");
            pos = pos.map(i => parseInt(i));
            this.board.placeMark(pos, this.currentPlayer.symbol);
            console.clear();
            this.board.print();
            if (this.board.isWon()){
                console.log(`${this.currentPlayer.symbol} won!`);
                callback();
            } else {
                this.switchPlayer();
                this.run(reader, callback);
            }
        });
    }
}

module.exports = Game;

// board = new Board(5);
// board.placeMark([0,0], "X");
// board.placeMark([1,1], "X");
// board.placeMark([2,2], "X");
// board.placeMark([3,3], "X");
// board.placeMark([4,4], "X");
// console.log(board.isWon());
// board.print();