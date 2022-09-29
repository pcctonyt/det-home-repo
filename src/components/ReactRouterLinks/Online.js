
import React, { useState } from "react";
import Popup from "../Popup/Popup.js";
import OfficialRules from "./OfficialRules/Rules";
import "./Online.css";

const Online = () => {
  const [ fireRules, setFireRules ] = useState(false);

  return (
    <div>
        <h1>This is the Online Page</h1>
        <h2>This is the First Tier: The One that is free.</h2>
        <h3>They will have access to the Learn More! Page.</h3>
        
        <span>
            <button id="AllOfficialRules" className="rules-codes-btn" onClick={() => setFireRules(true)}>Deterrence Official Rules by Section</button>
            <Popup trigger={ fireRules } setTrigger={ setFireRules }>
                <OfficialRules />
            </Popup>
          </span>
      
        <h3>This will allow them to play the game in person "over-the-board" or online via meeting platforms.</h3>
        <h4>Each Player will need a 64-square playing surface with alternating colors, a chess-piece set, and checkers set.</h4>
        <h4>The Players can order a "hard-copy" of the Official Rules.</h4>
        <h4>The Players here will be able to order a "hard-copy" packet of Fallout Square symbols, Score Sheets and Treaties</h4>
            <ul>Examples of meeting platforms:
                <li>Google Meet</li>
                <li>Webex by Cisco</li>
                <li>Zoom</li>
                <li>Microsoft Teams</li>
            </ul>
        <h3>They won't be able to store their online Score Sheets and treaties on the server, though, but they'll be able to download them and/or print them out.</h3>
    </div>
  )
}

export default Online;