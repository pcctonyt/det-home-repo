import React, { useState } from "react";
import "./UnitCodes.css";
import A from "../DetCardsCopy/A";
import E from "../DetCardsCopy/E";
import G from "../DetCardsCopy/G";
import Infantry from "../DetCardsCopy/Infantry";
import L from "../DetCardsCopy/L";
import P from "../DetCardsCopy/P";
import Popup from "../Popup/Popup.js";
import S from "../DetCardsCopy/S";
import "./DetCards.css";

const ConvUnitCodes = () => {
  const [ airCode, setAirCode ]= useState(false);
  const [ envCode, setEnvCode ]= useState(false);
  const [ genCode, setGenCode ]= useState(false);
  const [ infCode, setInfCode ]= useState(false);
  const [ lieuCode, setLieuCode ]= useState(false);
  const [ presCode, setPresCode ]= useState(false);
  const [ serCode, setSerCode ]= useState(false);

  return (
    <div className="conv-codes-btn-wrapper">
        <h2 className="conv-codes-h1">Conventional Unit Codes:  Click a button below for all of the information on that Unit!</h2>
          <span>
            <button id="AirdropCode" className="conv-codes-btn" onClick={() => setAirCode(true)}>Airdrop Unit: (A)</button>
            <Popup trigger={ airCode } setTrigger={ setAirCode }>
                <A />
            </Popup>
          </span>

          <span>
            <button id="EnvoyCode" className="conv-codes-btn" onClick={() => setEnvCode(true)}>Envoy Unit: (E)</button>
            <Popup trigger={ envCode } setTrigger={ setEnvCode }>
                <E />
            </Popup>
          </span>

          <span>
            <button id="GeneralCode" className="conv-codes-btn" onClick={() => setGenCode(true)}>General Unit: (G)</button>
            <Popup trigger={ genCode } setTrigger={ setGenCode }>
                <G />
            </Popup>
          </span>

          <span>
            <button id="InfantryCode" className="conv-codes-btn" onClick={() => setInfCode(true)}>Infantry Unit: (no code)</button>
            <Popup trigger={ infCode } setTrigger={ setInfCode }>
                <Infantry />
            </Popup>
          </span>

          <span>
            <button id="LieutenantCode" className="conv-codes-btn" onClick={() => setLieuCode(true)}>Lieutenant Unit: (L)</button>
            <Popup trigger={ lieuCode } setTrigger={ setLieuCode }>
                <L />
            </Popup>
          </span>
          <span>
            <button id="PresidentCode" className="conv-codes-btn" onClick={() => setPresCode(true)}>President Unit: (P)</button>
            <Popup trigger={ presCode } setTrigger={ setPresCode }>
                <P />
            </Popup>
          </span>
          <span>
            <button id="SergeantCode" className="conv-codes-btn" onClick={() => setSerCode(true)}>Sergeant Unit: (S)</button>
            <Popup trigger={ serCode } setTrigger={ setSerCode }>
                <S />
            </Popup>
          </span>
    </div>
  )
}

export default ConvUnitCodes;