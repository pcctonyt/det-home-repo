import React from "react";

const BNEG = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Order Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Begin Treaty Negotiations Order Element Code</h1>
                <div className="divider"></div>
                <p>This Code indicates when a Player requests Treaty Negotiations from the other Player.  One, some, or all of either the Variable Rules or the Points Settings may be changed.  The Deterrence Official Treaty Negotiations Chart determines which Variable Rules and Points Settings these are.  This Code ALWAYS COUNTS as one COMPLETE TURN, since the immediate Turn will use one of the ENEG- Order Element Codes to reveal how the negotiations fared.  Each Player has but ONE OPPORTUNITY to use this Code throughout the entire Game.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use to:</span></p>
                    <h1>(BNEG)</h1> <span className="right lg-text">Begin Treaty Negotiations</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <div className="divider"></div>
                        <p><span className="bold">The Begin Treaty Negotiations Order Element Code does not have a Points Rule:</span></p>
                    
                        <div className="divider"></div>
                        <p><span className="bold">Answering Player's options:</span><span className="right"></span></p>
                        <p>1.  Refuse to implement a Treaty outright (ENEG-N) (preserves the Default Settings)</p>
                        <p>2.  Not agree to one, some, or all of what the Asking Player wishes to change (ENEG-N) (preserves the Default Settings on the 1st round of negotiations, preserves the existing settings on the second round)</p>
                        <p>3.  Both Players reach an agreement on EXACTLY THE SAME changes to be made and a Treaty is therefore adopted ((ENEG-Y) for the 1st round of negotiations, (ENEG-R) for the 2nd round).</p>
                        <p className="bold"><span className="bold">There are no Variable Rules for Begin Treaty Negotiations Order Elements</span></p>
                </div>        
        </div>
    </div>
  )
};

export default BNEG;