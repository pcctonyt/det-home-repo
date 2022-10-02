import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";


const plusTextStyle = {
  color: "green",
  textAlign: "center",
  fontSize: "4rem"
}

const minusTextStyle = {
  color: "red",
  textAlign: "center",
  fontSize: "4rem"
}

const StartingCash = ( props ) => {
  const { startingTurns } = useContext(GlobalContext);

  const startingCashPoints = startingTurns.map(startingTurn => startingTurn.newCashPoints);
  const total = startingCashPoints.reduce((acc, item) => (acc += item), 39).toFixed(2);

  return (
    <>
        <h5>Cash Value:</h5>
        {total > 0 ? <h1 style={plusTextStyle}>{ total }</h1> : <h1 style={minusTextStyle}>{ total - props.newRespDeductedCashPoints}</h1>}
    </>
  )
}

export default StartingCash;