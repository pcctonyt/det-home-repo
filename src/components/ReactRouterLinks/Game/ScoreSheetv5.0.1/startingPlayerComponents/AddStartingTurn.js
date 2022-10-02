import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddStartingTurn = () => {
    const [ text, setText ] = useState("");

    const [ scoredPoints, setScoredPoints ] = useState(0);
    const [ newCashPoints, setNewCashPoints ] = useState(0);
    const [ deductedCashPoints, setDeductedCashPoints ] = useState(0);

    const { addStartingTurn } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newStartingTurn = {
            id:  Math.floor(Math.random() * 100000000 ),
            text,
            scoredPoints: +scoredPoints,
            newCashPoints: +newCashPoints,
            deductedCashPoints: -deductedCashPoints,
        }

        addStartingTurn(newStartingTurn);
        setText("");
        setScoredPoints(0);
        setNewCashPoints(0);
        setDeductedCashPoints(0);
    }

    return (
        <span>
            <h3 className="text-center">Add new Starting Turn</h3>
            <form onSubmit={onSubmit}>
                <span className="form-control">
                    <label htmlFor="text">Complete Turn:</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter turn codes..." />
                </span>
                <span className="form-control">
                    <label htmlFor="scoredPoints">Enter Turn's Total Scored Points:<br /></label>
                    <input type="number" min="-10.0" max="10.0" step="0.1" value={scoredPoints} onChange={(e) => setScoredPoints(e.target.value)} />
                </span>
                <span className="form-control">
                    <label htmlFor="NewCashPoints">Enter Your New Cash Value Points (for new Mobile Units Added):<br /></label>
                    <input type="number" value={newCashPoints} min="-10.0" max="10.0" step="0.1" onChange={(e) => setNewCashPoints(e.target.value)} />
                    <label htmlFor="DeductedCashPoints">Enter Responding Deducted Cash Value Points (for capture (x) don't use (-) sign):<br /></label>
                    <input type="number" value={deductedCashPoints} min="-10.0" max="10.0" step="0.1" onChange={(e) => setDeductedCashPoints(e.target.value)} />
                </span>
                <button className="btn">Add Starting Turn</button>
            </form>
        </span>
    )
}

export default AddStartingTurn;