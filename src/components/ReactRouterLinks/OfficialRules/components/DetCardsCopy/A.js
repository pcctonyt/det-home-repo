import React from "react";

const A = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Conventional Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Airdrop Units</h1>
                <div className="divider"></div>
                <p>2 each at start of game (Starting Player: sqs. b1,g1, Responding: b8, g8)</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">Conventional Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="cash right">Cash Value</span></p>
                    <h1>(A)</h1> <span className="right lg-text">3.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Movement:</span><span className="bold right">They move as the Knights in chess do (see below)</span></p>
                    
                        <p className="no-divider"><span className="bold">They pair with the 2 Intermediate Nuclear Unit Types (Fixed / Mobile)</span></p>
                    <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">Rules for the Airdrop Units</span></p>
                    <div className="divider lg"></div>
                        <p>1. Either Airdrop Unit can be declared as an Envoy (adds +1.0 Cash Value Point to that specific Unit's Cash Value (see Official Rules:  All Score Sheet Rules, for more information)).</p>
                        <p>2. There can be only one active Envoy per player per game.</p>
                        <p>3. If the #2 or #3 option is selected for Promotion in the Treaty, an Infantry Unit can promote to an Airdrop Unit.</p>
                        <p className="no-divider">4. Airdrop Units can complete Move Elements over friendly or opposing Unit(s) as well as Fallout Squares in their movement paths.  However, they cannot end their movements on Fallout Squares.</p>
                        <div className="divider md"></div>
                        <p className="text-center no-divider">AIRDROP UNIT-SPECIFIC MOVEMENT RULES:</p>
                        <div className="divider md"></div>
                        <p>1. The Airdrop Units, when making Move Elements, move ALWAYS ONLY THE DESCRIBED BELOW ONE-THEN-THREE OR THREE-THEN-ONE square pattern in either FIRST HORIZONTAL THEN VERTICAL OR FIRST VERTICAL THEN HORIZONTAL square PATTERN. The second number refers to a square (or squares) PERPENDICULARLY ADJACENT to the starting point.  This Rule also applies for the OPPOSITE DIRECTIONS OF SQUARES selected for the movement of the Airdrop Unit.  The examples below make it easier to see.  The first example of this for the Airdrop Unit moving from square b1 to square c3 would be: <em>Ac3</em>.  Another example of this for the Airdrop Unit moving from square b1 to square d2 (see above) would be: <em>Ad2</em>.  There are no limits on directional movements provided that that same 1-then-3 or 3-then-1 square formula is adhered to. </p>
                        <div className="divider"></div>
                        <p>2.  Each Airdrop Unit can "fly over" any Unit(s), friend or foe, in its movement path, and, as in the case of other Conventional Units, it replaces other OPPOSING UNITS OF ALL TYPES only on that Player's choice of its final resting square during that Move Element (the opposing Units are removed from the Game Board, see Official Rules: Captures (x) and Destroys (z) Operator Codes, for more information).</p>
                        <p>3.  All Score Sheet Game Points and Cash Value Game Points must be accurately recorded and then added to their respective totals on the Score Sheet when applicable.</p>
                        <p>4.  Note that, like other Conventional Units, the Airdrop Unit CANNOT MOVE to a final resting square occupied by a FRIENDLY CONVENTIONAL Unit, as each square can hold only a MAXIMUM of ONE CONVENTIONAL UNIT at a time.</p>
                        <p>5.  If the Airdrop Unit lands on a square where either Mobile Nuclear or Mobile SDI Defense Unit(s) or both are already is or are resting there, then only UP TO ONE of those Units can be moved by the Airdrop Unit during subsequent Move Elements.</p>
                        <p>6.  The Firing Range of the Mobile Intermediate Nuclear Unit is LIMITED TO the movement range of the Airdrop Unit if it currently is with the Airdrop Unit or if the Airdrop Unit was the most recently accompanying Unit to the MIN.</p>
                        <p className="no-divider">7.  Airdrop Units can complete Move Elements over friendly or opposing Unit(s) as well as Fallout Squares in their movement paths.  However, they cannot end their movements on Fallout Squares.</p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  During a capture move, the Airdrop Unit's Cash Value of +3.0 Points get awarded as Score Sheet Game Points to the capturing Player.  In the event that an attacking Player destroys an Airdrop Unit in a Nuclear Unit Firing Move, that Firing Player DOES NOT receive the +3.0 Points on the Score Sheet, but the other player still deducts the +3.0 Cash Value Game Points on the Score Sheet.</p>
                </div>        
        </div>
    </div>
  )
};

export default A;