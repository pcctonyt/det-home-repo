import React from "react";

const MTN = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Nuclear Units</h1>
        <div className="label">
            <header>
                <h1 className=" text-center bold">Mobile Tactical Nuclear Unit</h1>
                <div className="divider"></div>
                <p>Up to 1 each side per game, the game starts without them</p>
                <div className="divider"></div>
                <p>Each player chooses the square it Deploys (D) to.  That square must currently have an Infantry Unit resting on it.</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">Nuclear Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(MTN)</h1> <span className="right lg-text">4.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                <div className="divider"></div>
                    <p><span className="bold">Movement:</span><span className="bold right">Moves to squares the Infantry Unit paired with it can move to</span></p>
                    <p className="indent no-divider"><strong className="bold">YIELD:</strong> <span className="right">1 square</span></p>
                <div className="divider"></div>
                    <p className="indent no-divider"><strong className="bold">RANGE: </strong><span className="right">1 Adjacent Diagonal Forward Square</span></p>
                <div className="divider"></div>
                    <p className="no-divider"><span className="bold">Pairs With the Infantry Units</span></p>
                <div className="divider md"></div>
                    <p><span className="bold">Variable Rules:</span> <span className="right bold">Default Setting:</span></p>
                    <p className="indent no-divider"><i>Promotion</i> moves:<span className="bold right">(Promotes to Mobile Intermediate Nuclear Unit when #2 or #3 option chosen in Treaty)</span></p>
                <div className="divider"></div>
                <div className="divider lg"></div>
                    <p className="no-divider"><span className="bold">Rules for all Mobile Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. Mobile Nuclear Units are only captured by opposing Conventional Units, they cannot be destroyed.</p>
                    <p>2. The opponent landing on that square removes it from the Game Board and scores that Unit's 4.0 Cash Value Points to his/her Score Sheet Game Points Total.</p>
                    <p>3. The player losing the MTN to capture deducts 4.0 Cash Value Points from his/her Cash Value Points Total on the Score Sheet.</p>
                    <p>4. The destroyed squares in a Firing Move become Fallout Squares, off-limits to all ground-landing Units.</p>
                <div className="divider lg"></div>
                    <p className="no-divider"><span className="bold">General Rules for Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. To Fire (F) a Nuclear Unit, it must have been previously Armed.</p>
                    <p>2. Armed Units can be fired unaccompanied within given ranges.</p>
                    <p>3. The Unit fired is removed from the board and the firing player deducts those Cash Value Points from his/her Cash Value Game Points Total on the Score Sheet (for Mobile Units).</p>
                    <p>4. The other player's destroyed Units are removed from the Game Board and all the resulting Cash Value Points are deducted as above at that time.</p>
                    <p>5. All applicable Score Sheet Game Points and Cash Value Game Points must be tallied by both players during the Firing Player's Turn.</p>
                    <p>6. Nuclear Units cannot destroy any Units on squares protected by Fixed SDI Defense Units.</p>
                    <p>7. Nuclear Units cannot destroy a Unit paired with a Mobile SDI Defense Unit</p>
                    <p>8. Nuclear Units can destroy both friendly and opposing Units (sacrifices).</p>
                    <p>9. Only 1 total Tactical or Intermediate Nuclear Unit of either type is allowed.  The Player Deploying (D) selects either a Mobile or Fixed type at that time, and that CANNOT BE changed later.</p>
                    <p>10. The Tactical Nuclear Unit type Deploys (D) during Complete Turns #1-#10, inclusive.</p>
                    <p>11. All Deployed (D) Nuclear Units have a Complete Turn wait time before being Activated (C), non-inclusive of those two Turns.  This time limit can be changed during Treaty negotiations; the <em className="bold">Default Setting</em> is: 5-Turn Wait.</p>
                </div>
                <div className="divider lg"></div>
                    <p className="note">NOTE:  In the event of a Treaty where the use of Nuclear and SDI Units has been turned off, all Order and Move Element Codes related to the Mobile Tactical Nuclear Unit become illegal (IED-S).</p>
        </div>
    </div>
  )
}

export default MTN;