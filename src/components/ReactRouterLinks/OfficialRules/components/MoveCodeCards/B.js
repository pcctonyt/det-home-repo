import React from "react";

const B = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Buy SDI Defense Move Element Code</h1>
                <div className="divider"></div>
                <p>Unlike the other Order Element Codes Activate (C) and Arm (R), but like the Deploy (D) and Fire (F) Move Element Codes associated with Nuclear Units, the Buy SDI Defense Move Element Code changes the position by allowing SDI Defense Units of either type to be "bought" and placed on the Game Board.  These Units prevent the other friendly Units of other types they protect from being destroyed in a friendly (sacrifice) or opposing Nuclear Unit Firing Move.  This Code also describes which square the SDI Defense Unit is placed on.  This code is NOT USED for Nuclear Unit placement ( use Deploy (D) instead).  A grand total of 6 SDI Defense buys can be made throughout the course of an entire game inclusive of all types, regardless of previously captured or destroyed (opposing Conventional Unit attacks on Fixed SDI Defense Units) SDI Defense Units.  Therefore, no more than 6 SDI Defense Units altogether per Player can be on the Game Board at any one time.  A square CAN HOLD more than one Mobile SDI Defense Unit, but can have NO MORE THAN one Fixed SDI Defense Unit. </p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use with:</span></p>
                    <h1>(B)</h1> <span className="right lg-text">MSDI,FSDI</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">The Player wishing to place an SDI Defense Unit of either Fixed or Mobile type uses this Move Element Code on the Score Sheet during that Complete Turn.  The Buy Move Element Code ALWAYS COUNTS as ONE COMPLETE TURN, allowing no other Move Elements during that Turn.  Use Buy (B) at any point during the game WHEN AND ONLY WHEN the opposing player has AT LEAST ONE previously Activated Nuclear Unit of any type on the Game Board.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Buy Move Element Code Points Rule:</span><span className="right">The Buy Move Element is subject to application of Points depending upon the outcome of Treaty negotiations.  The Default Setting is -2.0 Points.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">Where to Deploy (Fixed SDI Defense Units):</span><span className="right">Any square WITHOUT OPPOSING UNIT(S) of any type can receive a Fixed SDI Defense Unit at any time, regardless of the presence of friendly Unit(s) of other types.  If a Player wishes to Buy a Fixed SDI Defense Unit to a square in the opposing Player's territory (only when a Border has been installed, see Treaty: Section Six), the Buying Player must still receive Points applicable to that Player's Score related to the Border Breach provisions outlined in the current Treaty (none if no Treaty in place).</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Where to Deploy (Mobile SDI Defense Units):</span><span className="right">Any square CURRENTLY OCCUPIED by AT LEAST ONE friendly Unit of any type can received a Mobile SDI Defense Unit.  The Player Buying said Unit must declare which Unit on that square the new Mobile SDI Defense Unit protects by using the "pairs with" (/) Operator Code on the Score Sheet, if more than one Unit occupies that square.  If only one Unit occupies that square, the Mobile SDI Defense Unit bought protects that Unit unitl other movement occurs later on.  The provisions related to Border Breach (BB), when applicable, also are separately applied to Buy Mobile SDI Defense movements.</span></p>
                        <div className="divider"></div>
                        <p className="bold"><span className="bold">There are no other Variable Rules or other Points Settings available for change for Buy Move Elements within the Treaty Negotiations Chart.</span></p>
                    <div className="divider lg"></div>
                        <p className="note">In the event that the players agree during Treaty negotiations that using Nuclear and SDI Defense Units is to be illegal (see Treaty: Section Two), any Order Element Codes and Move Element Codes related to Nuclear and SDI Defense Units are then therefore illegal, and then the Illegal Element Declared - Successfully (IED-S, itself the opposing Player's next Complete Turn) can be used by the opposing Player ONLY IMMEDIATELY AFTER the Complete Turn containing the "declared illegal" Element being challenged.  That Player then records any applicable Points Setting to his/her Score (Default: +5.0 Points) and that Player has recorded one Strike towards the opposing Player, and the first Player's entire Complete Turn must be retracted, and the initial Player then attempts a new Complete Turn.  A Player must earn three Strikes to automatically end the game and automatically win both Outcome Points.  See Deterrence Official Rules:  Illegal Element Declarations (both Successfully and Unsuccessfully), for more information</p>
                </div>        
        </div>
    </div>
  )
};

export default B;