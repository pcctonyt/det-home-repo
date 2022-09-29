import React from "react";

const PU = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Pick Up Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows for a Conventional Unit to pick up either type of friendly Mobile Nuclear and also Mobile SDI Defense Units from its(their) current resting square to the Conventional Unit's destination square, (for Nuclear Units, when the Conventional Unit is of the compatible type).</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Units Being Moved:</span></p>
                    <h1>(PU)</h1> <span className="right lg-text">MTN, MIN, MSDI</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">All Conventional Units can Pick Up Mobile SDI Defense Units, the Player then must choose which available Unit (if more than one) gets paired for protection by the Mobile SDI Defense Unit picked up.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">Only Units other than Infantry or the President Unit can Pick Up Mobile Intermediate Nuclear Units to other like Units.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">The Pick Up Movement Code requires only the one Conventional Unit completing an otherwise legal Move Element and that Mobile Unit already being in the path of the Conventional Unit's move to legally complete.</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">The Pick Up Movement Code has no applicable Variable Rules or Points Settings Options available during Treaty negotiations.</span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  The Pick Up Move Element is always NOT ITSELF a Complete Turn, but rather its Move Element pairs with the Move Element of the Conventional Unit in only ONE COMPLETE TURN.  Score Sheet Complete Turn entry example: <em>PU-MINd4</em>,Gd8  A General moves from any one of three prior starting squares (d1, d2, or d3), and "Picks Up" a Mobile Intermediate Nuclear Unit on square d4, and the both move to square d8. </p>
                </div>        
        </div>
    </div>
  )
};

export default PU;