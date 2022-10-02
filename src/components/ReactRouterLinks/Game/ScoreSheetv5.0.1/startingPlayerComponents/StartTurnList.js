import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import StartingTurn from "./StartingTurn";

const StartTurnList = () => {
  const { startingTurns } = useContext(GlobalContext);

  return (
    <>
        <h4 className="text-center">Starting Player's Turns</h4>
        <h6>COMPLETE TURN WITH ALL TYPES OF POINTS:</h6>
        <ul className="list">
          {startingTurns.map(startingTurn => (<StartingTurn key={startingTurn.id} startingTurn={startingTurn}/>))}
        </ul>
    </>
  )
}

export default StartTurnList
