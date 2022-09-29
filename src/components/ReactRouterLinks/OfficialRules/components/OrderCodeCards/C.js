import React from "react";

const C = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Order Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Activate Order Element Code</h1>
                <div className="divider"></div>
                <p>Unlike the other Move Element Codes Deploy (D) and Fire (F), but like the Arm (R) Move Element Code associated with Nuclear Units, the Acivate Order Element Code DOES NOT change the position on the Game Board.  However, it allows previously deployed Nuclear Units to be armed on a subesquent Complete Turn.  This Code also describes which square the Nuclear Unit currently rests on.  This code has a Turn Wait Time associated with it which can be changed during Treaty negotiations.  The Default Setting is 5 Complete Turns, non-inclusive of both the Deploy and Activate Turns.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Units Being Activated:</span></p>
                    <h1>(C)</h1> <span className="right lg-text">MTN, MIN, FTN, FIN, SN</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">The Player wishing to prepare a previously deployed Nuclear Unit of either Fixed or Mobile type for later Arming (R) uses this Order Element Code on the Score Sheet during that Complete Turn.  The Activate Order Element Code ALWAYS COUNTS as ONE COMPLETE TURN, allowing no other Elements during that Turn.  Use Activate (C) at any time AFTER the Turn Wait Time has expired.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Activate Points Rule:</span><span className="right">The Activate Order Element is subject to application of Points depending upon the outcome of Treaty negotiations.  The Default Setting is 0.0 Points.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">When to Activate:</span><span className="right">Only Nuclear Units previously deployed and AFTER, non-inclusive, the Turn Wait Time has expired, can they then be activated.</span></p>
                        <div className="divider"></div>
                        <p className="bold"><span className="bold">There are no Variable Rules or Points Settings available for change for Activate Order Elements within the Treaty Negotiations Chart</span></p>
                    <div className="divider lg"></div>
                        <p className="note">In the event that the players agree during Treaty negotiations that using Nuclear and SDI Defense Units is to be illegal (see Treaty: Section Two), any Order Element Codes and Move Element Codes related to Nuclear/SDI Defense Units are then therefore illegal, and then the Illegal Move Declared - Successfully (IMD-S, itself the opposing Player's next Complete Turn) can be used by the opposing Player ONLY IMMEDIATELY AFTER the Complete Turn containing the "declared illegal" element being challenged.  That Player then records any applicable Points Setting to his/her Score (Default: +5.0 Points) and that Player has recorded one Strike towards the opposing Player, and the first Player's entire Complete Turn must be retracted, and the initial Player then attempts a new Complete Turn.  A Player must earn three Strikes to automatically end the game and automatically win both Outcome Points.  See Deterrence Official Rules:  Illegal Move Declarations, for more information</p>
                </div>        
        </div>
    </div>
  )
};

export default C;