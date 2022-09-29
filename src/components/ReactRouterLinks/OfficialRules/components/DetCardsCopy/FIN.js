import React from "react";

const FIN = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Nuclear Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Fixed Intermediate Nuclear Unit</h1>
                <div className="divider"></div>
                <p>Up to 1 each side per game, the game starts without them</p>
                <div className="divider"></div>
                <p>Each player chooses the square it Deploys (D) to.  That square must currently have a Conventional Unit other than the President or Infantry Unit resting on it.</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">Nuclear Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(FIN)</h1> <span className="right lg-text">0.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                <div className="divider"></div>
                    <p><span className="bold">Movement:</span><span className="bold right">Cannot Move</span></p>
                    <p className="indent no-divider"><strong className="bold">YIELD (squares destroyed):</strong> <span className="right">Two Adjacent Squares</span></p>
                <div className="divider"></div>
                    <p className="indent no-divider"><strong className="bold">RANGE (squares able to be destroyed): </strong><span className="right">No more than two squares from Unit's current resting square, within current or last accompanying Unit's movement range.</span></p>
                <div className="divider"></div>
                    <p className="no-divider"><span className="bold">Pairs With Any Unit Other Than the President Unit or the Infantry Units</span></p>
                <div className="divider md"></div>
                <div className="divider lg"></div>    
                    <p className="no-divider"><span className="bold">Rules for all Fixed Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. Fixed Nuclear Units are only destroyed by opposing Conventional Units, they cannot be captured.</p>
                    <p>2. The opponent landing on that square removes it without points.</p>
                    <p>3. The player losing the FIN loses no Cash Value Points.</p>
                    <p>4. The destroyed squares in a Firing Move become Fallout Squares, off-limits to all ground-landing Units, if no SDI Defense Units are present on that/those square(s).  The Nuclear Unit is then removed from the Game Board.</p>
                <div className="divider lg"></div>
                    <p className="no-divider"><span className="bold">General Rules for Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. To Fire (F) a Nuclear Unit, it must have been previously Armed (R).</p>
                    <p>2. Armed Units can be Fired (F) unaccompanied within given ranges.</p>
                    <p>3. The Unit fired is removed from the board and the firing player loses those Cash Value Points (for Mobile Units).</p>
                    <p>4. The other player's destroyed Units are removed from the board and all the resulting Cash Value Points are lost.</p>
                    <p>5. All applicable Score Sheet Game Points must be tallied by both players.</p>
                    <p>6. Nuclear Units cannot destroy ANY Units on squares protected by Fixed SDI Defense Units.</p>
                    <p>7. Nuclear Units can destroy both friendly and opposing Units (sacrifices).</p>
                    <p>8. Only 1 total Tactical or Intermediate Nuclear Unit of either type is allowed.  The Player Deploying (D) selects either a Mobile or Fixed type at that time, and that CANNOT BE changed later.</p>
                    <p>9. The Intermediate Nuclear Unit type Deploys (D) during Complete Turns #11-#20, inclusive.</p>
                    <p>10. All Deployed (D) Nuclear Units have a Complete Turn wait time before being Activated (C), non-inclusive of those two Turns.  This time limit can be changed during Treaty negotiations; the <em className="bold">Default Setting</em> is: 5-Turn Wait.</p>
                </div>
                <div className="divider lg"></div>
                    <p className="note">NOTE:  In the event of a Treaty where the use of Nuclear and SDI Units has been turned off, all Order Element Codes related to the Fixed Intermediate Nuclear Unit become illegal (IED-S).</p>
        </div>
    </div>
  )
}

export default FIN;