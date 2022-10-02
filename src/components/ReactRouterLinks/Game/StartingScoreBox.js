import React from "react";
import "./GameStyles/StartScoreStyle.css";

const StartingScoreBox = ({ total }) => {
  return (
    <div className="starting-score-box-wrapper">
        <h4>Starting Player:</h4>
        <div className="score-box-window">
            <p>Score:</p>
            <h1 className="score-points">0</h1>
        </div>
        <div className="cash-box-window">
            <p>Cash Value:</p>
            <h1 className="cash-points">39</h1>
        </div>
        <h3>Count:</h3>
        <div className="starting-balls-window">Balls:
            <span className="ball">
               <h1 className="ball one">1</h1>
            </span>
            <span className="ball">
                <h1 className="ball two">2</h1>
            </span>
            <span className="ball">
                <h1 className="ball three">3</h1>
            </span>
            <span className="ball">
                <h1 className="ball four">4</h1>
            </span>
        </div>
        <div className="starting-strikes-window">Strikes:
            <span className="strike">
                <h1 className="strike two">1</h1>
            </span>
            <span className="strike">
                <h1 className="strike three">2</h1>
            </span>
            <span className="strike">
                <h1 className="strike four">3</h1>
            </span>
        </div>
    </div>
  )
}

export default StartingScoreBox;