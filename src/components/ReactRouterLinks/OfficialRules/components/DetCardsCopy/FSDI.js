import React from "react";

const FSDI = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence SDI Defense Units</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Fixed SDI Defense Unit</h1>
                <div className="divider"></div>
                <p>Up to 6 total of both types of SDI Defense Units(s) each side per game, the game starts without them</p>
                <div className="divider"></div>
                <p className="bold">Unit Type: <span className="right">SDI Defense Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(FSDI)</h1> <span className="right lg-text">0.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                <div className="divider"></div>
                    <p><span className="bold">Movement:</span><span className="bold right">Cannot move</span></p>
                    <p className="indent no-divider"><strong className="bold">PURPOSE: </strong><span className="right">Protects ALL UNITS on the square it rests on from Nuclear Unit Firing Moves</span></p>
                <div className="divider"></div>
                    <p className="no-divider"><span className="bold">Can protect all other Unit types</span></p>
                <div className="divider md"></div>
                    <p className="indent no-divider"><strong className="bold">BUY RATE (Score Sheet Game Points deducted at Buy (B) time):</strong> <span className="right">-2.0 Points</span></p>
                <div className="divider"></div>
                <div className="divider lg"></div>
                    <p className="no-divider"><span className="bold">Rules for all Fixed SDI Defense Units:</span></p>
                <div className="divider lg"></div>
                    <p>1. Fixed SDI Defense Units are only destroyed (z) by opposing Conventional Units, they cannot be captured by them.</p>
                    <p>2. The opposing Unit landing on that square removes it from the Game Board, along with any other Units there, and gets no Cash Value Points to add to the Score Sheet Game Points Total.</p>
                    <p>3. The player losing the FSDI to destroying loses no Cash Value Points from his/her Cash Value Points Total on the Score Sheet.</p>
                    <p>4. The square occupied by an FSDI DOES NOT become a Fallout Square in a Nuclear Unit Firing Move, and all other Units resting on ONLY THAT SQUARE are protected.</p>
                <div className="divider lg"></div>
                    <p className="no-divider"><span className="bold">Buying Rules for All SDI Defense Units</span></p>
                <div className="divider lg"></div>
                    <p>1. To Buy (B) any SDI Defense Unit, the buying player applies the Buy Rate (see above) Points Setting (Default: -2.0) to his/her Score, and then places it on the chosen square, and the Unit protects all other Units on that square, but cannot be moved from that square, for the duration of the game.</p>
                    <p>2. A Fixed SDI Defense Unit can only be bought when at least ONE opposing Nuclear Unit is on the Game Board and has been previously Activated.</p>
                    <p>3. A total of SIX (6) SDI Defense buys can be made throughout the game, but they do not have to be made.</p>
                    <p className="no-divider">4. Fixed SDI Defense Units can be destroyed by opposing Conventional Units in the same manner as Fixed Nuclear Units.</p>
                </div>
                <div className="divider lg"></div>
                    <p className="note">NOTE:  In the event of a Treaty where the use of Nuclear and SDI Units has been turned off, all Order and Move Element Codes related to the Fixed SDI Defense Unit become illegal (IED-S).</p>
        </div>
    </div>
  )
}

export default FSDI;