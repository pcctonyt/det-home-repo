import React from "react";
import "./SectionFive.css";
import AcceptCounterOffer from "../Buttons/AcceptCounterOffer";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionFive = () => {
  return (
    <div className="section-five-wrapper" id="section-5">
      <h3 className="five">Other Points Settings:</h3>
      <form>
        <h5>Illegal Element Declared - Successfully (IED-S):</h5>
        <label htmlFor="imds-encv">
          <input type="number" name="imds" id="imds" min="-10" step="1" max="10" placeholder="+5.0" />
        </label>
        <h5>Illegal Element Declared - Unsuccessfully (IED-U):</h5>
        <label>
          <input type="number" name="imdu" id="imdu" min="-10" step="1" max="10" placeholder="-5.0"/>
        </label>
        <h5><em>Checkmate</em> Setting - #:</h5>
        <label>
          <input type="number" name="chkb" id="chkb" min="-10" step="1" max="10" placeholder="+10.0" />
        </label>
        <h5><em>Resign</em> Penalty - <em>resigns</em>:</h5>
        <label>
          <input type="number" name="rsgn" id="rsgn" min="-10" step="1" max="10" placeholder="-10.0" />
        </label>
        <h5>Envoy's Extra Cash Value (Add To Unit Selected):</h5>
        <label>
          <input type="number" name="encv" id="encv" min="1" step="1" max="9" placeholder="1.0" />
        </label>
        <h5>Can Apply Points Errors Make Complete Turns Illegal? (IED-S)?</h5>
        <label className="form-control three-radio"htmlFor="pey-pen">No
            <input type="radio" name="pey-pen" value="no" id="pen" checked />
        </label>
        <label className="form-control three-radio" htmlFor="pey-pen">Yes
            <input type="radio" name="pey-pen" value="yes" id="pey" />
        </label>
      </form>
        <OfferButton />
        <AcceptCounterOffer />
        <SubmitButton />
    </div>
  )
}

export default SectionFive;