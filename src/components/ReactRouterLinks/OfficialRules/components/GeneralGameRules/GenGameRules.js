import React, { useState } from "react";
import "./DetCards.css";
import "./GenGameRules.css";
import "./UnitCodes.css";
import GameBoard from "./GameBoard.js";
import Popup from "../Popup/Popup.js";
import A from "../DetCardsCopy/A";
import G from "../DetCardsCopy/G";
import Infantry from "../DetCardsCopy/Infantry";
import L from "../DetCardsCopy/L";
import P from "../DetCardsCopy/P";
import S from "../DetCardsCopy/S";

const GenGameRules = () => {
  const [ showBoard, setShowBoard ] = useState(false);
  const [ aCode, setACode ] = useState(false);
  const [ gCode, setGCode ] = useState(false);
  const [ infantryCode, setInfantryCode ] = useState(false);
  const [ lCode, setLCode ] = useState(false);
  const [ pCode, setPCode ] = useState(false);
  const [ sCode, setSCode ] = useState(false);

  return (
    <div className="general-rules-wrapper">
        <h1 className="text-center-bold">Deterrence General Game Rules</h1>
        <h4 className="padding-top">Welcome to Deterrence, a game where <em>CHESS ENTERS THE NUCLEAR AGE!</em></h4>
            <p className="padding-top padding-bottom">  Thank you for playing the game that will officially replace chess for all time and eternity going forward.  Your patience and dedication as one who wishes to learn Deterrence will offer YOU THE FOUNDING PLAYERS countless enjoyment as you battle it out with your opponents for strategic dominance.  Deterrence introduces three new concepts of gameplay to chess, while making every effort to preserve the classic chess gameplay.  These three new Game Concepts are described below.</p>
            <p className="padding-bottom">You will learn about the various new additions to chess as you read all of the sections of these Rules.  Unlike chess, Deterrence games ALWAYS USE A SCORE SHEET to record gameplay, similar to chess tournament games.  Each newly introduced concept will have its companion Score Sheet Code next to it in parentheses.  Note that the parentheses used throughout ARE NOT part of these Codes themselves.  Since Deterrence has both Fixed and Variable Rules with time limitations associated with them, see below for more information, a Score Sheet is used to record activities during the Complete Turns throughout EVERY GAME PLAYED of Deterrence (see Official Rules: All Score Sheet Rules, for more information).</p>
            <span className="board-btn-wrapper-gen-rules">
              <button id="ShowBoardCode" className="board-codes-btn" onClick={() => setShowBoard(true)}>See your Game Board!</button>
              <Popup trigger={ showBoard } setTrigger={ setShowBoard }>
                <GameBoard />
              </Popup>
          </span>
            <h2 className="text-center-bold">Three New Game Concepts:</h2>
            <hr className="rule padding-bottom" />
            <h4 className="bold padding-top padding-bottom game-concepts">FIRST NEW GAME CONCEPT:  <em>NUCLEAR AND SDI DEFENSE UNITS</em>, WITH COMPANION NEW GENERAL RULES:</h4>
            <p className="padding-top padding-bottom">The Players may now use nuclear weapons (the new Nuclear Units) and the new SDI Defense Units to protect other Units from nuclear destruction.  These Units have specific new Unit Codes, Move Element Codes, and Order Element Codes associated with them, and there are new "CARDS" available for all Players and those learning how to play to review (see the end of this paragraph for Rules Section Names to refer to).  The Move Element Codes make visible changes to either one of the Player's or to both Players' POSITIONS on the Game Board.  The Order Element Codes change the status of AT LEAST ONE of any of the possible TYPES of Unit(s) on the Game Board, but do NOT CHANGE the position AT ALL in any visible way.  The Unit Codes, for both Conventional (the 16 each Player gets to start with) and non-Conventional Units (the later-added Nuclear and/or SDI Defense Units), are also used on the new Score Sheet, to refer to those Units involved in changes to the game occurring during that Complete Turn.  Make sure to review the Deterrence Official Rules by Section:  All Score Sheet Move Element Codes, All Score Sheet Order Element Codes, and All Score Sheet Unit Codes, ON THIS APPLICATION, for more detailed explanations both relevant and specific to each Code.</p>
            <p className="padding-bottom">Also, the new Operator Codes are included to help Players accurately record the events during each of their Complete Turns on the Score Sheet.  These Codes are used to describe relationships between the Unit, Move Element, and Order Element Codes used on the Score Sheet.  See Official Rules By Section, All Operator Codes, for more information on these new codes.  Since these new codes typically do not get used in the scoring of a chess tournament game, be sure to get familiar with them, as they make Deterrence's much more expanded gameplay possible.</p>
            <p className="padding-bottom">Sometimes, there might be both ONE NUCLEAR UNIT of the MOBILE TYPE (MTN or MIN) moving in tandem with ONLY ONE SDI DEFENSE UNIT of the MOBILE TYPE (MSDI) during that one current total Complete Turn.  A Conventional Unit IS ALLOWED to MOVE UP TO ONE NUCLEAR UNIT AND UP TO ONE SDI DEFENSE UNIT (BOTH OF THE MOBILE TYPE, but not MORE THAN ONE Nuclear Unit OR MORE THAN ONE SDI Defense Unit) during its own Move Element.  However, that Unit CANNOT EXECUTE MORE THAN ONE MOVE ELEMENT ITSELF during THAT ONE COMPLETE TURN.  Only UP TO ONE TOTAL Conventional Unit Move Element CAN OCCUR during that ONE COMPLETE TURN.</p>
            <p className="padding-bottom">However, just as in chess, ONLY ONE CONVENTIONAL UNIT ( a chess "piece") MOVING BY ITSELF AT ONE TIME MAKING ONE MOVE ELEMENT (the "move" in chess) is allowed to occur (but doesn't always HAVE TO OCCUR) FOR EACH COMPLETE TURN being executed.  Also worth noting here, at times, Deterrence allows for more than one Element (either a Move Element or an Order Element) to occur within one Complete Turn, hence the new "Complete Turn-based" terminology.  The new Operator Codes introduced within the Deterrence Official Score Sheet have been designed to allow the Players to record these different possible types of game events within each of their individual Complete Turns (see Official Rules:  All Score Sheet Operator Codes, for more information).  Note that use of the Score Sheet IS ALWAYS REQUIRED for each game being played, but the USE OF THE TREATY NEGOTIATIONS CHART, IS NOT REQUIRED.</p>
            <h4 className="bold padding-top padding-bottom game-concepts">SECOND NEW GAME CONCEPT: <em>YOUR NEW TREATY NEGOTIATIONS CHART</em></h4>
            <p className="padding-top padding-bottom">The Use of a Treaty Negotiations Chart to change one, some, or all of the new Variable Rules and one, some, or all of the new Points Settings, gives Players the amazing ability to achieve MUCH MORE GAMEPLAY than would occur during a plain-old chess game.  Each Player has ONE OVERALL OPPORTUNITY to ask the other Player for a Treaty negotiating session to "make each game their own."  This ensures that Deterrence becomes a constantly-changing and ever-evolving "platform" that will be more difficult for artificial intelligence (AI) platforms to always supply human players with the strongest move in any game.  The future World Human Deterrence Champion, unlike the current World Human Chess Champion, can rest assured that AI will not supplant humanity from premier playing status anytime soon.  The human Players will also know that humanity has a distinct advantage in overall negotiating ability compared with AI (at least for now).  This allows human Players to both customize each game they play while also enjoying each game played more thoroughly. Also, the psychological aspect of negotiating in general offers further excitement when playing Deterrence that chess does not have.</p>
            <h4 className="bold padding-top padding-bottom game-concepts">THIRD NEW GAME CONCEPT: <em>PLAYING FOR POINTS ALONG WITH POSITION</em></h4>
            <p className="padding-top padding-bottom">Following from #2 above, in Deterrence, the Players compete for TWO TOTAL Outcome Points, one for the POSITIONAL PORTION of the game, similar to chess's ONE OVERALL Outcome Point per game, and then the SECOND OUTCOME POINT for the new POINTS PORTION of the game.  This second Outcome Point is also awarded when the first Outcome Point is awarded, when the game ends in much the same way (with some new wrinkles) as a game of chess ends.</p>
            <p className="padding-bottom">If a Player inadvertently FORGETS or DOES NOT APPLY an applicable Points Setting to that Player's Score Sheet Game Points Total, the OTHER PLAYER can then CLAIM that Point or those Points as a POSITIVE VALUE or VALUES (regardless if the original Setting was positive or negative) and then ADD them to that Player's Score Sheet Game Points Total.  This stipulation is known affectionately as "the cribbage rule" and is also governed by Treaty selection (see Official Rules: All Treaty Rules: Section Four, for more information).  If the Default Setting "cribbage rule" is retained during either one or both Rounds of Treaty negotiations, or is retained by virtue of no Treaty(s) being adopted, BOTH PLAYERS ARE PROHIBITED from making an Illegal Element Declared - Order Element Code on the subsequent turn, which then would by itself (if no conditions of that Complete Turn were in fact being challenged) result in an unsuccessful declaration (IED-U).  If, however, the "cribbage rule' IS NOT SELECTED, that Player who recognizes the potential error in Points tabulation AS THE ONLY ERROR WITHIN THAT COMPLETE TURN, CAN THEN THEREFORE ELECT, but does not have to, to USE the ILLEGAL ELEMENT DECLARED - Order Element Code on the IMMEDIATELY FOLLOWING COMPLETE TURN after the questioned Points applied Complete Turn is entered by that Player's opponent.  Make sure to review Official Rules:  All Order Element Codes:  Illegal Element Declared (both Successfully (IED-S) and Unsuccessfully (IED-U) cards) for more information. </p>
        <h2 className="text-center-bold">Setting Up the Game Board:</h2>
            <p className="padding-top padding-bottom">Anybody can play Deterrence using a 64-square playing surface with alternating colors, one complete chess piece set, and one complete checkers set.  Future versions of Deterrence will have direct playability on this website using a "virtual" Game "Board," much like today's popular chess applications.  Playing "against the computer" in Deterrence, however, might take awhile, as many new and exciting, challenging and rewarding aspects of gameplay have been added.  The setup for the start of the game is identical in layout to how a game of chess starts.  There is new terminology introduced within Deterrence which will respect the identities of players from different groups within humanity as well as new names for the Conventional Units, formerly the chess "pieces."</p>  
            <p className="padding-bottom">Deterrence does not rely on the "white" versus "black" concept used in chess, but rather the "Starting Player" versus the "Responding Player."  This new way of referring to each of the two Players in a game allows for future customizability in each Player selecting the color of each of their Units.</p>
            <h4 className="bold padding-top padding-bottom game-concepts">MEET YOUR NEW CONVENTIONAL UNITS!  THESE UNITS START THE GAME (CLICK A BUTTON BELOW TO LEARN MORE!):</h4>
            <hr className="rule padding-bottom" />
            <h4 className="text-center padding-bottom nukes-setting-color">The Pawn in chess is now known as the Infantry Unit (no code)</h4>
            
              <span>
                <button id="InfantryRulesCode" className="conv-codes-btn" onClick={() => setInfantryCode(true)}>InfantryUnit: (no code)</button>
                <Popup trigger={ infantryCode } setTrigger={ setInfantryCode }>
                  <Infantry />
                </Popup>
              </span>
            
            <h4 className="text-center padding-bottom nukes-setting-color">The Knight in chess is now known as the Airdrop Unit (A)</h4>
            
              <span>
                <button id="AirdropRulesCode" className="conv-codes-btn" onClick={() => setACode(true)}>Airdrop Unit: (A)</button>
                <Popup trigger={ aCode } setTrigger={ setACode }>
                  <A />
                </Popup>
              </span>
            
            <h4 className="text-center padding-bottom nukes-setting-color">The Bishop in chess is now known as the Sergeant Unit (S)</h4>
            
              <span>
                <button id="SergeantRulesCode" className="conv-codes-btn" onClick={() => setSCode(true)}>Sergeant Unit: (S)</button>
                <Popup trigger={ sCode } setTrigger={ setSCode }>
                  <S />
                </Popup>
              </span>
            
            <h4 className="text-center padding-bottom nukes-setting-color">The Rook in chess is now known as the Lieutenant Unit (L)</h4>
            
              <span>
                <button id="LieutenantRulesCode" className="conv-codes-btn" onClick={() => setLCode(true)}>Lieutenant Unit: (L)</button>
                <Popup trigger={ lCode } setTrigger={ setLCode }>
                  <L />
                </Popup>
              </span>
            
            <h4 className="text-center padding-bottom nukes-setting-color">The Queen in chess is now known as the General Unit (G)</h4>
            
              <span>
                <button id="GeneralRulesCode" className="conv-codes-btn" onClick={() => setGCode(true)}>General Unit: (G)</button>
                <Popup trigger={ gCode } setTrigger={ setGCode }>
                  <G />
                </Popup>
              </span>
            
            <h4 className="text-center padding-bottom nukes-setting-color">The King in chess is now known as the President Unit (P)</h4>
            
              <span>
                <button id="PresidentRulesCode" className="conv-codes-btn" onClick={() => setPCode(true)}>President Unit: (P)</button>
                <Popup trigger={ pCode } setTrigger={ setPCode }>
                  <P />
                </Popup>
              </span>
            
            <p className="padding-top padding-bottom">Note the gender-neutral Unit names, replacing chess's dated patriarchal "piece" names.  Also, in Deterrence, the player using the "black" or "darker-colored" pieces in a chess set to symbolize the newly renamed Conventional Units CAN BE the Starting Player!  All that is necessary is making sure that the h1 square on a chess or checkers board is in fact the "black" or "darker-colored" square.  Then the opposing Player with the "white" or "lighter-colored" chess pieces used to symbolize the new Units would be the Responding Player.</p>
            <p className="padding-bottom">In today's ever-evolving cultural and social landscape, the best way to ensure inclusivity for traditionally marginalized groups of people is to ALLOW ALL of them to play Deterrence in the same way and from the same "point-of-view."  In the future, Players can "play" as the Treaty Organization, country, state, school, political party, or other such "roles" as they wish, even being able to customize the names of their individual Units.  The possibilities are endless!</p>
            <p className="padding-bottom">To set up a game of Deterrence, do exactly the same things as you would for a chess game.  Just as in chess, the horizontal rows of squares are called RANKS, while the vertical columns of squares are called FILES.  Each rank is numbered 1 through 8, starting from the starting Player's rank closest to that Player.  Just as in chess, the files are labelled from the letter (a) through the letter (h), starting from the Starting Player's left-hand side.  Click the button located at the top of this section to see the board with traditional "lighter-coloring" on the h1 square!</p>
            <p className="padding-bottom">In addition to your brand-new Conventional Units, in Deterrence, three new types of Nuclear Units join the fray, along with the new SDI Defense Units to protect designated Units from destruction in a Nuclear Unit firing.  These Units can be symbolized by whatever the Players wish, such as coins, poker chips, or other such "markers."  Traditionally, when the game first underwent testing, the Starting Player used 6 of the red checkers for the Nuclear Units, and 6 of the black checkers for the SDI Defense Units.  The opposite holds true for the Responding Player, who used the remaining 6 black checkers to denote Nuclear Units and the remaining 6 red checkers to denote the SDI Defense Units.  It is important to note that the game DOES NOT START OFF with any other Units besides each Player's 16 total Conventional Units.</p>
            <h4 className="bold padding-top padding-bottom game-concepts">GAME BOARD STARTING LOCATIONS FOR ALL CONVENTIONAL UNITS:</h4>
            <hr className="rule padding-bottom" />
            <h4 className="text-center padding-top padding-bottom nukes-setting-color">ALL 16 INFANTRY UNITS TOTAL:</h4>
            <p className="padding-top padding-bottom">For the Starting Player, the 8 Infantry Units start off on squares a2, b2, c2, d2, e2, f2, g2, and h2, just as the Pawns in chess do.  For the Responding Player, those 8 Infantry Units start off on squares a7, b7, c7, d7, e7, f7, g7, and h7.</p>
            <h4 className="text-center padding-top padding-bottom nukes-setting-color">ALL 4 LIEUTENANT UNITS TOTAL:</h4>
            <p className="padding-top padding-bottom">For the Starting Player, the 2 Lieutenant Units start off on squares a1 and h1.  For the two Responding Lieutenant Units, the squares they start on are squares a8 and h8.</p>
            <h4 className="text-center padding-top padding-bottom nukes-setting-color">ALL 4 AIRDROP UNITS TOTAL:</h4>
            <p className="padding-top padding-bottom">Moving inward, for the Starting Player, the two Airdrop Units start on squares b1 and g1, and then their Responding counterparts begin affairs on squares b8 and g8.</p>
            <h4 className="text-center padding-top padding-bottom nukes-setting-color">ALL 4 SERGEANT UNITS TOTAL:</h4>
            <p className="padding-top padding-bottom">Continuing on, the two Starting Sergeant Units rest on squares c1 and f1, and their Responding Sergeants get things going on squares c8 and f8.</p>
            <h4 className="text-center padding-top padding-bottom nukes-setting-color">BOTH GENERAL UNITS:</h4>
            <p className="padding-top padding-bottom">In the middle of the first rank, the Starting General rests on square d1, while the Responding adversary starts on square d8.</p>
            <h4 className="text-center padding-top padding-bottom nukes-setting-color">BOTH PRESIDENT UNITS:</h4>
            <p className="padding-top padding-bottom">The Starting Player's President Unit starts on square e1, while the Responding Player's leader begins on square e8.</p>
            <hr className="divider" />
            <p className="padding-top padding-bottom">For a detailed explanation for the new Nuclear and SDI Defense Units, see Official Rules:  All Nuclear/SDI Defense Unit Rules, for more information.  For the Nuclear Units, each Player use one checker for the Tactical Nuclear Unit, star-side up for a Mobile Tactical Nuclear Unit (MTN), and crown-side up for the Fixed Tactical Nuclear Unit (FTN).  All types of Mobile Nuclear Units CAN BE MOVED, while their Fixed colleagues CANNOT MOVE.  In the present form of Deterrence, each Player may have ONE TOTAL Tactical Nuclear Unit, with type decided at Deploy (D) time.  The purpose of this Rule is to ensure less likelihood of a game immediately devolving into a nuclear exchange.  Both the tactics and the strategy of chess need to be preserved.  The future Deterrence Working Group might change this rule in future versions of Deterrence, based upon the will of the Players who subscribe to online services through this website.  See Official Rules: All Unit Codes: Nuclear Units, to find these specific Units and to learn more about them.</p>
            <p className="padding-bottom">For the new Intermediate Nuclear Unit, each Player uses two checkers each of the designated color "stacked" one upon the other, with the top checker showing a star for the Mobile Intermediate Nuclear Unit (MIN), and the crown showing on the top checker for the Fixed Intermediate Nuclear Unit (FIN).  In the present form of Deterrence, each Player may have ONE TOTAL Intermediate Nuclear Unit, with type decided at Deploy (D) time.  The purpose of this Rule, and other FIXED RULES for Nuclear Units, is to ensure less likelihood of a game immediately devolving into a nuclear exchange.  Both the tactics and the strategy of chess need to be preserved.  The future Deterrence Working Group might change this rule in future versions of Deterrence, based upon the will of the Players who subscribe to online services through this website.  See Official Rules: All Unit Codes: Nuclear Units, to find these specific Units and to learn more about them.</p>
            <p className="padding-bottom">Lastly, the biggest of the blower-uppers enters the room:  The Strategic Nuclear Unit (SN), which is always a Fixed model due to its unlimited range, with the stack of 3 checkers with the crown showing up on the topmost checker symbolizing this Unit.  In the present form of Deterrence, each Player may have ONE TOTAL Strategic Nuclear Unit, which is always Fixed at Deploy (D) time.  The purpose of this Rule, and other FIXED RULES (Rules THAT CANNOT EVER be changed during either one or both rounds of Treaty negotiations) for Nuclear Units, is to ensure less likelihood of a game immediately devolving into a nuclear exchange.  Both the tactics and the strategy of chess need to be preserved.  The future Deterrence Working Group might change this rule in future versions of Deterrence, based upon the will of the Players who subscribe to online services through this website.  See Official Rules: All Unit Codes: Nuclear Units, to find these specific Units and to learn more about them.</p>
            <p className="padding-bottom">Finally, who wants to lose a Unit and not get anything in return for it?  Well, to prevent the loss of selected Units in different ways, the SDI Defense Units can be "bought," if you will, with Score Sheet Game Points and placed on the Game Board.  Up to six (6) total SDI Defense Unit "buys" can be made throughout the course of an entire game, inclusive of both types.  The first type of SDI Defense Unit is the Mobile SDI Defense Unit (MSDI), and then of course the Fixed SDI Defense Unit (FSDI).  As is ths case above with the 3 types of Nuclear Units, the Mobile Units can move, while the Fixed ones CANNOT MOVE.  The Mobile SDI Defense Unit CAN ONLY PROTECT one other "paired" Unit at a time, but does not have to protect the one Unit.  Whereas the Fixed SDI Defense Unit PROTECTS ALL UNITS on that one square it rests on, from nuclear annilihation.</p>
        <h2 className="text-center-bold">When the Game Starts:</h2>
            <p className="padding-top padding-bottom">In the game of chess, "White" has 20 possible "moves" to make to get the game underway.   Sixteen possible "pawn" moves and four possible "Knight" moves.  In Deterrence, this STARTING PLAYER can make the same sixteen Infantry Unit (as in chess, no code) Complete Turns, four Airdrop Unit (A) Complete Turns, one of the available Declare Envoy (E=)Complete Turns (7 possibilities), the Begin Treaty Negotiations (BNEG) Complete Turn, and the eight possible squares to Deploy (D) a Tactical Nuclear Unit Complete Turn, for a new total of 36 possible Complete Turns!  Note that SDI Defense Units CANNOT BE BOUGHT until AFTER THE OPPOSING PLAYER has AT LEAST ONE previously ACTIVATED NUCLEAR UNIT on the Game Board.  This Rule is Fixed and CANNOT BE CHANGED.</p>  
            <p className="padding-bottom">Refer to Official Rules:  All Score Sheet Rules, and other locations throughout these Rules, to learn the differences between a Complete Turn (everything moving and changing on that Player's Turn) versus an Element within a Complete Turn (Can either be Order Elements, or Move Elements, see these sections of the Official Rules for more information and to learn about the dizzying array of possibilities here)!  It's like the black-and-white TV just DISAPPEARED and GOT REPLACED by a new 8K Ultra High-Definition color unit.  What an amazing difference!</p>
        <h2 className="text-center-bold">When the Game Ends:</h2>
            <p className="padding-top padding-bottom">In chess, the Players know that either one Player WINS and the opposing Player LOSES, or the game ends in a draw (neither of the two Players BEING NEITHER A WINNER NOR A LOSER OF THAT GAME).  Any one of the same events can happen in Deterrence, with the following possibilities for end-of-game results:</p>
            <p>Before getting to that, just as in chess, the overall goal of the game is to be the Player who <em>checkmates</em> the opposing President ((P), referred to as the "King" in chess) WHILE ALSO having scored more total Game Points (Cash Value Game Points being ADDED TO the previously scored Score Sheet Game Points ONLY WHEN the POSITIONAL PORTION (1ST OUTCOME POINT) has been decided) than the vanquished opposing Player.  Those who have regularly played in chess tournaments know that a chess game only offers one "point" in formal tournament play describing the outcome of the game.</p>
            <h3>A GAME ENDS IN A WIN FOR ONE PLAYER AND A LOSS FOR THE OTHER PLAYER if ONE of the following occurs:</h3>
            <h4 className="text-center padding-bottom nukes-setting-color">CHECKMATE (#):</h4>
              <p className="padding-top padding-bottom">This Code allows either player to denote, at the end of a Complete Turn indicating a Conventional Unit's movement, the inevitable capture of the opposing President on the following Complete Turn.  If the Conventional Unit delivering the threat of capture ( check ) cannot be LEGALLY CAPTURED by the Player under attack, or if the President CANNOT MOVE to a square free of threat of capture, or if a Nuclear Unit cannot be fired against the Unit(s) responsible for the attack, or a blocking friendly Unit cannot be placed in front of the attacking Unit(s) (option not available for Airdrop Units delivering checkmate), or a Fixed SDI Defense Unit cannot be "bought" and placed in the path of attack, the (#) operator is used to denote <em>CHECKMATE</em>, and the game ends.  Note that an Armed Nuclear Unit in RANGE of an opposing President NOT PROTECTED by SDI Defense of either type, IS NOT in Check, and it is legal for that attacked Player to execute a Complete Turn besides one that relieves that threat (since Strategic Nuclear Units have unlimited RANGE anyway).  Additionally, the Treaty Negotiations Chart can be changed to allow an attacking Player the ability to capture a President accidentally left in Check (regardless of the existence of a checkmate position, meaning that if this option is selected in the Treaty, a defending Player CAN LEGALLY capture a Conventional Unit responsible for what otherwise would qualify as checkmate) by the defending Player on the prior Complete Turn (the speed chess rule), also ending the game as if checkmate had occurred.  There is a Checkmate Points Setting and the Variable Rule described above contained within the Treaty Negotiations Chart associated with this Operator Code.  The Default Settings are: +10.0 Points and NO, respectively.  Players need to realize that potential game-ending Complete Turns usually result in the need to apply Points on the Score Sheet, and that must be done accurately.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">One of the two Players Resigns <em>(resigns)</em>:</h4>
              <p className="padding-top padding-bottom">When one Player on the CURRENT Complete Turn concedes positional defeat, that Player resigns and indicates that decision by using the Resigns (resigns) Score Sheet Operator Code.  See Official Rules:  All Order Element Codes, Resigns Order Element Code, for more information.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">When One of the two Presidents (when non-SDI-Defense Protected) gets destroyed in a Nuclear Unit Firing move:</h4>
              <p className="padding-top padding-bottom">Like the above alternatives, this Move Element ends the game, as though a checkmate (#) or a resignation of position has occurred(resigns).  See Official Rules:  All Move Element Codes:  Fire Move Element Code for more information.  Also refer to Official Rules:  All Treaty Rules:  Section Two:  Setting Six for more information on this condition.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">In tournament play only:  When one Player recognizes that the other Player has run out of time (time indicator displays 00:00 on the device) on the time-contol device, regardless of which Player is currently making a Complete Turn.</h4>
            <h3>A GAME ENDS IN A DRAW (neither of the two Players neither winning nor losing the game if ONE of the following occurs:</h3>
            <h4 className="text-center padding-bottom nukes-setting-color">Draw When the Consecutive Complete Turn Limit is Reached:</h4>
              <p className="padding-top padding-bottom">For a detailed explanation of this rule, refer to Official Rules:  All Treaty Rules: Section One: Setting One.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">Draw when the number of repetitions of the position has been reached.</h4>
              <p className="padding-top padding-bottom">For a detailed explanation of this rule, refer to Official Rules:  All Treaty Rules: Section One: Setting Four.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">Draw by perpetual check</h4>
              <p className="padding-top padding-bottom">When one Player continually issues threats of capture of the opposing Player's President Unit (P) (check (+)) by one or more Conventional Units WHILE THE DEFENDING PLAYER CAN RELIEVE THOSE THREATS BUT NOT prevent the game from continuing with a new series of checks being issued, the POSITIONAL PORTION of the game is declared drawn.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">Draw by mutual agreement</h4>
              <p className="padding-top padding-bottom">Either Player AT ANY TIME during the game, can ASK THE OTHER PLAYER FOR A DRAW FOR THE POSITIONAL PORTION OF THE GAME.  If the other Player accepts, that POSITIONAL PORTION OF THE GAME ONLY ends in a draw.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">Draw by stalemate.</h4>
              <p className="padding-top padding-bottom">When one Player DOES NOT CURRENTLY THREATEN THE OPPOSING PRESIDENT WITH CAPTURE (+), but ALL OTHER LEGALLY POSSIBLE MOVE ELEMENTS BY THE PRESIDENT WOULD RESULT IN CHECK and also NO OTHER LEGAL ELEMENTS of either the Move or Order Type can be made, the game is declared drawn by virtue of STALEMATE.  This condition occurs less frequently in a game of Deterrence than in a game of chess, since the defending Player again has more alternatives to "tempo out" and make it the other Player's Complete Turn to take.</p>
            <h4 className="text-center padding-bottom nukes-setting-color">In tournament play only:  Draw when time for BOTH PLAYERS expires. </h4>
            <p className="padding-top padding-bottom">The game is declared drawn when one Player recognizes that both Players have no remaining time on the time-control device (time indicator displays 00:00 on the device), regardless of which Player is currently making a Complete Turn. </p>
            <hr className="divider"/>
            <h3 className="text-center-bold">The Six Ways to Distribute the Two Outcome Points:</h3>
            <h4 className="padding-top padding-bottom"><em>FIRST WAY:  </em>The Starting Player WINS THE GAME, and BOTH of the TWO POSSIBLE OUTCOME Points, which is a 2.0 - 0.0 result.</h4>
            <h4 className="padding-top padding-bottom"><em>SECOND WAY:  </em>The Starting Player WINS THE GAME, and ONE of the TWO POSSIBLE OUTCOME Points, while sharing, or HALVING, the OTHER one which is a 1.5 - 0.5 result.</h4>
            <h4 className="padding-top padding-bottom"><em>THIRD WAY:  </em>The game ends in a DRAW, with EACH PLAYER WINNING ONE of the TWO POSSIBLE OUTCOME Points, which is a 1.0 - 1.0 result.</h4>
            <h4 className="padding-top padding-bottom"><em>FOURTH WAY:  </em>The game ends in a DRAW, and BOTH of the TWO POSSIBLE OUTCOME Points ARE HALVED by EACH PLAYER, which is a 1.0 - 1.0 result.</h4>
            <h4 className="padding-top padding-bottom"><em>FIFTH WAY:  </em>The Responding Player WINS THE GAME, and ONE of the TWO POSSIBLE OUTCOME Points, while sharing, or HALVING, the OTHER one, which is a 0.5 - 1.5 result.</h4>
            <h4 className="padding-top padding-bottom"><em>SIXTH WAY:  </em>The Responding Player WINS THE GAME, and BOTH of the TWO POSSIBLE OUTCOME Points, which is a 0.0 - 2.0 result.</h4>
          
    </div>
  )
}

export default GenGameRules;