import React from "react";

const HO = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Hand Off Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows for the transfer of both types of Mobile Nuclear and also Mobile SDI Defense Units from one friendly Conventional Unit to another, (for Nuclear Units, when both Conventional Units are of the same type).</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Move Element Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Units Being Moved:</span></p>
                    <h1>(HO)</h1> <span className="right lg-text">MTN, MIN, MSDI</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">All Conventional Units can Hand Off Mobile SDI Defense Units, the player then reassigns the new Unit on that receiving square to be protected from Nuclear Unit Firing (F) Moves, using the (/) Operator Code.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">Only Infantry Units can Hand Off Mobile Tactical Nuclear Units to only other friendly Infantry Units.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">Only Units other than Infantry or the President Unit can Hand Off Mobile Intermediate Nuclear Units to other like Units.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold">The Hand Off Movement Code requires both a sending Conventional Unit and a receiving Conventional Unit (both compatible if a Nuclear Unit is Handed Off) and within the sending Unit's movement range to legally complete.</span></p>
                    <div className="divider lg"></div>
                        <p className="bold"><span className="bold">Variable Rules for Hand Off Move Elements (can be changed during Treaty Negotiations, see Deterrence Official Rules: Treaty, for more information)</span><span>Selection Option:</span><span className="right bold">Default Setting:</span></p>
                        <p className="indent no-divider"><i>Legality:</i><span className="bold right">YES</span></p>
                        <p className="indent no-divider">Allow Handing Off only to adjacent (touching) squares?: <span className="bold right">YES</span> </p>
                            <p className="indent no-divider">Allow Handing Off to both adjacent and distant squares?:<span className="bold right">NO</span> </p>
                            <p className="indent no-divider">Allow Handing Off only to distant squares?:<span className="bold right">NO</span>
                            </p>
                            <p className="indent no-divider">Are adjacent Hand Offs 1 Complete Turn?: <span className="bold right">NO</span></p>
                            <p className="indent no-divider">If allowed above, are distant Hand Offs each 1 Complete Turn?: <span className="bold right">YES</span></p>
                    <div className="divider lg"></div>
                        <p className="note">In the event that the players agree during Treaty negotiations that one, some, or all possible Hand Off Move Elements are illegal, the Illegal Element Declared - Successfully (IED-S, itself the opposing Player's next Complete Turn) can be used by the oppsing Player IMMEDIATELY AFTER the Complete Turn containing the "declared illegal" Hand Off Move Element.  That Player then records any applicable Points Setting to his/her Score (Default: +5.0 Points) and that Player has recorded One Strike towards the opposing Player, and the first Player's entire Complete Turn must be retracted, and the initial Player then attempts a new Complete Turn.  See Deterrence Official Rules:  Illegal Element Declarations (both Successfully and Unsuccessfully ), for more information.</p>
                </div>        
        </div>
    </div>
  )
};

export default HO;