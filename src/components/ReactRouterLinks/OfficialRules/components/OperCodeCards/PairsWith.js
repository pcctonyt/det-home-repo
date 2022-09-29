import React from "react";

const PairsWith = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Operator Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Pairs With Operator Code</h1>
                <div className="divider"></div>
                <p>This Code allows for either Player to indicate two Codes paired with one another in one overall Element Code, either an Order Element or Move Element.  Usually the Pairs With Operator (/) refers to two Units travelling to the same final resting square during the given Complete Turn.  Also, the Pairs With Operator needs to be used when Buying (B) a Mobile SDI Defense Unit to a square with two or more Units already there, and then to the right after the (/), the Unit designated for protection by that new Mobile SDI Defense Unit.  In the event of an Infantry Promotion Move Element (assuming that feature HAS NOT been turned off during Treaty negotiations, the Pairs With Operator is used on both sides of the equals sign.  For example <em>(e8/MTN = G/MIN))</em> and the newly minted General and Mobile Intermediate Nuclear Units BOTH rest on square e8 in place of the Infantry Unit and Mobile Tactical Nuclear Unit, which both get removed from the Game Board.  During Promotion (#1 Treaty selection notwithstanding ) no Points are scored, however Cash Value Points for the new Units are added to the promoting Player's Cash Value Game Points total during the Promotion Move Element (see All Score Sheet Move Element Codes: Promotion, for more information). </p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Operator Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Operator Code:<span className="right">Use for:</span></p>
                    <h1>(/)</h1> <span className="right lg-text">Indicating two Units travelling together or paired together</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Score Sheet Syntax examples:</p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">These examples showcase how the Pairs With Operator is to be used:</span></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">EXAMPLES OF ABOVE (with space added for emphasis):</span></p>
                        <p className="no-divider">c8/MTN=G/MIN.  This Complete Turn contains a Promotion Move Element.  An Infantry Unit and a Mobile Tactical Nuclear Unit (no matter the MTN's readiness level) both starting on square c7, both MOVE AND PROMOTE to square c8 (see Official Rules: All Score Sheet Move Element Codes: Promotion, for more information).  Note how the Pairs With Operator indicates the two Units' tandem movements during one Move Element, which in this example IS A COMPLETE TURN.  Another example is: <em>B-MSDIg8/P</em>.  Note here that the use of the Separator Operator (-) separates the Move Element Code (B)from the Unit Code (MSDI), but not the square code.  This Complete Turn uses a Pairs With Operator to indicate that a newly "bought" Mobile SDI Defense Unit is placed on square g8 and "PAIRS WITH" the President Unit to protect that Unit from opposing Nuclear Unit Firing Move Elements (F).  Here, the Pairs With Operator is used since there LIKELY IS a Strategic Nuclear Unit already on square g8, and that Player (usually the Responding Player) wants THAT ONE TOTAL MSDI to shield the President, and NOT the Strategic Nuclear Unit.</p>
                        <div className="divider md"></div>
                        <p className="no-divider">Another good example of the Pairs With (/) Operator is when the Players must enter their agreed-to Border description in a  Treaty agreed to in either one or both rounds of Treaty negotiations to install a Border.  See Official Rules: All Treaty Rules: Section Six: Setting Two, for more information including these examples.</p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  It is better practice for each Player to review these Elements using multiple Codes of various types within them in each of their Complete Turns PRIOR TO making changes to the position on the Game Board to eliminate any possible errors, so that the opposing Player is less likely to be successful in challenging the legality of the Complete Turn.</p>
                </div>        
        </div>
    </div>
  )
};

export default PairsWith;