import React from "react";

const MSDI = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence SDI Defense Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Mobile SDI Defense Unit</h1>
                <div className="divider"></div>
                <p>Up to 6 total of both types of SDI Units(s) each side per game</p>
                <p className="bold">Unit Type: <span className="right">SDI Defense Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(MSDI)</h1> <span className="right lg-text">2.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                <div className="divider"></div>
                    <p><span className="bold">Movement:</span><span className="bold right">Moves to allowable squares of last accompanying Unit (does not have to be the declared paired Unit, which is the one Unit it protects)</span></p>
                    <p className="indent no-divider"><strong className="bold">BUY RATE:</strong> <span className="right">-2.0 Points</span></p>
                <div className="divider"></div>
                    <p className="indent no-divider"><strong className="bold">PURPOSE: </strong><span className="right">Protects the declared paired unit at buying time from Nuclear Unit Firing Moves</span></p>
                <div className="divider"></div>
                    <p className="no-divider"><span className="bold">Can protect all other Unit types</span></p>
                <div className="divider md"></div>
                    <p className="no-divider"><span className="bold">Rules for all Mobile SDI Defense Units:</span></p>
                <div className="divider lg"></div>
                    <p>1. Mobile SDI Defense Units are only captured by opposing Conventional Units, they cannot be destroyed by them.</p>
                    <p>2. The opposing Unit landing on that square removes it from the Game Board, along with any other Units there, and scores that Unit's 2.0 Cash Value Points to his/her Score Sheet Game Points Total.</p>
                    <p>3. The player losing the MSDI to capture deducts 2.0 Cash Value Points from his/her Cash Value Points Total on the Score Sheet.</p>
                    <p>4. The square occupied by an MSDI DOES NOT become a Fallout Square in a Nuclear Unit Firing Move, however all other Units except the MSDI and its declared paired Unit it protects ARE DESTROYED and removed from the Game Board.</p>
                    <p className="no-divider"><span className="bold">Buying Rules for All SDI Defense Units</span></p>
                <div className="divider lg"></div>
                    <p>1. To Buy (B) any SDI Defense Unit, the buying player applies that Points Setting (Default: -2.0) to that Player's Score, and then places it on the chosen square, and declares which Unit already on that square it will protect for the remainder of the game by using the (/) operator on the Score Sheet with the paired Unit's Code.</p>
                    <p>2. Mobile SDI Defense Units ONLY PROTECT that one declared paired Unit at buying time.</p>
                    <p>3. A Mobile SDI Defense Unit can only be bought when at least ONE opposing Nuclear Unit is on the Game Board and has been previously Activated.</p>
                    <p>4. A total of SIX (6) SDI Defense buys can be made throughout the game, but they do not have to be made.</p>
                    <p>5. The Buy Rate Points Setting can be changed during Treaty Negotiations, as all other Points Settings can be.</p>
                    <p>6. A Mobile SDI Defense Unit can protect only ONE declared paired Unit throughout the game, and that protected Unit cannot be changed.</p>
                    <p>7. Mobile SDI Defense Units can be captured by opposing Conventional Units in the same manner as Mobile Nuclear Units.</p>
                </div>
                <div className="divider md"></div>
                    <p className="note">NOTE:  In the event of a Treaty where the use of Nuclear and SDI Units has been turned off, all Order and Move Element Codes related to the Mobile SDI Defense Unit become illegal (IED-S).</p>
        </div>
    </div>
  )
}

export default MSDI;