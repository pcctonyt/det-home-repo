import React from "react";

const SN = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Nuclear Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Strategic Nuclear Unit</h1>
                <div className="divider"></div>
                <p>Up to 1 each side per game, the game starts without them</p>
                <div className="divider"></div>
                <p>The Player Deploys (D) the Strategic Nuclear Unit to the square the President Unit currently rests on.  It is always fixed (due to unlimited RANGE)</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">Nuclear Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(SN)</h1> <span className="right lg-text">0.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                <div className="divider"></div>
                    <p><span className="bold">Movement:</span><span className="bold right">Cannot Move</span></p>
                    <p className="indent no-divider"><strong className="bold">YIELD (squares destroyed):</strong> <span className="right">See Variable Rules Below</span></p>
                <div className="divider"></div>
                    <p className="indent no-divider"><strong className="bold">RANGE (squares able to be destroyed): </strong><span className="right">Anywhere on the board</span></p>
                <div className="divider"></div>
                    <p className="no-divider"><span className="bold">Pairs With the President Unit</span></p>
                <div className="divider md"></div>
                    <p className="indent no-divider">YIELD #1: <span className="bold right">DEFAULT:  2 x 2 squares</span> </p>
                    <p className="indent no-divider">YIELD #2: <span className="bold right">2 x 3 squares</span>
                    </p>
                    <p className="indent no-divider">YIELD #3: <span className="bold right">3 x 3 <em>County Be Gone!</em></span></p>
                <div className="divider lg"></div>
                    <p className="no-divider"><span className="bold">Rules for all Fixed Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. Fixed Nuclear Units are only destroyed by opposing Conventional Units, they cannot be captured.</p>
                    <p>2. The opposing Unit landing on that square removes it without points.</p>
                    <p>3. The player losing the Strategic Nuclear Unit loses no Cash Value Points.</p>
                    <p className="no-divider">4. The destroyed squares in a Firing Move become Fallout Squares, off-limits to all ground-landing Units, and the Nuclear Unit is removed from the Game Board.</p>
                <div className="divider lg"></div>
                    <p className="no-divider"><span className="bold">General Rules for Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. To Fire (F) a Nuclear Unit, it must have been previously Armed (R).</p>
                    <p>2. Armed Units can be Fired (F) unaccompanied within given ranges.</p>
                    <p>3. The Unit fired is removed from the board and the firing player loses those Cash Value Points (for Mobile Units).</p>
                    <p>4. The other player's destroyed Units are removed from the board and all the resulting Cash Value Points are then deducted from the Cash Value Game Points Total.</p>
                    <p>5. All applicable Score Sheet Game Points must be tallied by both players.</p>
                    <p>6. Nuclear Units cannot destroy any Units on squares protected by Fixed SDI Defense.</p>
                    <p>7. Nuclear Units cannot destroy a Unit paired with a Mobile SDI Defense Unit</p>
                    <p>8. Nuclear Units can destroy both friendly and opposing Units (sacrifices).</p>
                    <p>9. The Strategic Nuclear Unit type Deploys (D) during Complete Turns #21-#30, inclusive.</p>
                    <p>10. All Deployed (D) Nuclear Units have a Complete Turn wait time before being Activated (C), non-inclusive of those two Turns.  This time limit can be changed during Treaty negotiations; the <em className="bold">Default Setting</em> is: 5-Turn Wait.</p>
                </div>
                <div className="divider lg"></div>
                    <p className="note">NOTE:  In the event of a Treaty where the use of Nuclear and SDI Units has been turned off, all Order and Move Element Codes related to the Strategic Nuclear Unit become illegal (IED-S).</p>
        </div>
    </div>
  )
}

export default SN;