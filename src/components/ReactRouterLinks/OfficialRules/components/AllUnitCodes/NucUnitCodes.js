import React, { useState } from "react";
import Popup from "../Popup/Popup.js";
import "./UnitCodes.css";
import FIN from "../DetCardsCopy/FIN";
import FTN from "../DetCardsCopy/FTN";
import MIN from "../DetCardsCopy/MIN";
import MTN from "../DetCardsCopy/MTN";
import SN from "../DetCardsCopy/SN";
import "./DetCards.css";


const NucUnitCodes = () => {
  const [ finCode, setFinCode ]= useState(false);
  const [ ftnCode, setFtnCode ]= useState(false);
  const [ minCode, setMinCode ]= useState(false);
  const [ mtnCode, setMtnCode ]= useState(false);
  const [ snCode, setSnCode ]= useState(false);

  return (
    <div className="nuc-codes-btn-wrapper">
        <h2 className="nuc-codes-h1">Nuclear Unit Codes:  Click a button below for all of the information on that Unit!</h2>
          <span>
            <button id="FixedIntermediateNuclearCode" className="nuc-codes-btn" onClick={() => setFinCode(true)}>Fixed Intermediate Nuclear Unit: (FIN)</button>
            <Popup trigger={ finCode } setTrigger={ setFinCode }>
                <FIN />
            </Popup>
          </span>
          
          <span>
            <button id="FixedTacticalNuclearCode" className="nuc-codes-btn" onClick={() => setFtnCode(true)}>Fixed Tactical Nuclear Unit: (FTN)</button>
            <Popup trigger={ ftnCode } setTrigger={ setFtnCode }>
                <FTN />
            </Popup>
          </span>

          <span>
            <button id="MobileIntermediateNuclearCode" className="nuc-codes-btn" onClick={() => setMinCode(true)}>Mobile Intermediate Nuclear Unit: (MIN)</button>
            <Popup trigger={ minCode } setTrigger={ setMinCode }>
                <MIN />
            </Popup>
          </span>

          <span>
            <button id="MobileTacticalNuclearCode" className="nuc-codes-btn" onClick={() => setMtnCode(true)}>Mobile Tactical Nuclear Unit: (MTN)</button>
            <Popup trigger={ mtnCode } setTrigger={ setMtnCode }>
                <MTN />
            </Popup>
          </span>

          <span>
            <button id="StrategicNuclearCode" className="nuc-codes-btn" onClick={() => setSnCode(true)}>Strategic Nuclear Unit: (SN)</button>
            <Popup trigger={ snCode } setTrigger={ setSnCode }>
                <SN />
            </Popup>
          </span>          
    </div>
  )
}

export default NucUnitCodes;