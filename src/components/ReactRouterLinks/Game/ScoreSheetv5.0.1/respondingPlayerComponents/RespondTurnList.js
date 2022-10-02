import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import RespondingTurn from "./RespondingTurn";

const RespondTurnList = () => {
  const { respondingTurns } = useContext(GlobalContext);

  return (
    <>
        <h4 className="text-center">Responding Player's Turns</h4>
        <h6>COMPLETE TURN WITH ALL TYPES OF POINTS:</h6>
        <ul className="list">
          {respondingTurns.map(respondingTurn => (<RespondingTurn key={respondingTurn.id} respondingTurn={respondingTurn}/>))}
        </ul>
    </>
  )
}

export default RespondTurnList;