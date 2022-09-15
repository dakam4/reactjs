import React from "react";
import { Square } from "./Functions";

export class Board extends React.Component{
    renderSquares(){
        let rows = [];
        for(let row = 0; row < 3; row++){
            let cols = [];
            for(let col = 0; col < 3; col++){
                cols.push(this.renderSquare(col + (row * 3)));
            }
            rows.push(<div key={row} className="board-row">{cols}</div>);
        }
        return rows;
    }

    renderSquare(i){
        return (
            <span key={i}>
                <Square 
                    value={this.props.squares[i]}
                    onClick = {() => this.props.onClick(i)}
                />
            </span>
        );
    }

    render(){
        return(
            <div>
                {this.renderSquares()}
            </div>
        );
    }
}