
import React, { useState } from "react";
import "./NucSDIRules.css";
import Popup from "../Popup/Popup.js"
import "./DetCards.css";
import "./MoveCodes.css";
import "./OrderCodes.css";
import "./UnitCodes.css";
import DecE from "../OrderCodeCards/DecE";
import DO from "../MoveCodeCards/DO";
import FIN from "../DetCardsCopy/FIN";
import FSDI from "../DetCardsCopy/FSDI";
import FTN from "../DetCardsCopy/FTN";
import HO from "../MoveCodeCards/HO";
import MIN from "../DetCardsCopy/MIN";
import MSDI from "../DetCardsCopy/MSDI";
import MTN from "../DetCardsCopy/MTN";
import PU from "../MoveCodeCards/PU";
import SN from "../DetCardsCopy/SN";

const NucSDIRules = () => {
  
  const [ deceCodeRules, setDeceCodeRules ]= useState(false);
  const [ doCodeRules, setDoCodeRules ]= useState(false);
  const [ finCodeRules, setFinCodeRules ]= useState(false);
  const [ fsdiCodeRules, setFsdiCodeRules ]= useState(false);
  const [ ftnCodeRules, setFtnCodeRules ]= useState(false);
  const [ hoCodeRules, setHoCodeRules ]= useState(false);
  const [ minCodeRules, setMinCodeRules ]= useState(false);
  const [ msdiCodeRules, setMsdiCodeRules ]= useState(false);
  const [ mtnCodeRules, setMtnCodeRules ]= useState(false);
  const [ puCodeRules, setPuCodeRules ]= useState(false);
  const [ snCodeRules, setSnCodeRules ]= useState(false);


  return (
    <div className="nucSDI-rules-wrapper">
        <h1 className="text-center-bold padding-top padding-bottom">Deterrence Official Rules for Nuclear Units and SDI Defense Units</h1>
        <hr className="rule padding-bottom" />
        <h2 className="text-center-bold">1st New Game Concept: Nuclear Units and SDI Defense Units:</h2>
        <p className="padding-top">The first primary way that Deterrence revolutionizes the classic game of chess is by introducing NUCLEAR UNITS (to symbolize nuclear weapons) and the SDI DEFENSE UNITS (Strategic Defense Initiative, affectionately known as "Star Wars") used to defend against these new Units.  These new Units DO NOT START OFF on the Game Board when the game begins.  For the Nuclear Units, they get placed on the Game Board during different blocks of time (see below Deploy (D) section, for more information).  The SDI Defense Units get "bought" with SCORE SHEET GAME POINTS (see below heading) using the Buy SDI Defense (B) Move Element Code with a given Points Setting applied to the "buying" Player's Score Sheet Game Points Total.  If the Players wish to change this Setting during either one or both rounds of Treaty negotiations, they may do so (see Official Rules:  All Treaty Negotiations Chart Rules:  Section Five:  Buy SDI Defense (B) Points Setting, for more information).</p>
        <h3 className="text-center-bold">Meet Your New Units.  Each button has a Card containing all of that Unit's information!:</h3>
        <h3 className="text-center-bold">The Units that CAN BE Moved (CLICK A BUTTON TO LEARN MORE!):</h3>
        <h4 className="section-color">The Mobile Tactical Nuclear Unit (MTN):</h4>
            
            <span>
              <button id="MobileTacRules" className="nuc-codes-btn" onClick={() => setMtnCodeRules(true)}>Mobile Tactical Nuclear Unit (MTN)</button>
              <Popup trigger={ mtnCodeRules } setTrigger={ setMtnCodeRules }>
                <MTN />
              </Popup>
            </span>
            
          <h4 className="section-color">The Mobile Intermediate Nuclear Unit (MIN):</h4>
            
            <span>
              <button id="MobileIntRules" className="nuc-codes-btn" onClick={() => setMinCodeRules(true)}>Mobile Intermediate Nuclear Unit (MIN)</button>
              <Popup trigger={ minCodeRules } setTrigger={ setMinCodeRules }>
                <MIN />
              </Popup>
            </span>
            
          <h4 className="section-color">The Mobile SDI Defense Unit (MIN):</h4>
            
            <span>
              <button id="MobileSDIRules" className="sdi-codes-btn" onClick={() => setMsdiCodeRules(true)}>Mobile SDI Defense Unit (MSDI)</button>
              <Popup trigger={ msdiCodeRules } setTrigger={ setMsdiCodeRules }>
                <MSDI />
              </Popup>
            </span>
            
        <h3 className="text-center-bold">The Units that CANNOT BE Moved (CLICK A BUTTON TO LEARN MORE!):</h3>
            
          <h4 className="section-color">The Fixed Tactical Nuclear Unit (FTN):</h4>
            
            <span>
              <button id="FixedTacRules" className="nuc-codes-btn" onClick={() => setFtnCodeRules(true)}>Fixed Tactical Nuclear Unit (FTN)</button>
              <Popup trigger={ ftnCodeRules } setTrigger={ setFtnCodeRules }>
                <FTN />
              </Popup>
            </span>
            
          <h4 className="section-color">The Fixed Intermediate Nuclear Unit (FIN):</h4>
            
            <span>
              <button id="FixedIntRules" className="nuc-codes-btn" onClick={() => setFinCodeRules(true)}>Fixed Intermediate Nuclear Unit (FIN)</button>
              <Popup trigger={ finCodeRules } setTrigger={ setFinCodeRules }>
                <FIN />
              </Popup>
            </span>
          
          <h4 className="section-color">The Strategic Nuclear Unit (SN):</h4>
            
            <span>
              <button id="StrategicRules" className="nuc-codes-btn" onClick={() => setSnCodeRules(true)}>Strategic Nuclear Unit (SN)</button>
              <Popup trigger={ snCodeRules } setTrigger={ setSnCodeRules }>
                <SN />
              </Popup>
            </span>
            
          <h4 className="section-color">The Fixed SDI Defense Unit (FSDI):</h4>
          
            <span>
              <button id="FixedSDIRules" className="sdi-codes-btn" onClick={() => setFsdiCodeRules(true)}>Fixed SDI Defense Unit (FSDI)</button>
              <Popup trigger={ fsdiCodeRules } setTrigger={ setFsdiCodeRules }>
                <FSDI />
              </Popup>
            </span>

        <p className="padding-top">Just like the other Sections of these Official Rules, the relevant Unit, Order Element, and Move Element Codes will be placed in parentheses next to the names of the Codes.  The parentheses themselves ARE NOT part of the Codes.  When other Score Sheet Operator Codes get used in the Score Sheet Complete Turn entry examples, they will also be referenced and indicated within parentheses.</p>
        <h3 className="text-center-bold">The First Type of Nuclear Unit:  The Tactical Nuclear Unit:</h3>
          <p className="padding-bottom">The Tactical Nuclear Unit is the smallest of the three new Nuclear Units in each Player's arsenal.  These Units "pair with," meaning they are compatible with, ONLY THE INFANTRY UNITS.  What this means is that THE INFANTRY UNIT is the ONLY TYPE OF CONVENTIONAL UNIT which may legally share a square with a Tactical Nuclear Unit.  The Tactical Nuclear Unit has a YIELD of one square.  Here, the word YIELD is used to symbolize the destructive power of the Unit, upon a previously Armed (R) Tactical Nuclear Unit being Fired ((F), see below for more information) in relation to the Game Board.  The YIELD of the Tactical Nuclear Unit CANNOT BE CHANGED during subsequent Treaty negotiations and IS IN FACT a FIXED RULE (which is a Rule in Deterrence that MAY NOT BE CHANGED during either one or both rounds of Treaty negotiations).</p>
          <p className="padding-bottom">The movement RANGE of a Tactical Nuclear Unit includes ONLY THE SAME SQUARES an Infantry Unit may rest upon either through movement or Capture (x) Move Elements, or also in Deterrence, the Destroys (z) Move Element, for when the Infantry Unit attacks a square with opposing Fixed Units (see below for more information, and see also Official Rules: All Unit Codes, Infantry Unit (no code, as in chess), for more information).</p>
          <p className="padding-bottom">The RULES SPECIFIC to each of this Unit's Order Element Codes and Move Element Codes are described below in each of those sections.</p>
          <p>In this initial version of Deterrence, each Player is allowed to have ONLY UP TO ONE TOTAL Tactical Nuclear Unit throughout the game, but DOES NOT HAVE TO HAVE ONE, and if this Unit IS NOT ABLE TO REMAIN on the Game Board, IT CANNOT BE REPLACED.</p>
        <h3 className="text-center-bold">The Second Type of Nuclear Unit:  The Intermediate Nuclear Unit:</h3>
          <p className="padding-bottom">The Intermediate Nuclear Unit is the medium-sized and mid-range version of the three new Nuclear Units in each Player's arsenal.  These Units "pair with," meaning they are compatible with, ONLY THE CONVENTIONAL UNITS OTHER THAN THE INFANTRY UNITS AND THE PRESIDENT UNIT.  What this means is that ONLY THE GENERAL UNIT ((G) the Queen in chess), OR THE LIEUTENANT UNIT ((L) the Rook in chess), OR THE SERGEANT UNIT ((S) the Bishop in chess), OR THE AIRDROP UNIT ((A) the Knight in chess), OR THE ENVOY UNIT ((E) only one of these later-chosen Units, no chess equivalent), are the ONLY TYPES OF CONVENTIONAL UNITS which may legally share a square with an Intermediate Nuclear Unit.</p>
          <p className="padding-bottom">The Intermediate Nuclear Unit has a YIELD of TWO TOTAL ADJACENT SQUARES.  Keep in mind that "diagonally-adjacent" squares DO COUNT for the purposes of Intermediate Nuclear Units being accompanied by either the General Unit or the Sergeant Unit, and Fired (F) along a "diagonal" of squares.  Here, the word YIELD is used to symbolize the destructive power of the Unit in relation to the Game Board (see Firing (F) section below, for more information).  The YIELD of the Intermediate Nuclear Unit CANNOT BE CHANGED during subsequent Treaty negotiations and IS IN FACT a FIXED RULE (which is a Rule in Deterrence that MAY NOT BE CHANGED during either one or both rounds of Treaty negotiations).  The SQUARES able to be targeted for destruction MUST BE WITHIN the current (or most recently previous) ACCOMPANYING CONVENTIONAL UNIT'S movement RANGE (see right below for further explanantion of this).</p>
          <p className="padding-bottom">The MAXIMUM ALLOWABLE DISTANCE BETWEEN a Fired (F) Intermediate Nuclear Unit and the FIRST SQUARE TARGETED DURING THE ATTACK is TWO ADJACENT SQUARES (diagonal counts when applicable), NOT INCLUSIVE OF THE UNIT'S CURRENT RESTING SQUARE OR THAT FIRST SQUARE TARGETED.  Worth noting here is the fact that the Firing PLAYER MAY CHOOSE a SHORTER RANGE if desired.  However, the "path to" those targeted squares MUST BE AUTHORIZED MOVEMENT PATHS for that Nuclear Unit, based upon either the current Conventional Unit accompanying the Intermediate Nuclear Unit, OR the MOST RECENTLY PREVIOUS accompanying Unit if the Nuclear Unit BEING FIRED is currently unaccompanied.  In either case, this determines the firing path of that Intermediate Nuclear Unit.  Also important to note is that a Fired Intermediate Nuclear Unit "FLYS OVER" any friendly or opposing Units in that authorized movement path TO GET TO the targeted TWO ADJACENT SQUARES of destructive YIELD.  It is NOT BLOCKED OR PREVENTED FROM reaching authorized squares BEING TARGETED under ANY CASE.  This "flyover rule" ALSO APPLIES AND CONSTITUTES A BORDER BREACH (BB) Move Element Code WHEN THERE IS A BORDER INSTALLED during either one or both rounds of Treaty negotiations.  The game starts off WITHOUT a Border.  See official Rules:  All Treaty Negotiations Chart Rules: Section Six, for more information.</p>
          <p className="padding-bottom">Both the movement RANGE and the available squares for the YIELD of an Intermediate Nuclear Unit are THE SAME MOVEMENT-ELIGIBLE SQUARES for its CURRENT ACCOMPANYING CONVENTIONAL UNIT (OR MOST RECENTLY PAST ACCOMPANYING CONVENTIONAL UNIT'S) movement RANGE (see below for more information).  Here, the word "accompany" refers to that Conventional Unit that either currently OR MOST RECENTLY shared the square with that Intermediate Nuclear Unit.  Note here that one of Deterrence's Fixed Rules ONLY ALLOWS ONE Conventional Unit TOTAL AT ONE TIME to occupy any ONE SQUARE at a time, just as in chess.  Note also that the word "accompany" is used in a separate context than the word "pairs with" for the SDI Defense Units.  For SDI Defense Units, "pairs with" and the Pairs With Operator, besides movement, CAN ALSO REFER TO, the Unit chosen for protection from Nuclear Unit Firing Move Elements (F).</p>
          <p className="padding-bottom">The RULES SPECIFIC to each of this Unit's Order Element Codes and Move Element Codes are described below in each of those sections.</p>
          <p>In this initial version of Deterrence, each Player is allowed to have ONLY UP TO ONE TOTAL Intermediate Nuclear Unit throughout the game, but DOES NOT HAVE TO HAVE ONE.</p>
        <h3 className="text-center-bold">The Third Type of Nuclear Unit:  The Strategic Nuclear Unit:</h3>
          <p className="padding-bottom">The Strategic Nuclear Unit (SN) is the largest of these three Nuclear Unit types in each Player's arsenal.  It has UNLIMITED RANGE in relation to YIELD (the squares it may be targeted to destroy) on the Game Board.  Unlike the two previous Nuclear Unit types introduced, the Strategic Nuclear Unit CANNOT EVER BE A MOBILE UNIT, due to its unlimited Firing (F) RANGE.  These Units "pair with," meaning they are compatible with, ONLY THE PRESIDENT UNIT.  What this means is that THE ONLY CONVENTIONAL UNIT that CAN SHARE a square with the Strategic Nuclear Unit is THE PRESIDENT UNIT.</p>
          <p className="padding-bottom">The Strategic Nuclear Unit has a YIELD governed by a VARIABLE RULE (a Rule which might be changed in the Treaty negotiations process, see Official Rules:  All Treaty Rules, for more information).  The DEFAULT SETTING for the YIELD of this Unit is a 2 x 2 BLOCK of squares (Section two: Setting two, describes these available yields in specific detail, but suffice it to say, it can be a 2 x 2 BLOCK, a 2 x 3 BLOCK (any direction), or the 3 x 3 <em>(County Be Gone!)</em>) BLOCK of squares.  Here, the word YIELD is used to symbolize the destructive power of the Unit in relation to the Game Board.  The YIELD of the Strategic Nuclear Unit, of course as indicated above, CAN BE CHANGED during subsequent Treaty negotiations and IS IN FACT a VARIABLE RULE (which is a Rule in Deterrence that MIGHT BE CHANGED, BUT DOES NOT HAVE TO BE, during either one or both rounds of Treaty negotiations).  Whenever the DEFAULT SETTING of a particular Variable Rule is referenced, that means the Setting the game uses when THERE IS NO TREATY ADOPTED in either one or both Rounds of POSSIBLE, BUT NOT MANDATORY, rounds of Treaty negotiations, is THE RULE in effect AT THAT TIME.</p>
          <p className="padding-bottom">The Strategic Nuclear Unit has NO MOVEMENT RANGE, as it MUST REMAIN ON the square it Deploys (D) to, which is the square the PRESIDENT UNIT currently rests on at the time of deployment, which is referenced below under that heading.  The available squares for the YIELD of a Strategic Nuclear Unit is ANY BLOCK OF SQUARES, governed by the Variable Rule Setting in Section Two of the Treaty Negotiations Chart referenced above.  The PRESIDENT UNIT is the ONLY LEGALLY AUTHORIZED (or the only type "able to accompany") type of CONVENTIONAL UNIT that can SHARE A SQUARE with the Strategic Nuclear Unit.  Here, the word "accompany" refers to the fact that the ONLY TYPE OF CONVENTIONAL UNIT that can SHARE A SQUARE with the Strategic Nuclear Unit is in fact THE PRESIDENT UNIT.  Note here that one of Deterrence's Fixed Rules ONLY ALLOWS ONE Conventional Unit TOTAL AT ONE TIME to occupy any ONE SQUARE at a time, just as in chess.  Note also that the word "accompany" is used in a separate context than the word "pairs with" for the SDI Defense Units.  For SDI Defense Units, "pairs with" and the Pairs With Operator, besides movement, CAN ALSO REFER TO, the Unit chosen for protection from Nuclear Unit Firing Move Elements (F).</p>
          <p className="padding-bottom">The MAXIMUM ALLOWABLE DISTANCE BETWEEN a Fired (F) Strategic Nuclear Unit (SN) and the FIRST SQUARE TARGETED DURING THE ATTACK is AN UNLIMITED RANGE, meaning ANY BLOCK of squares selected on the Game Board conforming to the Section Two, Second Setting within the Treaty Negotiations Chart CAN BE TARGETED.  Worth noting here is the fact that the Firing PLAYER MAY CHOOSE ANY LENGTH OF RANGE desired.  Unlike the Intermediate Unit, the firing path of the Strategic Nuclear Unit DOES NOT HAVE ANY FIRING RANGE LIMITATIONS based on ANY of the Conventional Units.  Also important to note is that a Fired Strategic Nuclear Unit "FLYS OVER" any friendly or opposing Units in that chosen movement path TO GET TO the targeted BLOCK OF SQUARES of destructive YIELD.  It is NOT BLOCKED OR PREVENTED FROM reaching authorized squares BEING TARGETED under ANY CASE.  This "flyover rule" ALSO APPLIES AND CONSTITUTES A BORDER BREACH (BB) Move Element Code WHEN THERE IS A BORDER INSTALLED during either one or both rounds of Treaty negotiations.  The game starts off WITHOUT a Border.  See official Rules:  All Treaty Negotiations Chart Rules: Section Six, for more information.</p>
          <p className="padding-bottom">The RULES SPECIFIC to each of this Unit's Order Element Codes and Move Element Codes are described below in each of those sections.</p>
          <p>In this initial version of Deterrence, each Player is allowed to have ONLY UP TO ONE TOTAL Strategic Nuclear Unit throughout the game, but DOES NOT HAVE TO HAVE ONE.</p>
        <h3 className="text-center-bold">The SDI Defense Unit:</h3>
          <p className="padding-bottom">The SDI Defense Unit IS THE ONLY UNIT able to prevent other Units of other types from being Destroyed (z) by a previously Armed (R) Nuclear Unit when that Nuclear Unit is Fired (F).  The TOTAL MAXIMUM NUMBER PER PLAYER of allowable SDI Defense Units to be "bought" and placed on the Game Board is SIX PER PLAYER TOTAL INCLUSIVE OF BOTH TYPES, throughout the course of the entire game.  The Rules below describe the specifically-applicable Rules for either the Fixed SDI Defense Unit ((FSDI) the one THAT CANNOT MOVE), or the Mobile SDI Defense Unit ((MSDI) the one THAT CAN BE MOVED, but NOT MOVE ON ITS OWN).The SDI Defense Unit also ALWAYS IS IMMUNE ITSELF from removal from the Game Board during Nuclear Unit Firing (F) Move Elements.</p>  
        <h2 className="text-center-bold">Fixed Nuclear Unit Rules:</h2>
          <p className="padding-top padding-bottom">A Fixed Nuclear Unit must remain on the square it was Deployed (D) to for the duration of the game.  It cannot be moved, Handed Off (HO), Picked Up (PU), or Dropped Off (DO).  If an opposing Conventional Unit lands on a square occupied by a Fixed Nuclear Unit, that Fixed Nuclear Unit is considered destroyed, in which case that Unit is taken off of the Game Board and the attacking Player's Conventional Unit assumes control of that square.  The attacking Player receives no Cash Value Points.  The Move Element indicating this must use the "destroys" (z) Operator Code on the Score Sheet for that Complete Turn that Move Element was executed on.  The Player who got that Fixed Nuclear Unit destroyed cannot use or re-deploy that destroyed unit.  Fixed Nuclear Units "block" ground-level attacks by opposing Conventional Units, with the exception of the Airdrop Unit (see Official Rules: All Unit Codes, Airdrop Unit, for more information).</p>
        <h2 className="text-center-bold">Mobile Nuclear Unit Rules:</h2>
          <p className="padding-top">Mobile Nuclear Units CANNOT MOVE ON THEIR OWN ACCORD.  They must BE CARRIED by a Conventional Unit compatible (see above) with the Nuclear Unit being moved.  Only UP TO ONE NUCLEAR TOTAL AND ONE MOBILE SDI DEFENSE UNIT TOTAL can be moved by THAT ONE CONVENTIONAL UNIT AT ONE TIME.  The movement by ONE CONVENTIONAL UNIT of TWO MOBILE SDI DEFENSE UNITS during ONLY ONE MOVE ELEMENT is EXPRESSLY PROHIBITED.  When a Mobile Nuclear Unit CANNOT BE MOVED, because there are NO REMAINING compatible Conventional Units to move it, that Unit is referred to as a "broken arrow."  If said "broken arrow" also faces certain capture, it then is said to be a "sitting duck."  A Mobile SDI Defense Unit that CANNOT BE MOVED is playfully referred to as a "cement post," and also is called a "sitting duck" if its days are in fact numbered.</p>
        <h3 className="text-center-bold">Handing Off (HO) of Mobile SDI Defense Units (MSDI) and both types of Mobile Nuclear Unit (either MTN or MIN) Rules:</h3>
        <h4 className="section-color">Click the Button Below to Learn More!</h4>
          
            <span>
              <button id="HoRules" className="move-codes-btn" onClick={() => setHoCodeRules(true)}>Hand Off Move Element (HO)</button>
              <Popup trigger={ hoCodeRules } setTrigger={ setHoCodeRules }>
                <HO />
              </Popup>
            </span>
            
        <h3 className="text-center-bold">Picking Up (PU) of Mobile SDI Defense Unit and both types of Mobile Nuclear Unit Rules:</h3>
        <h4 className="section-color">Click the Button Below to Learn More!</h4>
          
            <span>
              <button id="PuRules" className="move-codes-btn" onClick={() => setPuCodeRules(true)}>Pick Up Move Element (PU)</button>
              <Popup trigger={ puCodeRules } setTrigger={ setPuCodeRules }>
                <PU />
              </Popup>
            </span>
          
        <h3 className="text-center-bold">Dropping Off (DO) of Mobile SDI Defense Unit and both types of Mobile Nuclear Unit Rules:</h3>
          <h4 className="section-color">Click the Button Below to Learn More!</h4>
          
            <span>
              <button id="DoRules" className="move-codes-btn" onClick={() => setDoCodeRules(true)}>Drop Off Move Element (DO)</button>
              <Popup trigger={ doCodeRules } setTrigger={ setDoCodeRules }>
                <DO />
              </Popup>
            </span>
            
        <h3 className="text-center-bold">Declaring an Envoy (E=) to Arm (R) previously Activated Nuclear Units:</h3>
          <p className="padding-bottom">An Envoy MAY BE DECLARED (E=) AT ANY TIME during the game FOR THE FIRST OVERALL TIME, and then for SUBSEQUENT TIMES (if allowed under the Treaty) ONLY WHEN that Player HAS AT LEAST ONE ACTIVATED Nuclear Unit on the Game Board.  Here, see either or both of Official Rules:  All Unit Codes:  Envoy Unit Code --OR-- Official Rules:  All Order Element Codes:  Declare Envoy Order Element Code, for ALL INFORMATION pertaining to Declaring an Envoy (E=).  See also Section Four of the Treaty Negotiations Chart to determine the number of allowable times an Envoy Unit (E) may be declared during the course of a game.  The Default Setting for this is:  ONE TIME ONLY, meaning that once that declaring Player's first Envoy is either captured (x) or destroyed (z), NO OTHER ENVOY can be declared later to take the lost one's place.  Infantry Units newly PROMOTING to another Unit CAN NEVER BE PROMOTED TO AN ENVOY UNIT during the Promotion Move Element, however, the newly promoted Unit can ON A SUBSEQUENT Complete Turn if the above conditions are met.  The Envoy Unit IS THERE TO Arm (R) previously Activated (C) Nuclear Units EITHER AT A DISTANCE OR ADJACENTLY whenever the President IS NOT ADJACENTLY THERE NEXT to the Nuclear Unit to do so.  The President Unit ALREADY CAN ARM without needing to be declared as an Envoy. </p>
          <h4 className="section-color">Click the Button Below to Learn More!</h4>
          
            <span>
              <button id="DecERules" className="order-codes-btn" onClick={() => setDeceCodeRules(true)}>Declare an Envoy Unit Order Element (E=)</button>
              <Popup trigger={ deceCodeRules } setTrigger={ setDeceCodeRules }>
                <DecE />
              </Popup>
            </span>
          
        <h2 className="text-center-bold">The Four LEVELS OF READINESS for All Nuclear Units:</h2>
        <h3 className="text-center-bold" id="readiness">FIRST LEVEL:  Deploy (D) a new Nuclear Unit to the Game Board</h3>
          <p className="padding-bottom">This Move Element Code places a new Nuclear Unit on the Game Board.  In real life, this would be like "unpacking" the Unit and setting it up.  For this Element to be legal, IT MUST OCCUR within the specified time below for each of the three above types of Nuclear Units.  Note that the Buy SDI Defense (B) Move Element Code is a WHOLLY SEPARATE Code used only to place new SDI Defense Units on the Game Board, and IS NOT USED for Nuclear Units.</p>
          <ul className="deploy-timeframe-list">Time Limitations for Deploy (D) Move Element Codes:
            <li className="padding-top">Tactical Units:  Complete Turns, inclusive, of #1 through #10</li>
            <li>Intermediate Units:  Complete Turns, inclusive, of #11 through #20</li>
            <li>Strategic Units:  Complete Turns, inclusive, of #21 through #30</li>
          </ul>
        <h3 className="text-center-bold" id="readiness">SECOND LEVEL:  Activate (C) a previously Deployed Nuclear Unit</h3>
          <p>Activating a Nuclear Unit allows it to later be Armed (R), which is like a nuclear weapon in real life "getting powered up" without yet receiving the authentication codes from the President, which would be like Arming in Deterrence.  Activating is ALWAYS ITSELF A COMPLETE TURN, meaning no other Elements of either type can be contained within that Complete Turn activating a previously Deployed Nuclear Unit.  The Complete Turn Wait Time is a VARIABLE RULE that is changeable during either one or both rounds of Treaty negotiations.  The game starts with the Default Setting for this final setting in Section Two of the Treaty Negotiations Chart as 5 COMPLETE TURNS.  What this means, is that FIVE CONSECUTIVE COMPLETE TURNS BY BOTH PLAYERS MUST HAVE OCCURRED, EXCLUSIVE OF BOTH THE DEPLOY AND ACTIVATE ELEMENTS, for the Wait Time to have expired, making Activating a previously Deployed Nuclear Unit legal. </p>
        <h3 className="text-center-bold" id="readiness">THIRD LEVEL:  Arm a previously Activated(R) Nuclear Unit</h3>
          <p className="padding-bottom">Arming a Nuclear Unit allows it to later be Fired (F), which is like the warhead of a nuclear weapon in real life "receiving valid authentication codes" without yet "being delivered" to be detonated, which would be like Firing in Deterrence.  Arming by itself of a Nuclear Unit ADJACENT TO the Conventional Unit (either the Envoy Unit or the President Unit) arming it is ALWAYS ABLE TO BE NOT ITSELF A COMPLETE TURN, meaning that the arming Conventional Unit MAY INDEED MAKE ONE TOTAL Move Element DURING THAT ONE COMPLETE TURN, either BEFORE OR AFTER the Arm Order Element is decided upon.  Usually, the listing sequence of these two Elements occurring on the Score Sheet entry is based on whether or not the Nuclear Unit is yet in movement RANGE of the arming Conventional Unit.</p>
          <p>For the Arming (R) of a previously Activated (C) Nuclear Unit AT A DISTANCE (something only the Envoy Unit may do) counting as ONE COMPLETE TURN, refer to the last Setting of Section Three of the Treaty Negotiations Chart, since THIS SPECIFIC RULE is a VARIABLE RULE, meaning that it can of course be changed during either one or both rounds of Treaty negotiations.  The Default Setting for this is:  YES, meaning that NO OTHER ELEMENTS can be executed DURING THE COMPLETE TURN the Arm Order Element occurs.  If this setting is changed to NO, the distance arming has the same Rules explained above for adjacent arming.</p>
        <h3 className="text-center-bold" id="readiness">FOURTH LEVEL:  Fire (F) a previously Armed (R) Nuclear Unit</h3>
          <p>Firing a Nuclear Unit allows it to destroy (z) ANY NON-SDI-DEFENSE PROTECTED Unit(s), both friendly and opposing, on the targeted squares that firing Player selects.  These targeted Units then have to be REMOVED from the Game Board, and EACH PLAYER must tabulate any applicable changes to BOTH OF EACH of their respective Score Sheet Game Points Totals (for any Elements the firing Player has to apply Points for) and the Cash Value Game Points Totals (for each Player losing Units in the firing Move Element which have a Cash Value).  The SQUARES SELECTED for targeting WHICH DO NOT AT ALL have ANY SDI DEFENSE UNITS ON THEM, then become Fallout Squares.  See the below section on Fallout Squares for more information.  With Nuclear Units "flying over" a previously agreed-to Border installed during either one or both rounds of Treaty negotiations, the Firing Player APPLIES ONCE the agreed-to Points Setting for a Border Breach Move Element, and then adds the (BB) code separated by the Separator Operator (-) to the VERY RIGHTMOST END of that Complete Turn.</p>
        <h3 className="text-center-bold">Buy SDI Defense(B) to Place SDI Defense Units on the Game Board:</h3>
          <p className="padding-bottom">This Move Element Code places a new SDI Defense Unit on the Game Board.  For this Element to be legal, IT MUST OCCUR within the current time of the Game where the opposing Player of the Player making the "buy" HAS AT LEAST ONE Activated Nuclear Unit of any of the above three types.  Note that the Deploy (D) of a Nuclear Unit Move Element Code is a WHOLLY SEPARATE Code used only to place new Nuclear Units on the Game Board, and IS NOT USED for SDI Defense Units.</p>
          <p className="padding-bottom">The Points Setting to Buy APPLIES TO BOTH FIXED AND MOBILE SDI DEFENSE UNITS, and ONLY A TOTAL OF UP TO SIX BUYING COMPLETE TURNS inclusive of all types of SDI Defense may be, but do not have to be, made throughout the course of the game. </p>
          <p>Squares targeted during Nuclear Unit Firing (F) Move Elements that have AT LEAST ONE MOBILE SDI Defense Unit (MSDI) on each of them ONLY LOSE the Unit(s) NOT PAIRED FOR PROTECTION with each of the Mobile SDI Defense Units on that targeted square or squares.  If the Player being targeted HAS NOT SPECIFIED a paired Unit to be protected by that Mobile SDI Defense Unit, the firing Player THEN GETS TO CHOOSE which Unit is protected, and then REMOVES ANY OTHER UNITS not protected, from the Game Board during that Complete Turn.  Remember that a Firing Move Element IS ALWAYS ITSELF A COMPLETE TURN.  Also, keep in mind that a Fixed SDI Defense Unit PROTECTS ALL OTHER UNITS OF ALL OTHER TYPES currently resting on that targeted square for as long as it DOES NOT get destroyed by an opposing Conventional Unit landing on that square.   For Fixed SDI Defense (FSDI) Units, NO OTHER UNITS AT ALL ON THAT SPECIFIC SQUARE that FSDI rests on are lost and thus remain on the Game Board.  A square CANNOT HOLD more than ONE TOTAL FIXED SDI Defense Unit.</p>
        <h3 className="text-center-bold">Fallout Square rules:</h3>
          <p className="padding-bottom">Fallout squares indicate those squares destroyed during a previously Armed (R) Nuclear Unit Firing Move Element (F).  Fallout Squares cannot have any Units of any type resting on them at ANY TIME during the game.   Fallout Squares "cannot be traversed" or "seen through" for ground-level attacking purposes (the Airdrop Unit (A) here is the exception, because it moves "through the air").  This Rule also includes Move Elements by Conventional Units normally otherwise resulting in check (+) of the opposing President Unit. They are considered "out-of-bounds" and can only be "jumped over" by Airdrop Units or "flown over" by the Intermediate or Strategic Nuclear Units only during Firing Move Elements.  The Players might choose to use the provided Fallout Square Symbols provided with a future Deterrence Set, or for now, might choose to designate an item of their choice for this purpose, provided that the item used is THE SAME APPEARANCE AND SIZE to denote EACH FALLOUT SQUARE.</p>
          <p>Fallout squares can ONLY RESULT when a previously Armed (R) and then subsequently Fired (F) Nuclear Unit TARGETS A SQUARE NOT HAVING ANY SDI DEFENSE UNITS ON IT AT ALL.  Fallout squares also BLOCK FORWARD PROGRESS of Infantry Units, and except in cases of capture or destroy Move Elements to different files, CANNOT THEREFORE BE PROMOTED, but DO REMAIN on the Game Board while also retaining their Cash Values until the POSITIONAL PORTION of the game has been resolved (win-lose-draw), and thus, the game ending.</p>
    </div>
  )
}

export default NucSDIRules;