import React from "react";


const Check = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Operator Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Check Operator Code</h1>
                <div className="divider captures">
                    <p>This Code allows either player to denote, at the end of a Complete Turn indicating a Conventional Unit's movement, the threat of capture of the opposing President on the following Complete Turn.  If the Conventional Unit delivering the threat of capture ( check ) can be LEGALLY CAPTURED by the President under attack, the (+) operator is still used.  If the President cannot avoid Conventional Unit capture in any way during the turn of the Player with the attacked President, use the Checkmate Operator (#) instead, and the game ends at that point.  Note that an Armed Nuclear Unit in RANGE of an opposing President NOT PROTECTED by SDI Defense of either type, IS NOT in Check, and it is legal for that attacked Player to execute a Complete Turn besides one that relieves that threat (since Strategic Nuclear Units have unlimited RANGE anyway ).  Additionally, the Treaty Negotiations Chart can be changed to allow an attacking Player the ability to capture a President accidentally left in Check by the defending Player on the prior Complete Turn (the speed chess rule), also ending the game as if checkmate has occurred.  There are no Points Settings or Variable Rules associated with this Operator Code.  However, Players need to realize that potential game-ending Complete Turns usually result in the need to apply Points on the Score Sheet, and that must be done accurately.</p>
                </div>
                <div className="divider"></div>
                <p className="bold type">Code Type: <span className="right">Operator Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold lg-text">Use Operator Code:<span className="right"><h1 className="code-padding-top">(+)</h1></span></p>
                    <span className="right lg-text">Use for: Threaten capture of P</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Score Sheet Syntax examples:</p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">These examples showcase how the Check Operator is to be used:</span></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">EXAMPLES OF ABOVE:</span></p>
                        <p className="no-divider"><em>cLd1+</em>  A Lieutenant starting on square c1 moves to square d1 to check the opposing President.  Note here that if either Lieutenant is capable of moving to square d1, use the rank number code for two Lieutenants on the same <em>FILE</em>, or use the file letter code for two Lieutenants on the same <em>RANK, as indicated here.</em></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><em>Sh6+</em> A Sergeant Unit delivers check to the opposing President somewhere on the available diagonals, without other Fixed, Fallout Squares, or Conventional Unit(s) blocking the line of ground-level attack.</p>
                        <div className="divider md"></div>  
                        <p className="no-divider"><em>Gh1+</em>  If this General moves OUT OF THE WAY of another friendly Conventional Unit (regardless of the General's starting resting square ) which then allows the non-moving other Unit to have a clear path to the President, this is called <em>DISCOVERED CHECK</em> and the Complete Turn is recorded with ONLY THE MOVING Unit(s), just as in chess. </p> 
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  Fixed Units (Nuclear or SDI Defense) block checks and other ground-level capture/destroy threats, but the Airdrop Unit does not attack via ground-level, so if the President currently rests on a square available to be an opposing Airdrop Unit's potential resting square on the subsequent Complete Turn, the President is in check, even if Fallout Squares separate the two Units.  Unaccompanied Mobile Units (Nuclear or SDI Defense) DO NOT block checks and other ground-level capture/destroy threats.  Fallout Squares also block all ground-level attacks.  A Fixed SDI Defense CAN BE placed on any vacant square, provided that the check-delivering Player has at least one previously Activated Nuclear Unit of either type on the Game Board, and fewer than six total "buys" of SDI Defense have been made up to that point by the defending Player.  However, the Buy Rate Points still must be applied.  Also be aware that a President MAY NOT relieve check, pass through check, or enter into check during a Protection Move Element of either type, just as in chess.</p>
                </div>        
        </div>
    </div>
  )
};

export default Check;