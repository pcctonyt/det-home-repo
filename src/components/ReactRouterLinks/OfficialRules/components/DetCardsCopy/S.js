import React from "react";

const S = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Conventional Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Sergeant Units</h1>
                <div className="divider"></div>
                <p>2 each at start of game (Starting Player: sqs. c1,f1 -- Responding: c8,f8</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">Conventional Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(S)</h1> <span className="right lg-text">3.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Movement:</span><span className="bold right">They move as the Bishops in chess do (see below)</span></p>
                        <p className="no-divider"><span className="bold">They pair with the 2 Intermediate Nuclear Unit Types (Fixed / Mobile)</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">Rules for the Sergeant Units</span></p>
                    <div className="divider lg"></div>
                        <p>1. Either Sergeant Unit can be declared as an Envoy (adds +1.0 Cash Value Point to that specific Unit's Cash Value (see Official Rules:  All Score Sheet Rules, for more information)).</p>
                        <p>2. There can be only one active Envoy per player per game.</p>
                        <p className="no-divider">3. If the #2 or #3 option is selected for Promotion in the Treaty, an Infantry Unit can promote to a Sergeant Unit.</p>
                        <p className="text-center no-divider">SERGEANT UNIT-SPECIFIC MOVEMENT RULES:</p>
                        <div className="divider md"></div>
                        <p>1. The Sergeant Unit, when making Move Elements, moves ALWAYS ONLY along ANY DIRECTION OF THAT DIAGONAL'S SQUARES in any direction.  An example of this for the Sergeant Unit of the h1 color of diagonal squares moving from square f1 to square g2 would be: <em>Sg2</em>.  Another example of this for the Sergeant Unit of the h8 color of diagonal squares moving from square f8 to square g7 would be: <em>Sg7</em>.  Note that in Deterrence, unlike chess, the Starting Player and the Responding Player both are given the option of determining the alternating colors of the Game Board's 64 squares.  If the Player who wishes to play as the Starting Player wishes to do so with the "black" or darker-colored Units, the Game Board needs to have that Player's lower-right-hand square h1 also be black, or darker-colored, to match the Units' color, and that Player still opens the game by completing the number one Complete Turn first.  Also, future versions of online Deterrence or future merchandise sold for "over-the-board" play may also have customized or customizable colors to reflect the "roles" the Players wish to "play as."  An example of this would be Republicans vs Democrats, where the Republicans start, square h1 is red, h8 is blue, and the Democrats respond.  Likewise, the same rule applies for Democrats vs. Republicans.  The game of chess does not these options nor this overall flexibility.</p>
                        <div className="divider"></div>
                        <p>2.  The Sergeant Unit CANNOT "fly over" any Unit(s), friend or foe, in its movement path, AND IT IS BLOCKED by all other Conventional Units as well as fixed Units of either type (Nuclear or SDI Defense) in its selected movement path.  It can only "pass through" or "see through to attack" Mobile Units of either type (Nuclear or SDI Defense) and, as in the case of other Conventional Units, it replaces other OPPOSING UNITS OF ALL TYPES only on that Player's choice of its final resting square during that Move Element (the opposing Units are removed from the Game Board, see Official Rules: Captures (x) and Destroys (z) Operator Codes, for more information).</p>
                        <p>3.  All Score Sheet Game Points and Cash Value Game Points must be accurately recorded and then added to their respective totals on the Score Sheet when applicable.</p>
                        <p>4.  Note that, like other Conventional Units, the Sergeant Unit CANNOT MOVE to a final resting square occupied by a FRIENDLY CONVENTIONAL Unit, as each square can hold only a MAXIMUM of ONE CONVENTIONAL UNIT at a time.</p>
                        <p>5.  If the Sergeant Unit lands on a square where either Mobile Nuclear or Mobile SDI Defense Unit(s) or both are already resting there, then only UP TO ONE of those Units can be moved by the General Unit during subsequent Move Elements.</p>
                        <p>6.  The Firing Range of the Mobile Intermediate Nuclear Unit is LIMITED TO the movement range of the Sergeant Unit if it currently is with the Sergeant Unit or if the Lieutenant Unit was the most recently accompanying Unit to the MIN.</p>
                        <p className="no-divider">7.  The Sergeant Unit can "Pair With" a Mobile Defense Unit on that Move Element's final resting square to receive protection.  That Player needs to use the Pairs With (/) Operator at the end of that Move Element to denote its new protection from opposing Nuclear Unit Firing (F) Move Elements, followed by the MSDI Unit Code.  An example of this is: <em>Sd8/MSDI</em>, and this ensures that those two Units now sharing square d8 after the Sergeant Unit's movement "pair" together.  This designation can be changed in subsequent Complete Turns if available.  However, if no such designation is made but the square falls under later attack during a Nuclear Unit Firing Move Element, the attacking Player DOES NOT have to ask the defending Player what Unit is paired with the SDI Defense Unit, but can then select a Unit (if more than one Unit is eligible to be removed) to destroy and remove from the Game Board (z).</p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  During a capture move, the Sergeant Unit's Cash Value of +3.0 Points get awarded as Score Sheet Game Points to the capturing Player.  In the event that an attacking Player destroys a Sergeant Unit in a Nuclear Unit Firing Move, that Firing Player DOES NOT receive the +3.0 Points on the Score Sheet, but the other player still deducts the +3.0 Cash Value Game Points on the Score Sheet.</p>
                </div>        
        </div>
    </div>
  )
};

export default S;