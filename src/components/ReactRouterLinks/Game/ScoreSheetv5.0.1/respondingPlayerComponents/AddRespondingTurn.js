import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./ScoreSheet.css";

const AddRespondingTurn = () => {
    const [ text, setText ] = useState("");

    const [ scoredPoints, setScoredPoints ] = useState(0);
    const [ newRespCashPoints, setNewRespCashPoints ] = useState(0);
    const [ newRespDeductedCashPoints, setNewRespDeductedCashPoints ] = useState(0);

    const { addRespondingTurn } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newRespondingTurn = {
            id:  Math.floor(Math.random() * 100000000 ),
            text,
            scoredPoints: +scoredPoints,
            newRespCashPoints: +newRespCashPoints,
            newRespDeductedCashPoints: -newRespDeductedCashPoints,
        }

        addRespondingTurn(newRespondingTurn);
        setText("");
        setScoredPoints(0);
        setNewRespCashPoints(0);
        setNewRespDeductedCashPoints(0);
    }

    return (
        <span>
            <h3 className="text-center">Add new Responding Turn</h3>
            <form onSubmit={onSubmit}>
                <span className="form-control">
                    <label htmlFor="text">Complete Turn:</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter turn codes..." />
                </span>
                <span className="form-control">
                    <label htmlFor="scoredPoints">Enter Turn's Total Scored Points:<br /></label>
                    <input type="number" value={scoredPoints} onChange={(e) => setScoredPoints(e.target.value)} placeholder="Enter Points Scored..." />
                </span>
                <span className="form-control">
                    <label htmlFor="cashPoints">Enter New Cash Value Points:<br /></label>
                    <input type="number" value={newRespCashPoints} onChange={(e) => setNewRespCashPoints(e.target.value)} placeholder="Enter New Cash Value Points..." />
                </span>
                <span className="form-control">
                    <label htmlFor="cashPoints">Enter Starting Deducted Cash Value Points (for capture (x) Move Elements):<br /></label>
                    <input type="number" value={newRespDeductedCashPoints} onChange={(e) => setNewRespDeductedCashPoints(e.target.value)} placeholder="Enter New Cash Value Points..." />
                </span>
                <button className="btn">Add Responding Turn</button>
            </form>
        </span>
    )
}

export default AddRespondingTurn;