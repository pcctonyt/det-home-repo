import React from "react";

const ProtectPresShort = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Protect the President - Short Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows for either Player to protect that Player's President Unit ONLY ONE TIME throughout the course of the game.  The Protect the President - Short Move Element Code (O-O) requires the use of that Player's h-file Lieutenant Unit and the President Unit BOTH MOVING during ONE MOVE ELEMENT (the code above) during ONE COMPLETE TURN.  The result is a change to the position whereby the President Unit rests on square g1 for the Starting Player, g8 for the Responding Player.  Also changed is the Lieutenant Unit for each Player starting on the h-file resting on square f1 for the Starting Player and f8 for the Responding Player, all in the one Move Element, within only one Complete Turn (there are other Move or Order Elements which may occur, but do not have to, alongside this Move Element, within the selected Complete Turn).  The conditions for when this Move Element Code may be used are in the below section.  There are many conditions to consider before attempting this Move Element.  In the game of chess, this "move" is referred to as "castling queenside."</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Used with:</span></p>
                    <h1>(O-O)</h1> <span className="right lg-text">P, L (when below conditions met)</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Refer to the explanations below for ALL CONDITIONS TO BE MET for the Protect the President - Short Move Elements (O-O) to be used legally.</span></p>
                        <p><span className="bold">First Condition:</span><span className="bold"></span>The President Unit MUST NOT HAVE been moved previously.</p>
                        <p><span className="bold">Second Condition:</span><span className="bold"></span>The Lieutenant Unit used during the Protection Move Element MUST NOT HAVE been moved previously.</p>
                        <p><span className="bold">Third Condition:</span><span className="bold"></span>The President Unit MUST NOT CURRENTLY be threatened with ANY opposing Conventional Unit(s) capture on the current Complete Turn (check (+)).</p>
                        <p><span className="bold">Fourth Condition:</span><span className="bold"></span>The President Unit MUST NOT CURRENTLY be PASSING THROUGH ANY opposing Conventional Unit(s) capture threats (checks (+)) on the current Complete Turn within and inclusive of squares e1, f1, or g1 (Starting Player) or e8, f8, or g8 (Responding Player).</p>
                        <p><span className="bold">Fifth Condition:</span><span className="bold"></span>The President Unit MUST NOT END UP BEING threatened with ANY opposing Conventional Unit(s) capture on square g1 (Starting Player) or square g8 (Responding Player) if the Protection Move Element were to occur (check (+)).</p>
                        <p><span className="bold">General Rule:</span><span className="bold"></span>The non-SDI Defense safeguarded President Unit being threatened with destruction by an opposing Armed (R) Nuclear Unit of any type DOES NOT make the Protect the President - Short Move Element illegal</p>
                        <p><span className="bold">Only Variable Rule within the Treaty (for all Protection Move Elements):</span><span className="bold"></span>Shall the Protect the President Move Elements be legal?:  Default Setting: YES</p>
                </div>        
        </div>
    </div>
  )
};

export default ProtectPresShort;