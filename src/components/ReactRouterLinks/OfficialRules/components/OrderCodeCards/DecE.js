import React from "react";

const DecE = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Order Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Declare Envoy Order Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows for any type of Conventional Unit other than the President Unit or the Infantry Units to be declared as that Player's one allowed (no more than 1) current Envoy Unit (E), giving that Unit the power to Arm (R) previously Activated friendly Nuclear Units at a distance.  Since the President Unit (P) can only move one square total at a time, the President can only arm Nuclear Units on adjacent squares to its present resting square.  The President Unit DOES NOT need to be declared an Envoy, since that Unit already has the power to arm.  With the EXCEPTION of Complete Turns with Protect the President Move Elements (O-O or O-O-O), declaring an Envoy ALWAYS COUNTS as one Complete Turn.  The maximum number of times (inclusive) during a game each Player may declare an Envoy to replace a previously lost (captured (x) or destroyed (z)) Envoy can be changed during Treaty negotiations.  The Default Setting is: 1 TIME.  The Conventional Unit selected has to already be present on the Game Board to be declared as an Envoy.  No new Conventional Unit can be placed on the Game Board.  The Envoy's arming RANGE is the same as its movement RANGE (arming moves have to be legally able to be made as actual movement).  The new Score Sheet Unit Code of (E) for the Envoy replaces the prior Unit Code and is used for the duration of the game as long as that Unit remains on the Game Board. </p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Units Being Declared:</span></p>
                    <h1>(E=)</h1> <span className="right lg-text">G,L,S, or A</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">The Envoy still retains all of its prior Fixed Rules movement RANGE, but is now referred to as the Envoy and the Score Sheet Unit Code of (E) is used in place of the prior code for future Complete Turns.</span></p>
                        <p><span className="bold">When to use:</span><span className="right">Use the (E=) Order Code when wishing to designate a one of the above qualifying Conventional Units as the Envoy.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">The Square Code of the selected Envoy's present resting square must be placed after the equals sign on the Score Sheet for that Move Element listing.</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">The new Envoy increases that Unit's prior Cash Value (see Official Rules: Score Sheet Rules - Cash Value Game Points for more information) by +1.0 Point.  This Cash Value gets added on the Score Sheet to that Player's Cash Value Game Points Total at that time, and this remains so throughout the course of the game.</span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  This Order Element can OCCUR ANYTIME on the very first declaration, but then for all following declarations (if allowed by Treaty), that declaring Player MUST HAVE AT LEAST ONE ACTIVATED NUCLEAR UNIT on the Game Board.  The Declare Envoy Order Element is only available to be NOT ITSELF a Complete Turn during Complete Turns which include Protect the President Move Elements, so long as that Player declares the Lieutenant used in that Protection move as the Envoy during that Complete Turn.  Score Sheet Complete Turn entry example: <em>E=d1</em>  A General (or other qualifying Unit, for that matter) resting on square d1 is now that Player's new Envoy, and is referred to as "the Envoy" henceforth. ANOTHER EXAMPLE (two ways to record the Complete Turn): 1. O-O,<em>E=f1</em> or 2. <em>E=h1</em>,O-O  The Starting Player Protects his/her President Short Side while declaring that Lieutenant to be that Player's new Envoy, and that Unit is referred to as "the Envoy" henceforth.  Both Score Sheet Complete Turn entries are legal in this case.</p>
                </div>        
        </div>
    </div>
  )
};

export default DecE;