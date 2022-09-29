import React from "react";

const BB = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Border Breach Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows for any type of Unit(s) starting in the Turn-taking Player's territory (when the Players have agreed to install a Border during Treaty negotiations, see Treaty: Section Six) to end its(their) movement during that current Complete Turn in the opposing Player's territory (see Official Rules: Borders, or Treaty Negotiations Chart - Section Six, for Variable Rules and Points Settings information).</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use with:</span></p>
                    <h1>(BB)</h1> <span className="right lg-text">MOVEABLE UNITS</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">When any valid Treaty is adopted and that Treaty describes a mutually agreed-to Border with an enforcement selection chosen and an enforcement Points Setting set, the Border Breach Move Element must be used to indicate on the Score Sheet when either Player has crossed the Border.  If multiple Units cross the Border during one Complete Turn, the Points Setting agreed to in Treaty negotiations is applied ONLY ONCE per Complete Turn (the Player executing that Turn applies Score Sheet Game Points only once).  The crossing Player then applies the Points Setting for Border Breach Move Elements to his/her Score Sheet Points Total at that time.  Depending upon enforcement, the Points can be differently applied (see Treaty, Section Six).  The Default Setting within the Treaty Negotiations Chart is NO BORDER.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">Use the (BB) code above at the very end of the Complete Turn on the Score Sheet, and then, as usual, apply the Points to the Score Sheet Game Points Total.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">Use of the Border Breach Move Element Code requires that the Players have changed Section Six of the Treaty Negotiations Chart to both install a Border and to enforce it, and also, that movement has occurred by the Player(s) over the Border.</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">The Border Breach Move Element Code also needs to be used when a Fired (F) Nuclear Unit destroys at least ONE UNIT in the opposing Player's territory.</span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  The Border Breach Move Element is always NOT ITSELF a Complete Turn, but rather its Move Element pairs with the previously indicated Element(s) of any Unit(s) for that COMPLETE TURN.  Score Sheet Complete Turn entry example: PU-MINd4,Gd8-<em>BB</em>  A General moves from any one of three prior starting squares (d1, d2, or d3), and "Picks Up" a Mobile Intermediate Nuclear Unit on square d4, and the both move to square d8, crossing an agreed-to Border installed earlier along the way.</p>
                </div>        
        </div>
    </div>
  )
};

export default BB;