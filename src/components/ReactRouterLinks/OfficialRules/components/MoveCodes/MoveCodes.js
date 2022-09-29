import React, { useState } from "react";
import B from "../MoveCodeCards/B";
import BB from "../MoveCodeCards/BB";
import D from "../MoveCodeCards/D";
import DO from "../MoveCodeCards/DO";
import EnPassant from "../MoveCodeCards/EnPassant";
import F from "../MoveCodeCards/F";
import HO from "../MoveCodeCards/HO";
import "./DetCards.css";
import "./MoveCodes.css";
import Popup from "../Popup/Popup.js";
import Promotion from "../MoveCodeCards/Promotion";
import ProtectPresLong from "../MoveCodeCards/ProtectPresLong";
import ProtectPresShort from "../MoveCodeCards/ProtectPresShort";
import PU from "../MoveCodeCards/PU";


const MoveCodes = () => {
  const [ breachCode, setBreachCode ] = useState(false);
  const [ buyCode, setBuyCode ] = useState(false);
  const [ deployCode, setDeployCode ] = useState(false);
  const [ dropoffCode, setDropoffCode ] = useState(false);
  const [ enPassantCode, setEnPassantCode ] = useState(false);
  const [ fireCode, setFireCode ] = useState(false);
  const [ handoffCode, setHandoffCode ] = useState(false);
  const [ pickupCode, setPickupCode ] = useState(false);
  const [ promotionCode, setPromotionCode ] = useState(false);
  const [ protectLongCode, setProtectLongCode ] = useState(false);
  const [ protectShortCode, setProtectShortCode ] = useState(false);
  
  return (
    <div className="move-codes-btn-wrapper">
        <h2 className="move-codes-h1"> Move Element Codes:  Click a button below for all of the information on that Move Element type!</h2>
          <span>
            <button id="BorderBreachCode" className="move-codes-btn" onClick={() => setBreachCode(true)}>Border Breach Move Element: (BB)</button>
            <Popup trigger={ breachCode } setTrigger={ setBreachCode }>
                <BB />
            </Popup>
          </span>
          <span>
            <button id="BuySdiCode" className="move-codes-btn" onClick={() => setBuyCode(true)}>Buy SDI Defense Unit Move Element: (B)</button>
            <Popup trigger={ buyCode } setTrigger={ setBuyCode }>
                <B />
            </Popup>
          </span>
          <span>
            <button id="DeployCode" className="move-codes-btn" onClick={() => setDeployCode(true)}>Deploy Move Element: (D)</button>
            <Popup trigger={ deployCode } setTrigger={ setDeployCode }>
                <D />
            </Popup>
          </span>
          <span>
            <button id="DropOffCode" className="move-codes-btn" onClick={() => setDropoffCode(true)}>Drop Off Move Element: (DO)</button>
            <Popup trigger={ dropoffCode } setTrigger={ setDropoffCode }>
                <DO />
            </Popup>
          </span>
          <span>
            <button id="EnPassantCode" className="move-codes-btn" onClick={() => setEnPassantCode(true)}>En Passant Move Element: (e.p.)</button>
            <Popup trigger={ enPassantCode } setTrigger={ setEnPassantCode }>
                <EnPassant />
            </Popup>
          </span>
          <span>
            <button id="FireCode" className="move-codes-btn" onClick={() => setFireCode(true)}>Fire Move Element: (F)</button>
            <Popup trigger={ fireCode } setTrigger={ setFireCode }>
                <F />
            </Popup>
          </span>
          <span>
            <button id="HandOffCode" className="move-codes-btn" onClick={() => setHandoffCode(true)}>Hand Off Move Element: (HO)</button>
            <Popup trigger={ handoffCode } setTrigger={ setHandoffCode }>
                <HO />
            </Popup>
          </span>
          <span>
            <button id="PickUpCode" className="move-codes-btn" onClick={() => setPickupCode(true)}>Pick Up Move Element: (PU)</button>
            <Popup trigger={ pickupCode } setTrigger={ setPickupCode }>
                <PU />
            </Popup>
          </span>
          <span>
            <button id="PromotionCode" className="move-codes-btn" onClick={() => setPromotionCode(true)}>Promotion Move Element: ((square code)=)</button>
            <Popup trigger={ promotionCode } setTrigger={ setPromotionCode }>
                <Promotion />
            </Popup>
          </span>
          <span>
            <button id="ProtectPresLongCode" className="move-codes-btn" onClick={() => setProtectLongCode(true)}>Protect the President - Long Move Element: (O-O-O)</button>
            <Popup trigger={ protectLongCode } setTrigger={ setProtectLongCode }>
                <ProtectPresLong />
            </Popup>
          </span>
          <span>
            <button id="ProtectPresShortCode" className="move-codes-btn" onClick={() => setProtectShortCode(true)}>Protect the President - Short Move Element: (O-O)</button>
            <Popup trigger={ protectShortCode } setTrigger={ setProtectShortCode }>
                <ProtectPresShort />
            </Popup>
          </span>
    </div>
  )
}

export default MoveCodes;