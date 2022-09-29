import React from "react";

const IED_S = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Order Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Illegal Element Declared - Successfully Order Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows one Player to challenge any one, two, or three Elements of either Order or Move Type in the IMMEDIATELY PRECEDING Complete Turn as illegal.  If AT LEAST ONE of the Elements listed in the opposing Player's just completed Turn is found to be illegal when the Rules and/or Treaty is(are) checked, the entire Complete Turn is illegal, and must be retracted, and then that player attempts another Complete Turn after the other Player's IMD-S turn.  This Order Element ALWAYS COUNTS as one Complete Turn.  The Player using IMD-S then applies the Points Setting amount to his/her Score Sheet Game Points Total at that time.  The Default Setting in the Treaty is +5.0 Points.  NOTE:  Illegal here refers to any of both Fixed Rules (which do not change) or Variable Rules (which can be changed during Treaty negotiations), and in the case of the "Cribbage rule (see Official Rules:  All General Game Rules, for more information)" inaccurate amounts of Points applied (where applicable), illegal use of other Move Element, Unit, and/or other Order Element Codes, and Out-of-Order Element listing errors.  These errors occur when the order of the Elements listed on the Score Sheet during that Complete Turn does not match what the position in the game at that point allows for.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use When:</span></p>
                    <h1>(IMD-S)</h1> <span className="right lg-text">Challenging legality successfully</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When one Player successfully records three total Illegal Element Declared - Successfully (IED-S) Order Elements during the game, that Player has then "struck out" the opposing Player, the game ends at that point, and the Player issuing the strikeout receives both Outcome Points for that game automatically (2.0-0.0 if the Starting Player "strikes out" the Responding Player, OR:  0.0-2.0 if the Responding Player "strikes out" the Starting Player) as is the case in a baseball game.</span></p>
                        <p><span className="bold">When to use:</span><span className="right">When wishing to declare any JUST COMPLETED portion of the opposing Player's Complete Turn illegal, use the Order Element Code portion (IED-) on the Score Sheet, and then place the (S) after the hyphen when any portion of either type of Rules or the Treaty Negotiations Chart prove that any part of that Complete Turn is indeed illegal.  Just as in NFL football, the challenging of a prior Turn must occur BEFORE any other Complete Turns by either Player occur.  Any Treaty in effect still remains in effect regardless of the Illegal Element Declared - Complete Turn outcome.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">The gameplay then proceeds as usual after that IED-S Complete Turn.</span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  Out-of-Order Element listing errors usually occur during Complete Turns using Hand-Off Move Elements, Arming Order Elements, or Protect-the-President Move Elements.  For example, if a previously Activated Nuclear Unit is not in that Envoy's legal movement RANGE until AFTER the Envoy moves to its new resting square, place the Arming Move Element AFTER the Envoy's Move Element indicating movement.  The same advice applies to the listing order of Hand Off Move Elements and Protect the President Move Elements that could affect the legality of Arming Order Elements occurring during that Complete Turn.  Be CAREFUL!</p>
                </div>        
        </div>
    </div>
  )
};

export default IED_S;