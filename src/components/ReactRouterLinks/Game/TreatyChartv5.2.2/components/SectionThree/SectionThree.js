import React from "react";
import "./SectionThree.css";
import AcceptCounterOffer from "../Buttons/AcceptCounterOffer";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionThree = () => {
  return (
    <div className="section-three-wrapper" id="section-3">
      {/* the names, ids, htmlFors, and values are the abbreviations followed by first letters of each possible setting, and y for yes if it is chosen, no for no if it is not chosen, or both for settings choosing both */}
        <h3 className="three">Handing Off and Arming:</h3>
        <form>
          <h5>Allow Handoff Move Elements (MSDI, MTN, MIN only)?:</h5>
          <label className="form-control four-radio" htmlFor="hon-hoboth">None
            <input type="radio" name="hon-hoboth" id="hon" value="hon" />
          </label>
          <label className="form-control four-radio" htmlFor="ho1-ho4">Adjacent Only
            <input type="radio" name="hon-hoboth" value="hoa" id="hoa" checked />
          </label>
          <label className="form-control four-radio" htmlFor="ho1-ho4">Distant Only
            <input type="radio" name="hon-hoboth" value="hod" id="hod" />
          </label>
          <label className="form-control four-radio" htmlFor="ho1-ho4">Both Adjacent/Distant
            <input type="radio" name="hon-hoboth" id="hoboth" value="hoboth" />
          </label>
        </form>
        <h3 className="three">Infantry Handing Off:</h3>
        <form>
          <h5>Handoff Move Element Rule - Infantry with MTN/MSDI only:</h5>
          <label className="form-control four-radio" htmlFor="hoif-hoifb">Forward Only
            <input type="radio" name="hoif-hoifb" value="hoif" id="hoif" checked />
          </label>
          <label className="form-control four-radio" htmlFor="hoif-hoifb">Backward Only
            <input type="radio" name="hoif-hoifb" value="hoib" id="hoib" />
          </label>
          <label className="form-control four-radio" htmlFor="hoif-hoifb">Forward and Backward
            <input type="radio" name="hoif-hoifb" id="hoifb" value="hoifb" />
          </label>
        </form>
        <form>
            <h5>When Does One Hand Off Move Element (HO) Count as one Complete Turn?</h5>
            <label className="form-control four-radio" htmlFor="hoay-honad">Adjacent Only
              <input type="radio" name="hoay-hoad" value="hoay" id="hoay" />
            </label>
            <label className="form-control four-radio"htmlFor="hoay-honad">If allowed, Distant Only
              <input type="radio" name="hoay-honad" value="hody" id="hody" checked />
            </label>
            <label className="form-control four-radio"htmlFor="hoay-honad">If allowed,Adjacent and Distant Both
              <input type="radio" name="hoay-honad" value="hoyad" id="hoyad" />
            </label>
            <label className="form-control four-radio"htmlFor="hoay-honad">Neither Adjacent nor Distant
              <input type="radio" name="hoay-honad" value="honad" id="honad" />
            </label>
        </form>
        <form>
          <h5>Distance Arming (by Envoy Unit only) is one Complete Turn?</h5>
          <label className="form-control three-radio" htmlFor="ary-arn">Yes
              <input type="radio" name="ary-arn" value="yes" id="hoy" checked />
            </label>
            <label className="form-control three-radio"htmlFor="ary-arn">No
              <input type="radio" name="ary-arn" value="no" id="hon" />
            </label>
        </form>
        <OfferButton />
        <AcceptCounterOffer />
        <SubmitButton />
    </div>
  )
}

export default SectionThree;