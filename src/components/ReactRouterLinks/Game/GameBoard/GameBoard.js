import React from "react";
import "./GameBoard.css";

const GameBoard = () => {
  return (
    <div className="board-wrapper">
        <header className="header">
            <h1>Deterrence Game Board</h1>
            
        </header>
        
        <div>
            <div className="responding-text">
            <h1>Responding Player's Side</h1>
            </div>
            <div className="board-grid">
                <div className="square">a8</div>
                <div className="square">b8</div>
                <div className="square">c8</div>
                <div className="square">d8</div>
                <div className="square">e8</div>
                <div className="square">f8</div>
                <div className="square">g8</div>
                <div className="square">h8</div>
                <div className="square">a7</div>
                <div className="square">b7</div>
                <div className="square">c7</div>
                <div className="square">d7</div>
                <div className="square">e7</div>
                <div className="square">f7</div>
                <div className="square">g7</div>
                <div className="square">h7</div>
                <div className="square">a6</div>
                <div className="square">b6</div>
                <div className="square">c6</div>
                <div className="square">d6</div>
                <div className="square">e6</div>
                <div className="square">f6</div>
                <div className="square">g6</div>
                <div className="square">h6</div>
                <div className="square">a5</div>
                <div className="square">b5</div>
                <div className="square">c5</div>
                <div className="square">d5</div>
                <div className="square">e5</div>
                <div className="square">f5</div>
                <div className="square">g5</div>
                <div className="square">h5</div>
                <div className="square">a4</div>
                <div className="square">b4</div>
                <div className="square">c4</div>
                <div className="square">d4</div>
                <div className="square">e4</div>
                <div className="square">f4</div>
                <div className="square">g4</div>
                <div className="square">h4</div>
                <div className="square">a3</div>
                <div className="square">b3</div>
                <div className="square">c3</div>
                <div className="square">d3</div>
                <div className="square">e3</div>
                <div className="square">f3</div>
                <div className="square">g3</div>
                <div className="square">h3</div>
                <div className="square">a2</div>
                <div className="square">b2</div>
                <div className="square">c2</div>
                <div className="square">d2</div>
                <div className="square">e2</div>
                <div className="square">f2</div>
                <div className="square">g2</div>
                <div className="square">h2</div>
                <div className="square">a1</div>
                <div className="square">b1</div>
                <div className="square">c1</div>
                <div className="square">d1</div>
                <div className="square">e1</div>
                <div className="square">f1</div>
                <div className="square">g1</div>
                <div className="square">h1</div>
            </div>
            
        </div>
        <h1 className="starting-text">Starting Player's Side</h1>
    </div>
  )
}

export default GameBoard;