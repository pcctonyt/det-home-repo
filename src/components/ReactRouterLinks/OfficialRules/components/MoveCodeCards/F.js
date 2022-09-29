import React from "react";

const F = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Fire Move Element Code</h1>
                <div className="divider"></div>
                <p>Unlike the other Order Element Codes Activate (C) and Arm (R), but like the Deploy (D) Move Element Code associated with Nuclear Units, the Fire Movement Code changes the position by allowing previously armed Nuclear Units to remove opposing Units from the Game Board, and absent the presence of SDI Defense Unit(s), create Fallout Squares, which then cannot be used.  This Code also describes which square(s) the Nuclear Unit targets (destroying (z) those without SDI Defense Units resting on them.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Codes:<span className="right">Units Being Fired:</span></p>
                    <h1>(F),(z)</h1> <span className="right lg-text">MTN, MIN, FTN, FIN, SN</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">The Player wishing to destroy opposing Unit(s) NOT PROTECTED by SDI Defense Units and square(s) WITHOUT ANY SDI Defense Units resting on them can do so by Firing a previously armed Nuclear Unit of either type.  The Fire Code ALWAYS COUNTS as ONE COMPLETE TURN, allowing no other Move Elements during that Turn.  Use Fire (F) on any Complete Turn after the Nuclear Unit becomes armed.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Fire Points Rule:</span><span className="right">The Fire Move Element is subject to application of Points depending upon the outcome of Treaty negotiations.  The Default Setting is 0.0 Points.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">Destroying the President Points Rule:</span><span className="right">The Fire Move Element is subject to additional application of Points if the fired Nuclear Unit destroys the opposing President (not protected by an SDI Defense Unit).  This additional Points Setting can be changed during Treaty negotiations.  The Default Setting is -10.0 Points.  If the opposing President is destroyed, the game ends as if that President had been either captured (via Treaty change) or checkmated (cannot escape an opposing Conventional Unit capture on the following Complete Turn while being threatened with capture on the current Complete Turn).</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">Which square to target - Tactical Units:</span><span className="right">A fired Tactical Nuclear Unit targets either, but not both, adjacent-diagonal forward square from its current resting square, excepting the presence of any SDI Defense Unit(s) on that square.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Which squares to target - Intermediate Units:</span><span className="right">A fired Intermediate Nuclear Unit targets a span of two adjacent squares not more than two squares away from (non-inclusive) that Unit's current resting square, ONLY WITHIN the current or previous accompanying friendly Conventional Unit's movement RANGE, excepting the presence of any SDI Defense Unit(s) within those 2 squares.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Which squares to target - Strategic Unit:</span><span className="right">The YIELD of the Strategic Nuclear Unit can target either a 2 x 2, 2 x 3, or 3 x 3 <em>County Be Gone!</em> block of squares (Default Setting on Treaty: 2 x 2) anywhere on the Game Board, excepting the presence of any SDI Defense Unit(s) within that block of squares.  Its RANGE is unlimited, therefore, it is always Fixed.</span></p>
                        <div className="divider"></div>
                        <p className="bold"><span className="bold">The Score Sheet Complete Turn example is:  <em>F-SNza7/b8</em> A previously armed Strategic Nuclear Unit is Fired, destroying the squares and all Units (friendly or opposing) contained on squares a7, a8, b7, b8, excepting the presence of any SDI Defense Unit(s) in that block.  See Official Rules: Destroys Operator Code, for more information.</span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  In the event that the players agree during Treaty negotiations that using Nuclear and SDI Defense Units is to be illegal (see Treaty: Section Two), any Order Codes and Movement Codes related to Nuclear/SDI Defense Units are then therefore illegal, and then the Illegal Element Declared - Successfully (IED-S, itself the opposing Player's next Complete Turn) can be used by the opposing Player ONLY IMMEDIATELY AFTER the Complete Turn containing the "declared illegal" element being challenged.  That Player then records any applicable Points Setting to his/her Score (Default: +5.0 Points) and that Player has recorded one Strike towards the opposing Player, and the first Player's entire Complete Turn must be retracted, and the initial Player then attempts a new Complete Turn.  This Rule also applies if ANY PORTION of a Nuclear Unit Firing Move is deemed illegal.  A Player must earn three Strikes to automatically end the game and automatically win both Outcome Points.  See Deterrence Official Rules:  Illegal 
                        Element Declarations (both Successful and Unsuccessful), for more information</p>
                </div>        
        </div>
    </div>
  )
};

export default F;