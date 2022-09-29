import React from "react";

const Infantry = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Conventional Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Infantry Units</h1>
                <div className="divider"></div>
                <p>8 each at start of game, placement as follows below:</p>
                <div className="divider"></div>
                <p>Starting Player: squares a2, b2, c2, d2, e2, f2, g2, and h2 --- Responding Player: squares a7, b7, c7, d7, e7, f7, g7, and h7</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">Conventional Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(no code)</h1> <span className="right lg-text">1.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Movement:</span><span className="bold right">They move as the Pawns in chess do (see Official Rules)</span></p>
                        <p className="no-divider"><span className="bold">They pair with the 2 Tactical Nuclear Unit Types (Fixed / Mobile)</span></p>
                    <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">Promotion Rules for the Infantry Units</span></p>
                    <div className="divider md"></div>
                        <p className="no-divider">Selection 1.  No Promotion (2.0 Score Sheet Game Points added, removed from board)</p>
                        <div className="divider"></div>
                        <p className="no-divider">Selection 2.  Promotion Only to Captured Units (does not include destroyed (z) Units)</p>
                        <div className="divider"></div>
                        <p className="no-divider">Selection 3.  Promotion to Any Unit Besides the President</p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">Rules for the Infantry Units</span></p>
                    <div className="divider lg"></div>
                        <p>1. An Infantry Unit may NOT BE declared as an Envoy.</p>
                        <p className="no-divider">3. If the #2 or #3 option is selected for Promotion in the Treaty, an Infantry Unit can promote, depending upon Treaty Selection  (see Official Rules:  Infantry Promotion, for more information).</p>
                        <p className="text-center no-divider">INFANTRY UNIT-SPECIFIC MOVEMENT RULES:</p>
                        <div className="divider md"></div>
                        <p>1. The Infantry Units, when making Move Elements, have distinct movement limitations and exceptions that all of the other Conventional Units do not have.  Each Infantry DOES NOT use its own Unit Code, as other Units of all other types do.</p>
                        <div className="divider"></div>
                        <p>2.  Each Infantry Unit can move EITHER ONE VERTICALLY FORWARD or TWO VERTICALLY FORWARD squares on its very FIRST Move Element.  After that, it may only move ONE VERTICALLY FORWARD square per Move Element.  The Infantry Unit CANNOT move diagonally or horizontally or backwards.  Its movement (without capture (x) or destroy (z)) Move Elements is LIMITED TO that file it started on.</p>
                        <p>3.  The exception to #2 above concerns capturing and destroying Move Elements.  An Infantry Unit executes these Move Elements to only one of the two available BOTH ADJACENTLY AND DIAGONALLY FORWARD squares.  As is the case with other Conventional Units</p>
                        <p>4.  Note that, like other Conventional Units, the Airdrop Unit CANNOT MOVE to a final resting square occupied by a FRIENDLY CONVENTIONAL Unit, as each square can hold only a MAXIMUM of ONE CONVENTIONAL UNIT at a time.</p>
                        <p>5.  If the Airdrop Unit lands on a square where either Mobile Nuclear or Mobile SDI Defense Unit(s) or both are already is or are resting there, then only UP TO ONE of those Units can be moved by the Airdrop Unit during subsequent Move Elements.</p>
                        <p>6.  The Firing Range of the Mobile Intermediate Nuclear Unit is LIMITED TO the movement range of the Airdrop Unit if it currently is with the Airdrop Unit or if the Airdrop Unit was the most recently accompanying Unit to the MIN.</p>
                        <p className="no-divider">7.  Airdrop Units can complete Move Elements over friendly or opposing Unit(s) as well as Fallout Squares in their movement paths.  However, they cannot end their movements on Fallout Squares.</p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  During a capture move, the Airdrop Unit's Cash Value of +3.0 Points get awarded as Score Sheet Game Points to the capturing Player.  In the event that an attacking Player destroys an Airdrop Unit in a Nuclear Unit Firing Move, that Firing Player DOES NOT receive the +3.0 Points on the Score Sheet, but the other player still deducts the +3.0 Cash Value Game Points on the Score Sheet.</p>
                    <div className="divider md"></div>
                        <p className="note">NOTE:  During a capture move, the Infantry Unit's Cash Value of +1.0 Point gets awarded as a Score Sheet Game Point to the capturing Player.  In the event that an attacking Player destroys an Infantry Unit in a Nuclear Unit Firing Move, that Firing Player DOES NOT receive the 1.0 Point on the Score Sheet, but the other player still deducts the 1.0 Cash Value Game Point on the Score Sheet.</p>
                </div>        
        </div>
    </div>
  )
};

export default Infantry;