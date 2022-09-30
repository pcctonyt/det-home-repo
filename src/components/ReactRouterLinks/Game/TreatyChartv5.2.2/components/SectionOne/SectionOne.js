import React from "react";
import "./SectionOne.css";
import AcceptCounterOffer from "../Buttons/AcceptCounterOffer";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionOne = () => {
  return (
    <div className="section-one-wrapper" id="section-1">
        <h3 className="one">Conditions for a Drawn Position (1st Outcome Point):</h3>
        <form>
          <h5>Consecutive Complete Turn Limit (inclusive):</h5>
          <label htmlFor="turns">
            <input id="turns" type="number" name="turns" min="1" step="1" max="100" placeholder="50" />
          </label>
        </form>
        
        <form>
          <h5>Equal Game Points (2nd O.P.) Draws Position Automatically (1st O.P.)?</h5>
          <label className="form-control" htmlFor="eqn-eqy">No
            <input id="eqn" type="radio" name="eqn-eqy" value="no" checked />
          </label>
          <label className="form-control" htmlFor="eqn-eqy">Yes
            <input type="radio" id="eqy" name="eqn-eqy" value="yes" />
          </label>
        </form>
        <form>
          <h5>A Drawn Position (1st O.P.) Draws Game Points Automatically (2nd O.P.) ?</h5>
          <label className="form-control" htmlFor="no-yes">No
            <input type="radio" name="no-yes" id="no" value="no" checked />
          </label>
          <label className="form-control" htmlFor="no-yes">Yes
            <input type="radio" name="no-yes" value="yes" id="yes" />
          </label>
        </form>
        <form>
          <h5>Repetition of Position Rule:</h5>
          <input id="turnsRep" type="number" name="turnsRep" min="1" step="1" max="10"placeholder="3" />
        </form>
        <OfferButton />
        <AcceptCounterOffer />
        <SubmitButton />
    </div>
  )
}

export default SectionOne;