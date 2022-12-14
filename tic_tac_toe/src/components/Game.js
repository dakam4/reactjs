import React from "react";
import { Board } from "./Board";
import { determineWinner, getSquareCoordinates } from "./Functions";
import '../css/game.css';
import { Button, Grid, Paper } from "@material-ui/core";

export class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber:0,
            xIsNext: true,
            isAscending: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const result = determineWinner(squares);

        if ((result != null ? result[0] : result) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares,
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        });
      }

      jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }

      toggle_moves_order(){
        this.setState({
          isAscending : !this.state.isAscending,
        });
      }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const result = determineWinner(current.squares);
        const winner = (result != null ? result[0] : result);
        const w_squares = (result != null ? result[1] : '');

        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move + " : " + getSquareCoordinates(move-1) :
              'Go to game start';
            return (
              <li key={move}>
                <Button variant="outlined" 
                  className={(this.state.stepNumber === move) ? 'bold' : ''}
                  onClick={() => this.jumpTo(move)} >{desc}
                </Button>
              </li>
            );
          });

        let status;
        if (winner) {
            status = 'WINNER : ' + winner;
          } else {
              status = 'Next player : ' + (this.state.xIsNext ? 'X' : 'O');
            }
          if(this.state.stepNumber > 8){
            status = 'GAME OVER : DRAW'
          }

        return(
            <Grid container spacing={0}>
                <Grid item xs={4}></Grid>
                <Grid item className="game" xs={4}>
                  <Paper elevation={0} className="game-info">
                      {status}
                  </Paper>
                  <Paper className="board">
                    <Board 
                        winners={w_squares}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                  </Paper>
                  <Paper elevation={0} className="toggle-button">
                    <Button
                      variant="contained"
                      onClick={() => this.toggle_moves_order()}>
                      Toggle moves order
                    </Button>
                  </Paper>
                  <Paper elevation={0} className="move-list">
                    <ol>{(this.state.isAscending ? moves : moves.reverse())}</ol>
                  </Paper>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        )
    }
}