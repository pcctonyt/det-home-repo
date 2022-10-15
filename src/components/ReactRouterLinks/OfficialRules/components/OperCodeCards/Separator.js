import React from "react";

const Separator = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Operator Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Separator Operator Code</h1>
                <div className="divider captures"></div>
                <p className="divider captures">This Code allows for either Player to list separately one Element Code from the Unit or Element Code causing that change within that single Move Element.  The Separator Operator (-) DOES NOT separate square codes from other Codes.  The Border Breach Move Element Code is ALWAYS PRECEDED by a Separator (-).  In this way, the Players and/or others reviewing that Score Sheet clearly see a "separation" between the starting Code and other types of non-square Codes, making that Score Sheet easier to read.</p>
                <p className="bold type">Code Type: <span className="right">Operator Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold lg-text">Use Operator Code:<span className="right"><h1 className="code-padding-top">(-)</h1></span></p>
                     <span className="right lg-text">Use for: Splitting First Codes from other non-square Codes</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Score Sheet Syntax examples:</p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">These examples showcase how the Separator Operator is to be used:</span></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">EXAMPLES OF ABOVE (with space added for emphasis):</span></p>
                        <p className="no-divider">HO  -  MTNe3,f4.  This Complete Turn contains TWO TOTAL Elements.  An Infantry Unit and a Mobile Tactical Nuclear Unit (no matter the MTN's readiness level) both starting on square f2, where the Infantry Hands Off (HO) the MTN to another Infantry Unit (which must already be on square e3) on square e3, then makes its available first 2-square movement to f4.  Here, if the selection on the Treaty for Handing Off is changed to allow both backward and forward Infantry Hand Offs or only backward Hand Offs of MTNs, this Complete Turn could legally be rewritten as follows: <em>f4,HO  -  MTNe3</em>.  Note here that the use of the Separator Operator (-) separates the Move Element Code from the Unit Code, but not the square code.  If this Player WISHES NOT to Hand Off the MTN, this Complete Turn could be re-entered as follows: <em>f4/MTN</em>, since the first code is a Square Code, note here the use of the Pairs With Operator, where both travel to the new resting square of f4.  In the event that a Player chooses to LEAVE BEHIND that MTN (presumably to avoid inevitable loss), then that Complete Turn would just be <em>f4</em>, and that Mobile Tactical Nuclear Unit becomes, in essence, a Fixed Unit, since no other Infantry Units will be able to move it later.  The term for this Unit is a "broken arrow," which is a Mobile Nuclear Unit that cannot be moved. A "sitting duck" is either type of Mobile Unit which faces inevitable capture while not being able to be moved.</p>
                        <div className="divider md"></div>
                        <p className="no-divider">R  -  MINa1,Ec3.  This Complete Turn contains TWO TOTAL Elements.  An Envoy starting on square b2 (either formerly that Player's General Unit or one of the Sergeant Units), arms the previously activated Mobile Intermediate Nuclear Unit resting on square a1, then moves to square c3 on the same diagonal.  Since the arming occurred adjacently by the Envoy within movement range, the Envoy is allowed to make a movement.  NOTE:  If distance arming in the Treaty has been selected AS NOT a Complete Turn in and of itself, this Complete Turn could also have been recorded as follows: <em>Ec3,R  -  MINal</em>.  That is why it is so crucial to understand that the listing order of all Elements (in this case, an Order Element to Arm (R) and that Envoy's Move Element) is important.  Note here the use of the Separator Operator (-) to separate the Order Code from the Unit Code, but not the square codes.</p>
                        <div className="divider md"></div>  
                        <p className="no-divider">O  -  O  -  O<em> , </em> R  -  FINb7<em> , </em> E=d8.  Here, the Responding Player records a Complete Turn allowing THREE TOTAL Elements, and this is legal in so far as the adjacent status of the previously activated Fixed Intermediate Nuclear Unit is honored during the President's arming of that Unit.  The FIN is ADJACENT to the President Unit ONLY AFTER the completion of Protection.  Note that the Lieutenant being declared an Envoy can occur before or after the Protection move, if the correct square code is placed to the right of the equals sign.  This Complete Turn could be still be legal if rewritten as follows: <em>E=a8 , O  -  O  -  O , R  -  FINb7</em>.  However, if the Fixed Intermediate Nuclear Unit is ONLY ADJACENT to the President PRIOR TO the Protection move, let's say it is currently resting on f7 instead of b7, this Complete Turn would need to be recorded as follows: <em>R  -  FINf7, O  -  O  -  O, E=d8</em> -- OR -- <em>R  -  FINf7, E=a8, O  -  O  -  O</em>.</p> 
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  It is better practice for each Player to review these multiple-Element Complete Turns PRIOR TO making changes to the position on the Game Board to eliminate any possible errors, so that the opposing Player is less likely to be successful in challenging the legality of the Complete Turn.</p>
                </div>        
        </div>
    </div>
  )
};

export default Separator;