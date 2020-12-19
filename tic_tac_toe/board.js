class Board{

    constructor(){
        this.grid = Array.from({length: 3}, function(){
            return Array.from({length: 3}, function(){
                return "_";
            }); 
        });
    }
    
    placeMark(pos, symbol){
        if (this.grid[pos[0]][pos[1]] !== "_"){
            throw new Error("Square already taken!");
        }
        this.grid[pos[0]][pos[1]] = symbol;
    }

    isWon(){
        let won = false;
        let winner = "";

        // Transpose array
        const transposed = this.#transpose(this.grid);

        this.grid.concat(transposed).forEach((row) => {
            if (row.every((square) => square === row[0])){
                won = true;
                winner = row[0];
                return;
            }
        });
        this.winner = winner;
        return won;
    }

    #transpose(matrix) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
    }

    print (){
        this.grid.forEach((row) => {
            let str = "";
            row.forEach((square) => {
               str += square + " "; 
            });
            console.log(str);
        });
    }

}

board = new Board();
board.placeMark([1,0], "X");
board.placeMark([2,0], "X");
board.placeMark([0,0], "X");
console.log(board.isWon());
board.print();