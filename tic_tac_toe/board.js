class Board{

    constructor(gridSize){
        this.grid = Array.from({length: gridSize}, function(){
            return Array.from({length: gridSize}, function(){
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

        // Transpose grid
        const transposedGrid = this.#transpose(this.grid);
        const diagonals = this.#getDiagonals();

        // Check the original, the transposed grid, and the diagonals for a winning player.
        this.grid.concat(transposedGrid, diagonals).forEach((row) => {
            if (row.every((square) => (square === row[0] && square !== "_") )){
                won = true;
                winner = row[0];
                return;
            }
        });

        this.winner = winner;
        return won;

    }

    #getDiagonals(){
        let x = 0;
        let y = this.grid.length - 1;
        const diagonals = [[],[]];

        while (x <= this.grid.length - 1){
            diagonals[0].push( this.grid[x][x] );
            diagonals[1].push( this.grid[x][y] );
            x++, y--;
        }

        return diagonals;
    }

    #transpose(matrix) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
    }

    print (){
        console.log("  0 1 2");
        this.grid.forEach((row, i) => {
            let str = `${i} `;
            row.forEach((square) => {
               str += square + " "; 
            });
            console.log(str);
        });
    }

}

module.exports = Board;