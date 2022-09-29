import React from "react";

const E = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Conventional Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Envoy Unit</h1>
                <div className="divider"></div>
                <p>1 each side at a time selected during the Game (use new code (E) to replace the original Unit Code)</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">Conventional Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(E)</h1> <span className="right lg-text">+1.0 added</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Movement:</span><span className="bold right">Movement does not change.(see Official Rules)</span></p>
                        <p className="no-divider"><span className="bold">Pairs With the 2 Intermediate Nuclear Unit Types (Fixed / Mobile)</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">Rules for the Envoy Unit</span></p>
                    <div className="divider lg"></div>
                        <p>1. The Envoy Unit can be any one at one time of any of the other Units besides the President or Infantry Units.</p>
                        <p>2. Similar to the Buy SDI Defense (B) Move Element Code, the FIRST Envoy MAY BE DECLARED (E=) ANYTIME and then ADDITIONAL TIMES ONLY WHEN that Player HAS AT LEAST ONE ACTIVATED Nuclear Unit on the Game Board. </p>
                        <p>3. There can be only one active Envoy per player per game.</p>
                        <p className="no-divider">4. The Treaty governs the number of times a new Envoy can be declared as a replacement to a previously captured or detroyed Envoy.  <em className="bold">Default Setting:</em> 1 time</p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  During a capture move, the Envoy Unit's Total Cash Value Points get awarded as Score Sheet Game Points to the capturing Player.  In the event that an attacking Player destroys an Envoy Unit in a Nuclear Unit Firing Move, that Firing Player DOES NOT receive the total Points on the Score Sheet, but the other player still deducts the total Cash Value Game Points on the Score Sheet.</p>
                </div>        
        </div>
    </div>
  )
};

export default E;