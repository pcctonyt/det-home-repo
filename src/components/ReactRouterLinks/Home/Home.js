import React from "react";
import SellTheGame from "./components/SellTheGame";

const Home = () => {
  return (
    <div>
        <h1>Deterrence Home Page</h1>
        <h2>This will have the introductory content to "sell the game."</h2>
        <SellTheGame />
        <h2>This will have the gee whiz nuclear weapons video links to click on.</h2>
        <h3>This will have links to videos talking about the problems with chess.</h3>
        <h3>The react router dom navbar appears on all pages.</h3>
        <h3>The buttons to buy stuff (the Officially licensed coffee cups, T-Shirts, clocks, sets, boards, maybe a book or two, videos) will be here.</h3>
        <h3>We'll need the links to the third-party licensed future "Authorized Resellers" of all of these items.</h3>
        <h3>Site wouldn't be able to go live until intelectual property deal is done.</h3>
        <section>
            <h2>Basic Intellectual Property Rights Deal Proposal</h2>
            <p>Sell the national and international brick-and-mortar and online licensing rights to the game</p>
            <p>This would cover the copyrighting, trademarking, logos, etc.</p>
            <p>Get the seven-year royalties deal for percentage of the gross revenues each calendar month: 7% first year ( starting on 1/1/2024), 6% next year, 5% third year, 4% fourth year, 3% fifth year, 2% sixth year, and 1% in-perpetuity</p>
            <p>Get money to code this site for the next 4 months</p>
            <p>Money would cover both hourly wages AND ANY ADVANCE on the royalties if the intellectual property deal is done up-front.</p>
            <p>Need at least $3,000 per month gross ($12,000 total)</p>
        </section>
    </div>
  )
}

export default Home;