import React from "react";

const Checkmate = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Operator Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Checkmate Operator Code</h1>
                <div className="divider"></div>
                <p>This Code allows either player to denote, at the end of a Complete Turn indicating a Conventional Unit's movement, the inevitable capture of the opposing President on the following Complete Turn.  If the Conventional Unit delivering the threat of capture ( check ) cannot be LEGALLY CAPTURED by the President under attack, or if the President CANNOT MOVE to a square free of threat of capture, or if a Nuclear Unit cannot be fired against the Unit(s) responsible for the attack, or a blocking friendly Unit cannot be placed in front of the attacking Unit(s) (option not available for Airdrop Units delivering checkmate), or a Fixed SDI Defense Unit cannot be "bought" and placed in the path of attack, the (#) operator is used to denote <em>CHECKMATE</em>, and the game ends.  Note that an Armed Nuclear Unit in RANGE of an opposing President NOT PROTECTED by SDI Defense of either type, IS NOT in Check, and it is legal for that attacked Player to execute a Complete Turn besides one that relieves that threat (since Strategic Nuclear Units have unlimited RANGE anyway).  Additionally, the Treaty Negotiations Chart can be changed to allow an attacking Player the ability to capture a President accidentally left in Check (regardless of the existence of a checkmate position, meaning that if this option is selected in the Treaty, a defending Player CAN LEGALLY capture a Conventional Unit responsible for what otherwise would qualify as checkmate) by the defending Player on the prior Complete Turn (the speed chess rule), also ending the game as if checkmate had occurred.  There is a Checkmate Points Setting and the Variable Rule described above contained within the Treaty Negotiations Chart associated with this Operator Code.  The Default Settings are: +10.0 Points and NO, respectively.  Players need to realize that potential game-ending Complete Turns usually result in the need to apply Points on the Score Sheet, and that must be done accurately.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Operator Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Operator Code:<span className="right">Use for:</span></p>
                    <h1>(#)</h1> <span className="right lg-text">Inevitable capture of P</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Score Sheet Syntax examples:</p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">These examples showcase how the Checkmate Operator is to be used:</span></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">EXAMPLES OF ABOVE:</span></p>
                        <p className="no-divider"><em>1La5#</em>  A Lieutenant starting on square a1 moves to square a5 to checkmate the opposing President.  Note here that if either Lieutenant is capable of moving to square a5, use the rank number code for two Lieutenants on the same <em>FILE</em>, or use the file letter code for two Lieutenants on the same <em>RANK, as indicated here.</em></p>
                        <div className="divider md"></div>
                        <p className="no-divider"><em>Gg7#</em> A General Unit delivers checkmate to the opposing President resting on square g8 (or potentially another square), since that General is protected by another friendly Conventional Unit or Units, and there are no relief options described above for the defending Player, since capturing the General would still leave capture by the other Unit(s) protecting the General on the following Complete Turn, a checkmate has occurred, the (#) Operator is used, and the game ends.</p>
                        <div className="divider md"></div>  
                        <p className="no-divider"><em>e8=G#</em>  When an Infantry Unit promotes to a General, as is the Starting Player's case here, that General is already in position to end the game, since the Infantry Unit is removed from the board (and replaced with the General) after reaching square e8 all in one Complete Turn, just as in chess.  This condition here occurs without regard to a carried Mobile Tactical Nuclear Unit being promoted also to a Mobile Intermediate Nuclear Unit, but that gives the prevailing Player 4 extra total Cash Value Game Points, which then immediately get added to the checkmating Player's Score Sheet Game Points, which might affect the distribution of that Second Outcome Point at game's end.</p> 
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  Fixed Units (Nuclear or SDI Defense) block potential checkmate threats and other ground-level capture/destroy threats, but the Airdrop Unit does not attack via ground-level, so if the President currently rests on a square available to be an opposing Airdrop Unit's potential resting square on the subsequent Complete Turn (and has nowhere else to flee per checkmate conditions, usually during a "smothered mate" scenario), the President is still checkmated, even if Fallout Squares separate the two Units, and the game still ends.  Unaccompanied Mobile Units (Nuclear or SDI Defense) DO NOT block potential checkmate threats and other ground-level capture/destroy threats.  Fallout Squares also block ALL ground-level attacks.  A Fixed SDI Defense CAN BE placed on any vacant square (known as "blocking"), provided that the potentially checkmating Player has at least one previously Activated Nuclear Unit of either type on the Game Board, and fewer than six total "buys" of SDI Defense have been made up to that point by the defending Player.  However, the Buy Rate Points still must be applied.  Also be aware that a President MAY NOT relieve checkmate, pass through potential checkmate, or enter into checkmate during a Protection Move Element of either type, just as in chess.</p>
                </div>        
        </div>
    </div>
  )
};

export default Checkmate;