
import React, { useState } from "react";
import GameBoard from "./GameBoard/GameBoard";
import Popup from "./Popup/Popup.js";
import RespondingScoreBox from "./RespondingScoreBox";
import ScoreSheet from "./ScoreSheetv5.0.1/ScoreSheet.js";
import StartingScoreBox from "./StartingScoreBox";
import Treaty from "./TreatyChartv5.2.2/Treaty.js";
import "./GameStyles/StartScoreStyle.css";
import "./GameStyles/RespondScoreStyle.css";
import "./GameStyles/Game.css";


const Game = () => {
  const [ fireGameBoard, setFireGameBoard ] = useState(false);
  const [ fireScoreSheet, setFireScoreSheet ] = useState(false);
  const [ fireTreatyNegChart, setFireTreatyNegChart ] = useState(false);

  return (
  <div>
        <header>
           <h1>Play Deterrence Now!</h1>
        </header>
        <div className="score-header-wrapper">
          <StartingScoreBox />
          <span className="board-btn-wrapper">
            <button id="PlayNowGameBoard" className="board-codes-btn" onClick={() => setFireGameBoard(true)}>Deterrence Game Board</button>
            <Popup trigger={ fireGameBoard } setTrigger={ setFireGameBoard }>
                <GameBoard />
            </Popup>
          </span>
          <RespondingScoreBox />
        </div>
        
        <div className="game-components-wrapper">
          <span>
            <button id="PlayNowScoreSheet" className="score-sheet-btn" onClick={() => setFireScoreSheet(true)}>Deterrence Score Sheet</button>
            <Popup trigger={ fireScoreSheet } setTrigger={ setFireScoreSheet }>
                <ScoreSheet />
            </Popup>
          </span>
          <span>
            <button id="PlayNowTreatyChart" className="treaty-chart-btn" onClick={() => setFireTreatyNegChart(true)}>Deterrence Treaty Negotiations Chart</button>
            <Popup trigger={ fireTreatyNegChart } setTrigger={ setFireTreatyNegChart }>
                <Treaty />
            </Popup>
          </span>
        </div>        
        
  </div>
  )
}

export default Game;