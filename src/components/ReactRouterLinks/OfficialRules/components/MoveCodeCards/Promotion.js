import React from "react";

const Promotion = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Promotion Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows  </p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use with:</span></p>
                    <h1>((square code)=)</h1> <span className="right lg-text">Infantry Units</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When a brave Infantry Unit reaches the back starting rank of the opposing Player (rank 8 for Starting and rank 1 for Responding), the Infantry is removed from the Game Board.  Depending upon Treaty selection, promotion conditions then apply.  The Default Setting is:  Promotion to any type of Conventional Unit besides the President Unit.</span></p>
                        <p><span className="bold">How to record on the Score Sheet.</span><span className="right">Use the (=) Operator Code with the final square code to the left to indicate Promotion, and then the new Unit(s) Code(s) to the right of the equals sign.  The promoting Player must apply the New Cash Value Game Points after deducting the previous Unit(s) Cash Value Game Points from that Cash Value Game Points Total during the Promotion Move Element.</span></p>
                        <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold"></span></p>
                        <p className=" text-center no-divider">Three Possible Treaty Selections for Promotion (#3 is the DEFAULT SETTING):</p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">TREATY SELECTION ONE: No promotion.  The Infantry Unit reaching the opposite end of the Game Board allows that Player to apply +2.0 Score Sheet Game Points for each Infantry reaching the final rank.  If the Infantry also is carrying a Mobile Tactical Nuclear Unit, that Unit allows that Player to record +8.0 Score Sheet Game Points to the total (the rule is 2 times the Cash Value Game Points for each of these two Units).  Both Units are then removed from the Game Board, with NO UNITS AT ALL to replace them.</span></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">TREATY SELECTION TWO: The Infantry Unit may only promote to another previously captured Conventional Unit other than the President Unit.  Use the chosen Conventional Unit's Code to the right of the (=) on the Score Sheet.  This Setting DOES NOT ALLOW promotion eligibility for previously destroyed (z) Unit(s) in previous Nuclear Unit Firing Move Elements.  This Setting also applies to the Mobile Tactical Nuclear Unit only being able to promote to a Mobile Intermediate Nuclear Unit if the promoting Player had a previous Mobile Intermediate Nuclear Unit captured (both "not destroyed" and also "not Deployed at all" makes the Nuclear Unit portion of the Promotion ineligible).  If the Nuclear Unit cannot be promoted, it still is removed from the Game Board, as is the Infantry being replaced with the new Promoted Unit, and the Rule above of +8.0 Points ( 2 times the Tactical Unit's Cash Value ) being applied to the Score Sheet Game Points Total still occurs here.  This setting is like a "free the captured Players" rule in many other sports and games.</span></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">TREATY SELECTION THREE: (Default Setting). Promotion to all other Conventional Units (even duplicates of the same Unit(s)) besides the President.  The Infantry Unit reaching the opposite end of the Game Board allows that Player to replace that Infantry with a new Conventional Unit other than the President, even if one or more of the chosen replacement Unit (Promoted Unit)already is/are on the Game Board.  Any carried Mobile Tactical Nuclear Unit reaching the end of the board ALWAYS PROMOTES to a Mobile Intermediate Nuclear Unit.  Use the new Unit Code(s) to the right of the (=) on the Score Sheet.  This setting resembles the Rule in a game of chess. </span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  The Promotion Move Element is always ITSELF a Complete Turn.  Score Sheet Complete Turn entry example: <em>e8 = G</em>  An Infantry Unit from the Starting Player's forces, moves to square e8 and is replaced by a new General, which gets placed on square e8 all of this occurring during one Complete Turn. ANOTHER EXAMPLE (if Selection One is chosen during Treaty negotiations): <em>e8 = +2.0</em>.  The above two examples with a carried Mobile Tactical Nuclear reaching square e8 as well would be 1.<em>e8/MTN = G/MIN</em> and 2. <em>e8/MTN = +10.0</em>.  Also, if Selection Two is chosen and the Nuclear Unit cannot be Promoted but the Infantry can (assuming that Player had an earlier-captured General), it would look like this: <em>e8/MTN = G/+8.0</em></p>
                </div>        
        </div>
    </div>
  )
};

export default Promotion;