import React from "react";

const R = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Order Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Arm Order Element Code</h1>
                <div className="divider"></div>
                <p>Unlike the other Movement Codes Deploy (D) and Fire (F), but like the Activate (C) Order Element Code associated with Nuclear Units, the Arm Order Element Code (R) DOES NOT change the position on the Game Board.  However, it allows previously activated Nuclear Units to be fired on a subesquent Complete Turn.  This Code also describes which square the Nuclear Unit currently rests on.  This code can be a Complete Turn if the Envoy Unit arms a Nuclear Unit at a distance, otherwise IT IS NOT a Complete Turn.  The Arm Order Element can also occur during the Protect the President Turn, as one of up to three allowable Elements within those Turns.  The order in which this Order Element is recorded on the Score Sheet depends upon when the President Unit arming is adjacent to the previously activated Nuclear Unit.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Units Being Armed:</span></p>
                    <h1>(R)</h1> <span className="right lg-text">MTN, MIN, FTN, FIN, SN</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">The Player wishing to prepare a previously activated Nuclear Unit of either Fixed or Mobile type for later Firing (F) uses this Order Element Code on the Score Sheet during that Complete Turn.  The Arm Order Element Code DOES NOT ALWAYS COUNT as ONE COMPLETE TURN, as this depends upon the selection for distance in the Treaty.  Use Arm (R) at any time AFTER the Nuclear Unit selected is activated.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Arm Points Rule:</span><span className="right">The Arm Order Element is subject to application of Points depending upon the outcome of Treaty negotiations.  The Default Setting is 0.0 Points.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">Arming Adjacently:</span><span className="right">Only Nuclear Units previously activated can be armed by either the President or the previously declared Envoy (E).  Arming adjacently DOES NOT COUNT as ONE COMPLETE TURN by itself (means that the President or Envoy can still make a move either before or after arming, but not both), but the Armed Nuclear Unit CANNOT be fired on that same Complete Turn.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Arming at a Distance:</span><span className="right">Only Nuclear Units previously activated can be armed at a distance only by the declared Envoy (E), since the President can only move one square at a time.  This can occur only within the chosen Envoy's movement range.  Arming at a distance CAN EITHER count as ONE COMPLETE TURN by itself or not (dependent upon Treaty negotiations, the Default setting is COMPLETE TURN), but the Armed Nuclear Unit CANNOT be fired on that same Complete Turn.  Arming at a distance is always legal. </span></p>
                        <p>Even if no Nuclear Units are present or able to be armed, the Envoy still adds +1.0 Cash Value Game Points to that selected Unit's value.</p>
                        <p className="bold"><span className="bold">Variable Rules:</span></p>
                        <p className="bold"><span className="bold">Variable Rules for Arm Order Elements (can be changed during Treaty Negotiations, see Deterrence Official Rules: Treaty, for more information)</span><span>Selection Option:</span><span className="right bold">Default Setting:</span></p>
                        <p className="indent no-divider">Arming at a distance counts as 1 Complete Turn?: <span className="bold right">YES</span> </p>
                    <div className="divider lg"></div>
                        <p className="note">In the event that the players agree during Treaty negotiations that using Nuclear and SDI Defense Units is to be illegal (see Treaty: Section Two), any Order Element Codes and Move Element Codes related to Nuclear/SDI Defense Units are then therefore illegal, and then the Illegal Element Declared - Successfully (IED-S, itself the opposing Player's next Complete Turn) can be used by the opposing Player ONLY IMMEDIATELY AFTER the Complete Turn containing the "declared illegal" Element being challenged.  That Player then records any applicable Points Setting to his/her Score (Default: +5.0 Points) and that Player has recorded one Strike towards the opposing Player, and the first Player's entire Complete Turn must be retracted, and the initial Player then attempts a new Complete Turn.  A Player must earn three Strikes to automatically end the game and automatically win both Outcome Points.  See Deterrence Official Rules:  Illegal Element Declarations, (both Successfully (IED-S) and Unsuccessfully (IED-U) for more information.</p>
                </div>        
        </div>
    </div>
  )
};

export default R;