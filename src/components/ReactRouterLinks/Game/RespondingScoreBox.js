import React from "react";
import "./GameStyles/RespondScoreStyle.css";

const RespondingScoreBox = () => {
  return (
    <div className="responding-score-box-wrapper">
        <h3>Responding Player:</h3>
        <div className="score-box-window">Score Sheet Total
            <h1 className="score-points">0</h1>
        </div>
        <div className="cash-box-window">Cash Value Total
            <h1 className="cash-points">39</h1>
        </div>
        <h3>Count:</h3>
        <div className="responding-balls-window">Balls Issued:
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
        <div className="responding-strikes-window">Strikes Issued:
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

export default RespondingScoreBox;