import React from "react";

const Captures = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Operator Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Capture Operator Code</h1>
                <div className="divider"></div>
                <p>This Code allows for any type of Conventional Unit to remove another opposing Conventional Unit of any type (including the President if the Treaty allows), and Mobile Units of either type (Nuclear or SDI Defense) from the Game Board during the completion of a movement-related Move Element.  In the case of wishing to attack Fixed Nuclear or Fixed SDI Defense Units, use the "destroys" (z) operator instead.  Capture Move Elements always result in the capturing Player being able to record the amount of the captured Unit(s) Cash Value Game Points to that capturing Player's Score Sheet Game Points Total.  The Player suffering the capture(s) also deducts the captured Unit(s) Cash Value Game Points from that Player's Cash Value Game Points Total at that time.  All captured Units are removed from the Game Board.  The only way a captured Unit might return to the game is if one or more of that Player's Infantry Units reaches the opposite last rank of that Player's last rank (rank 8 for the Starting Player, rank 1 for the Responding Player) on the Game Board (see Official Rules and/or Treaty: Infantry Promotion).  If selection #2 on the Treaty: Infantry Promotion is selected, the Infantry Unit(s) can only promote to only previously captured Unit(s) besides the President or the other Infantry Units. </p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Operator Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Operator Code:<span className="right">Use With:</span></p>
                    <h1>(x)</h1> <span className="right lg-text">G,L,S,A,Infantry vs Moveable Units</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Longhand Descriptive Score Sheet Syntax (instead of just using only one (x)):</p>
                    <div className="divider"></div>
                        <p><span className="bold">If a Player wishes to specifically indicate which type(s) of Units eligible to be captured are captured during that Complete Turn, the longhand syntax on the Score Sheet is as follows: first (x) slot: Conventional Unit captured, second (x) slot: Mobile Nuclear Unit captured, and third (x) slot: Mobile SDI Defense Unit captured.  The hyphen used here indicates no type of that Unit for that slot got captured.  This syntax is NOT REQUIRED, but can make it easier for others reviewing the Score Sheet.  The Players choose how to record these Complete Turns on their own, and as long as all applicable Points are totalled correctly, the preference here does not affect Turn legality.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">EXAMPLES OF ABOVE:</span></p>
                        <p><em>Gx--d8</em>.  A General captures only an opposing Conventional Unit on square d8.</p>
                        <p><em>Gxx-d8</em>.  A General captures both a Conventional Unit (first x, first slot) and a Mobile Nuclear Unit (second x, second slot) on square d8.</p>  
                        <p><em>Gxxxd8</em>.  A General captures a Conventional, Mobile Nuclear, and a Mobile SDI Defense Unit (third x, third slot) on square d8.</p> 
                        <p><em>G-x-d8</em>.  A General captures only an opposing Mobile Nuclear Unit (first x, second slot) on square d8.</p>
                        <p><em>G--xd8</em>.  A General captures only an opposing Mobile SDI Defense Unit(first x, third slot) on square d8.</p>
                        <p><em>G-xxd8</em>.  A General captures both a Mobile Nuclear Unit (first x, second slot) and a Mobile SDI Defense Unit (second x, third slot), but no Conventional Unit, on square d8.</p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  The Shorthand syntax for Infantry Units capturing only another Conventional Unit WITHOUT OTHER UNITS is made (without writing the (x) operator) as follows: (letter of the file the Infantry starts on)(square code the Infantry captures).  Example: <em>ed5</em> (replaces exd5)  Also note that the "destroys" (z) operator can be used in this manner as well.</p>
                </div>        
        </div>
    </div>
  )
};

export default Captures;