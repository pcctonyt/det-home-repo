import React from "react";

const EnPassant = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold"><em>En Passant</em> Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows for either Player with an Infantry Unit resting at already exactly three ranks ahead of its starting rank (Rank 5 for the Starting Player, rank 4 for the Responding Player) TO CAPTURE an OPPOSING INFANTRY UNIT ONLY IMMEDIATELY AFTER the opposing Player's Complete Turn moving an Infantry Unit its initial 2-squares forward first movement option HORIZONTALLY ADJACENT to the other Player's Infantry Unit.  This <em>en passant</em> Rule (e.p), as also in the game of chess, allows capture as if the Infantry Unit only moved ONE SQUARE FORWARD, instead of two squares, as it has the option of moving on its first turn of movement, PROVIDED THAT the capture OCCURS IMMEDIATELY AFTER that opposing initial 2-square-forward Infantry Move Element.  If even ONE OTHER COMPLETE TURN occurs after the Infantry moves two squares forward, the opportunity to capture <em>en passant</em> is lost, regardless of the position.  In Deterrence, the <em>en passant</em> rule can be made either legal (the Default Setting) or illegal during Treaty negotiations.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Used with:</span></p>
                    <h1>(e.p.)</h1> <span className="right lg-text">Certain Infantry Unit captures of opposing Infantry Units</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Refer to the explanations above for the <em>en passant</em> Rule.</span></p>
                        <p><span className="bold">When to use:</span><span className="right">Use the (e.p) Move Element Code after any Infantry Unit capturing Move Element of only another opposing Infantry Unit if the above conditions are met.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">It also is still legal to record an <em>en passant</em> capture Move Element with just the shorthand notation allowed for all other Infantry captures of just one other Unit, however the Score Sheet is easier to review when the (e.p.) Move Element Code is placed after that Move Element.</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">The only Variable Rule affected by the Treaty Negotiations Chart is described above.  The Points Settings are not affected.</span></p>
                </div>        
        </div>
    </div>
  )
};

export default EnPassant;