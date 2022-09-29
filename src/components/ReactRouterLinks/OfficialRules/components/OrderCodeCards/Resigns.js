import React from "react";

const Resigns = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Order Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold"><em>Resigns</em> Order Element Code</h1>
                <div className="divider"></div>
                <p>This Code indicates that a Player has requested that the game be ended with a concession of POSITIONAL DEFEAT ONLY, prior to that Player experiencing other possible outcomes resulting in positional defeat (i.e. Checkmate (#)) to end the game.  After this Order Element Code is used, the game ends immediately, and both Players must tally ALL GAME POINTS (both Score Sheet and Cash Value) to determine the outcome for assigning the second Outcome Point (see Official Rules: Score Sheet Rules or General Game Rules, for more information).</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use to:</span></p>
                    <h1>(<em>Resigns</em>)</h1> <span className="right lg-text">End the game with positional defeat</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <div className="divider"></div>
                        <p><span className="bold">The <em>Resigns</em> Order Element Code has a Points Rule which requires that Player resigning to apply Points to that Player's Score Sheet Game Points total at that time.  The Default Setting in the Treaty is -10.0 Points.</span></p>
                        <div className="divider"></div>
                        
                        <p className="bold"><span className="bold">There are no Variable Rules for <em>Resigns</em> Order Elements.</span></p>
                        <div className="divider lg"></div>
                        <p className="note">NOTE:  To be clear, the <em>Resigns</em> Order Element Code DOES NOT DETERMINE how the second Outcome Point for the Game Points total gets distributed (unless that selection has been agreed to during Treaty negotiations, see Treaty: Section One, for more information).  This Code only refers directly to the first Outcome Point for the positional part of the game.  However, the game does end immediately when <em>Resigns</em> is entered on the Score Sheet, and it cannot succeed any other prior Move or Order Elements in that one Complete Turn.  It DOES COUNT as a Complete Turn in and of itself, and must be used on that Player's turn.</p>
                </div>        
        </div>
    </div>
  )
};

export default Resigns;