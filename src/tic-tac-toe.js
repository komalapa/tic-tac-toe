class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this. currentPlayerSymbol = 'x';
        this.winner = null

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if ((this.field[rowIndex][0]===this.field[rowIndex][1] && this.field[rowIndex][1]===this.field[rowIndex][2]) 
            || (this.field[0][columnIndex]===this.field[1][columnIndex] && this.field[1][columnIndex]===this.field[2][columnIndex]) 
            || (columnIndex===rowIndex && this.field[0][0] === this.field[1][1] && this.field[2][2] === this.field[1][1])
            || (columnIndex === this.field.length-rowIndex-1 && this.field[0][2] === this.field[1][1] && this.field[2][0] === this.field[1][1])) {
                this.winner = this.currentPlayerSymbol;
                //console.log("WIN", this.field)
            }
            this.currentPlayerSymbol = (this.currentPlayerSymbol === 'o') ? 'x' : 'o';
            return true;
        }
        //console.log(this.field, this.isDraw(), this.winner)
        return false
        
    }

    isFinished() {
        if (this.winner) return this.winner;
        if (this.isDraw) return null;

    }

    getWinner() {
        //console.log(this.winner)
        return this.winner
    }

    noMoreTurns() {
        if (this.isDraw()) return true
        return false
    }

    isDraw() {
        if (this.winner || this.isFull()) return false
        
        //console.log(this.field, this.isDraw(), this.winner)
        return true
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
    isFull(){
        for (let i=0; i< this.field.length; i++){
            for (let j=0; j< this.field[i].length; j++){
                if (this.field[i][j] === null) return false
            }
        }
    }

    whoIsWinner(){
        
    }
}

module.exports = TicTacToe;
