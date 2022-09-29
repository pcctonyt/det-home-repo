import React, { useState } from "react";
import Popup from "../Popup/Popup.js";
import "./UnitCodes.css";
import FSDI from "../DetCardsCopy/FSDI";
import MSDI from "../DetCardsCopy/MSDI";
import "./DetCards.css";

const SDIUnitCodes = () => {

  const [ fsdiCode, setFsdiCode ]= useState(false);
  const [ msdiCode, setMsdiCode ]= useState(false);
  
  return (
    <div className="sdi-codes-btn-wrapper">
        <h2 className="sdi-codes-h1">SDI Defense Unit Codes:  Click a button below for all of the information on that Unit!</h2>
        <span>
            <button id="FixedSDIDefenseCode" className="sdi-codes-btn" onClick={() => setFsdiCode(true)}>Fixed SDI Defense Unit: (FSDI)</button>
            <Popup trigger={ fsdiCode } setTrigger={ setFsdiCode }>
                <FSDI />
            </Popup>
          </span>
          
          <span>
            <button id="MobileSDIDefenseUnit" className="sdi-codes-btn" onClick={() => setMsdiCode(true)}>Mobile SDI Defense Unit: (MSDI)</button>
            <Popup trigger={ msdiCode } setTrigger={ setMsdiCode }>
                <MSDI />
            </Popup>
          </span>
    </div>
  );
};

export default SDIUnitCodes;