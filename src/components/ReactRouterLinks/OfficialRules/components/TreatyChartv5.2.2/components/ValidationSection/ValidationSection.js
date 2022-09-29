import React from "react";
import "./ValidationSection.css";
import ReviewChangesButton from "../Buttons/ReviewChangesButton";
import ValidateTreatyButton from "../Buttons/ValidateTreatyButton";
const ValidationSection = () => {
  return (
    <div className="validation-section-wrapper">
        <form>
          <h3>Validate Your Treaty to Shake Things Up!</h3>
          <h4>Select the Treaty:</h4>
          <label className="form-control" htmlFor="firstTreaty">First Treaty
            <input type="radio" name="firstTreaty-revisedTreay" value="firstTreaty" id="firstTreaty" checked />
          </label>
          <label className="form-control" htmlFor="revisedTreaty">Revised Treaty
            <input type="radio" name="firstTreaty-revisedTreay" value="revisedTreaty" id="revisedTreaty" />
          </label>
        </form>
        <ReviewChangesButton />
        <form>
          <h3>Input your User Identification Code to validate:</h3>
            <textarea type="text" name="userIdVal" id="userIdVal" placeholder="Example: detChampion"></textarea>
          <h3>Enter your password:</h3>
            <textarea type="text" name="userPassVal" id="UserPassVal" placeholder="Example: 12345678!?dc"></textarea>
          <ValidateTreatyButton />
        </form>
    </div>
  )
}

export default ValidationSection;