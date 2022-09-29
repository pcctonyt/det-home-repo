import React, { useState } from "react";
import "./DetCards.css";
import "./OrderCodes.css";
import BNEG from "../OrderCodeCards/BNEG";
import C from "../OrderCodeCards/C";
import DecE from "../OrderCodeCards/DecE";
import ENEG_N from "../OrderCodeCards/ENEG_N";
import ENEG_R from "../OrderCodeCards/ENEG_R";
import ENEG_Y from "../OrderCodeCards/ENEG_Y";
import IED_S from "../OrderCodeCards/IED_S";
import IED_U from "../OrderCodeCards/IED_U";
import Popup from "../Popup/Popup.js";
import R from "../OrderCodeCards/R";
import Resigns from "../OrderCodeCards/Resigns";

const OrderCodes = () => {
const [ activateCode, setActivateCode ] = useState(false);
const [ armCode, setArmCode ] = useState(false);
const [ beginTreatyCode, setBeginTreatyCode ] = useState(false);
const [ decEnvoy, setDecEnvoy ] = useState(false);
const [ endTreatyCodeNo, setEndTreatyCodeNo ] = useState(false);
const [ endTreatyCodeFirst, setEndTreatyCodeFirst ] = useState(false);
const [ endTreatyCodeRev, setEndTreatyCodeRev ] = useState(false);
const [ illegalNo, setIllegalNo ] = useState(false);
const [ illegalYes, setIllegalYes ] = useState(false);
const [ resignsCode, setResignsCode ] = useState(false);

  return (
    <div className="order-codes-btn-wrapper">
        <h2 className="order-codes-h1">Order Element Codes:  Click a button below for all of the information on that Order Element type!</h2>
          <span>
            <button id="ActivateCode" className="order-codes-btn" onClick={() => setActivateCode(true)}>Activate Order Element: (C)</button>
            <Popup trigger={ activateCode } setTrigger={ setActivateCode }>
                <C />
            </Popup>
          </span>
          <span>
            <button id="ArmCode" className="order-codes-btn" onClick={() => setArmCode(true)}>Arm Order Element: (R)</button>
            <Popup trigger={ armCode } setTrigger={ setArmCode }>
                <R />
            </Popup>
          </span>
          <span>
            <button id="BeginTreatyCode" className="order-codes-btn" onClick={() => setBeginTreatyCode(true)}>Begin Treaty Negotiations Order Element: (BNEG)</button>
            <Popup trigger={ beginTreatyCode } setTrigger={ setBeginTreatyCode }>
                <BNEG />
            </Popup>
          </span>
          <span>
            <button id="DeclareEnvoyCode" className="order-codes-btn" onClick={() => setDecEnvoy(true)}>Declare Envoy Order Element: (E=)</button>
            <Popup trigger={ decEnvoy } setTrigger={ setDecEnvoy }>
                <DecE />
            </Popup>
          </span>
          <span>
            <button id="EndTreatyCodeNo" className="order-codes-btn" onClick={() => setEndTreatyCodeNo(true)}>End Treaty Negotiations No Treaty Order Element: (ENEG-N)</button>
            <Popup trigger={ endTreatyCodeNo } setTrigger={ setEndTreatyCodeNo }>
                <ENEG_N />
            </Popup>
          </span>
          <span>
            <button id="EndTreatyCodeRev" className="order-codes-btn" onClick={() => setEndTreatyCodeRev(true)}>End Treaty Negotiations Revised Treaty Order Element: (ENEG-R)</button>
            <Popup trigger={ endTreatyCodeRev } setTrigger={ setEndTreatyCodeRev }>
                <ENEG_R />
            </Popup>
          </span>
          <span>
            <button id="EndTreatyCodeFirst" className="order-codes-btn" onClick={() => setEndTreatyCodeFirst(true)}>End Treaty Negotiations 1st Treaty Order Element: (ENEG-Y)</button>
            <Popup trigger={ endTreatyCodeFirst } setTrigger={ setEndTreatyCodeFirst }>
                <ENEG_Y />
            </Popup>
          </span>
          <span>
            <button id="YesIllegalElement" className="order-codes-btn" onClick={() => setIllegalYes(true)}>Illegal Element Declared - Successfully Order Element: (IED-S)</button>
            <Popup trigger={ illegalYes } setTrigger={ setIllegalYes }>
                <IED_S />
            </Popup>
          </span>
          <span>
            <button id="NoIllegalelement" className="order-codes-btn" onClick={() => setIllegalNo(true)}>Illegal Element Declared - Unsuccessfully Order Element: (IED-U)</button>
            <Popup trigger={ illegalNo } setTrigger={ setIllegalNo }>
                <IED_U />
            </Popup>
          </span>
          <span>
            <button id="ResignsCode" className="order-codes-btn" onClick={() => setResignsCode(true)}><em>Resigns</em> Order Element: (<em>Resigns</em>)</button>
            <Popup trigger={ resignsCode } setTrigger={ setResignsCode }>
                <Resigns />
            </Popup>
          </span>
    </div>
  )
}

export default OrderCodes;