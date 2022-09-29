import React from "react";

const DO = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Drop Off Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows for a Conventional Unit to drop off either type of friendly Mobile Nuclear and also Mobile SDI Defense Units from its(their) current resting square to a square before the Conventional Unit's destination square.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Units Being Moved:</span></p>
                    <h1>(DO)</h1> <span className="right lg-text">MTN, MIN, MSDI</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">All Conventional Units can Drop Off Mobile SDI Defense Units and then move on to their final destination squares.  The Unit(s) being dropped off can then be later picked up (PU) by another friendly Conventional Unit (for Nuclear Units, a compatible Conventional Unit).  It is legal for Mobile Units of all types to remain unaccompanied.  However, a new accompanying Conventional Unit changes the Movement RANGE (and also the Firing RANGE of Nuclear Units) of the Mobile Unit(s) being picked up.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">Only Units other than Infantry or the President Unit can Drop Off either Mobile Intermediate Nuclear Units or Mobile SDI Defense Units for possible later Pick Up or accompanyment by like Units.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">The Drop Off Move Element requires only the one Conventional Unit completing an otherwise legal Move Element and that Mobile Unit being dropped off at a square along the path of the Conventional Unit's move.</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">The Drop Off Move Element has no applicable Variable Rules or Points Settings Options available during Treaty negotiations.</span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  The Drop Off Move Element is always NOT ITSELF a Complete Turn, but rather its Move Element pairs with the Move Element of the Conventional Unit in only ONE COMPLETE TURN.  Score Sheet Complete Turn entry example: <em>DO-MINd4</em>,Gd8  A General starts off with a Mobile Intermediate Nuclear Unit on any one of three prior starting squares (d1, d2, or d3), and "Drops Off" said Nuclear Unit on square d4, and the General alone moves to square d8. </p>
                </div>        
        </div>
    </div>
  )
};

export default DO;