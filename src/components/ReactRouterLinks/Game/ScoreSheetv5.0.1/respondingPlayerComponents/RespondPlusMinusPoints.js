import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const RespondPlusMinusPoints = () => {
    const { respondingTurns } = useContext(GlobalContext);

    const scoredTotal = respondingTurns.map(respondingTurn => respondingTurn.scoredPoints);

    const newRespCashTotal = respondingTurns.map(respondingTurn => respondingTurn.newRespCashPoints);

    const newRespDeductedCashTotal = respondingTurns.map(respondingTurn => respondingTurn.newRespDeductedCashPoints);

    const respondingPlusScorePoints = scoredTotal.filter(respondingPoints => respondingPoints > 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0).toFixed(2);

    const respondingMinusScorePoints = (scoredTotal.filter(respondingPoints => respondingPoints < 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0) * -1).toFixed(2);

    const respondingPlusCashPoints = newRespCashTotal.filter(respondingPoints => respondingPoints > 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0).toFixed(2);

    const respondingMinusCashPoints = (newRespDeductedCashTotal.filter(respondingPoints => respondingPoints < 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0) * -1).toFixed(2);

    return (
        <div className="responding-cash-score-container">
            <span className="score-points">
            <h4>+ Score Points</h4>
            <p className="score-points-plus">{ respondingPlusScorePoints }</p>
            </span>
            <span className="score-points">
            <h4>- Score Points</h4>
            <p className="score-points-minus">{ respondingMinusScorePoints }</p>
            </span>
            <span className="cash-points">
            <h4>+ New Cash Points</h4>
            <p className="cash-points-plus">{ respondingPlusCashPoints }</p>
            </span>
            <span className="cash-points">
            <h4>- Deducted Cash Points</h4>
            <p className="cash-points-minus">{ respondingMinusCashPoints }</p>
            </span>
        </div>
    )
}

export default RespondPlusMinusPoints