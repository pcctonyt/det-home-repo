import React from "react";

const Destroys = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Operator Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Destroys Operator Code</h1>
                <div className="divider"></div>
                <p>This Code allows for any type of Conventional Unit to remove another opposing Nuclear or SDI Defense Unit of the Fixed (immovable) type from the Game Board during the completion of a movement-related Move Element.  Also, this Operator Code gets used in pair with Nuclear Unit Firing Move Elements.  In the case of a Conventional Unit attacking Conventional, Mobile Nuclear, or Mobile SDI Defense Units, use the "captures" (x) operator instead.  Destroys (z) Move Elements always result in the destroying Player NOT BEING ABLE to record Cash Value Game Points to that Player's Score Sheet Game Points Total.  The Player losing Units also DOES NOT deduct Cash Value Game Points at that time, since Fixed Units do not have Cash Value and cannot be captured.  These rules also apply to ALL UNITS destroyed by Nuclear Units.  All destroyed Units, including those not protected by either type of SDI Defense Unit during an opposing Nuclear Unit Firing Move Element, are removed from the Game Board.  There is NO WAY a destroyed Unit might return to the Game Board (see Official Rules: Destroys, for more information).</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Operator Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Operator Code:<span className="right">Use With:</span></p>
                    <h1>(z)</h1> <span className="right lg-text">G,L,S,A,Infantry vs. Fixed, all non-SDI protected Units in Firing Moves</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Longhand Descriptive Score Sheet Syntax (instead of just using only one (z)):</p>
                    <div className="divider"></div>
                        <p><span className="bold">If a Player wishes to specifically indicate which type(s) of Units eligible to be destroyed are destroyed during that Complete Turn, the longhand syntax on the Score Sheet is as follows: first (x) slot: Conventional Unit captured, second (z) slot: Fixed Nuclear Unit destroyed, and third (z) slot: Fixed SDI Defense Unit destroyed.  These last two slots can of course also contain (x's) for capture as well.  The hyphen used here indicates no type of that Unit for that slot got destroyed.  This syntax is NOT REQUIRED, but can make it easier for others reviewing the Score Sheet.  The Players choose how to record these Complete Turns on their own, and as long as all applicable Points are totalled correctly (for Nuclear Unit Firing Move Element Points Settings and any co-existing Conventional Unit captured) the preference here does not affect Turn legality.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">EXAMPLES OF ABOVE:</span></p>
                        <p><em>G-z-d8</em>.  A General destroys only a Fixed Nuclear Unit (first z, second slot) on square d8.</p>  
                        <p><em>G-zzd8</em>.  A General destroys a Fixed Nuclear Unit (first z, second slot) and a Fixed SDI Defense Unit (second z, third slot) on square d8.</p> 
                        <p><em>Gxz-d8</em>.  A General captures only an opposing Conventional Unit (first x, first slot) and destroys a Fixed Nuclear Unit (first z, second slot) on square d8.</p>
                        <p><em>Gx-zd8</em>.  A General captures only an opposing Conventional Unit(first x, first slot) and destroys a Fixed SDI Defense Unit (first z, third slot) on square d8.</p>
                        <p><em>Gxzzd8</em>.  A General captures only an opposing Conventional Unit(first x, first slot) and destroys a Fixed Nuclear Unit (first z, second slot) and a Fixed SDI Defense Unit (second z, third slot) on square d8.</p>
                        <p><em>G--zd8</em>.  A General only destroys a Fixed SDI Defense Unit (first z, third slot), but no Conventional Unit or Nuclear Unit, on square d8.</p>
                        <p className="no-divider"><span className="bold">EXAMPLES OF NUCLEAR UNIT FIRING MOVE ELEMENTS (depends upon Treaty selection for Strategic Nuclear Unit's YIELD).  The best practice is to write the first square code the Nuclear Unit reaches when "flying" to the block of squares:</span></p>
                        <p><em>F-MTNzg6</em>.  A Fired Mobile Tactical Nuclear Unit destroys square g6 (assuming no SDI Defense).</p>  
                        <p><em>F-FINzd5/c6</em>.  A Fired Fixed Intermediate Nuclear Unit destroys two squares (d5 and c6, assuming no SDI Defense )</p> 
                        <p><em>F-SNzb2/a1</em>.  A Fired Strategic Nuclear Unit destroys a 2 x 2 block (Default Setting) of squares (b2, b1, a2, a1, assuming no SDI Defense)</p>
                        <p><em>F-SNzd6/c8</em>. A Fired Strategic Nuclear Unit destroys a 2 x 3 block of squares (d6, d7, d8, c6, c7, c8, assuming no SDI Defense) </p>
                        <p><em>F-SNzf3/h1</em>. A Fired Strategic Nuclear Unit destroys a 3 x 3 <em>County Be Gone!</em> block of squares (f3, f2, f1, g3, g2, g1, h3, h2, h1, assuming no SDI Defense)</p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  The Shorthand syntax for Infantry Units ONLY DESTROYING one other Fixed Unit of either type WITHOUT ANY CAPTURES (without writing the (z) operator) is as follows: (letter of the file the Infantry starts on)(square code the Infantry destroys).  Example: <em>ed5</em> (replaces ezd5) Also note that the "captures" (x) operator can be used in this manner as well.  WARNING:  Players must take care to INCLUDE ALL APPLICABLE POINTS in Nuclear Unit Firing Move Elements.</p>
                </div>        
        </div>
    </div>
  )
};

export default Destroys;