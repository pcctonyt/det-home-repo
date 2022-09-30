import React from "react";
import "./SectionFour.css";
import AcceptCounterOffer from "../Buttons/AcceptCounterOffer";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";


const SectionFour = () => {
  return (
    <div className="section-four-wrapper" id="section-4">
        {/* the names, ids, htmlFors, and values are the abbreviations followed by first letters of each possible setting, and y for yes if it is chosen, no for no if it is not chosen, or both for settings choosing both */}
        <h3 className="four">Settings Affecting Conventional Unit Move Elements:</h3>
        <form>
          <h5>Allow <em>en passant</em> Infantry Unit captures (x)?</h5>
          <label className="form-control" htmlFor="epy-epn">Yes
              <input type="radio" name="epy-epn" value="yes" id="epy" checked />
            </label>
            <label className="form-control" htmlFor="epy-epn">No
              <input type="radio" name="epy-epn" value="no" id="epn" />
            </label>
        </form>
        <form>
          <h5>Select Promotion type:</h5>
          <label className="form-control" htmlFor="prom1-prom3">None At All
              <input type="radio" name="prom1-prom3" value="prom1" id="prom1" />
          </label>
          <label className="form-control" htmlFor="prom1-prom3">Captured Units Only
              <input type="radio" name="prom1-prom3" value="prom2" id="prom2" />
          </label>
          <label className="form-control" htmlFor="prom1-prom3">All Units, even copies 
              <input type="radio" name="prom1-prom3" value="prom3" id="prom3" checked />
          </label>
        </form>
        <form>
          <h5>Allow Protect the President Move Elements?</h5>
          <label className="form-control" htmlFor="proy-pron">Yes
              <input type="radio" name="proy-pron" value="yes" id="proy" checked />
          </label>
          <label className="form-control" htmlFor="proy-pron">No
              <input type="radio" name="proy-pron" value="no" id="pron" />
          </label>
        </form>
        <form>
          <h5>Allow Capture of Presidents Left in Check (+)?</h5>
          <label className="form-control" htmlFor="chky-chkn">No
              <input type="radio" name="chky-chkn" value="no" id="chkn" checked />
          </label>
          <label className="form-control" htmlFor="chky-chkn">Yes
              <input type="radio" name="chky-chkn" value="yes" id="chky" />
          </label>
        </form>
        <form>
          <h5>Total Number of Envoy Declarations allowed (E=)?</h5>
          <label>
            <input type="number" name="DecEnvoy" id="DecEnvoy" min="1" step="1" max="7" placeholder="1" /># Envoys declared:
          </label>
        </form>
          <OfferButton />
          <AcceptCounterOffer />
          <SubmitButton />
    </div>
  )
}

export default SectionFour;