import React from "react";
import ContactUs from "./components/ReactRouterLinks/ContactUs";
import Forum from "./components/ReactRouterLinks/Forum/Forum";
import Header from "./components/Header";
import Home from "./components/ReactRouterLinks/Home";
import LearnMore from "./components/ReactRouterLinks/LearnMore";
import Limited from "./components/ReactRouterLinks/Limited";
//import OfficialRules from "./components/ReactRouterLinks/OfficialRules/Rules";
import Online from "./components/ReactRouterLinks/Online"
import Ultimate from "./components/ReactRouterLinks/Ultimate";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header>
          <Header />
      </header>
      <main>
        <Routes>
            <Route path="/contact" element={<ContactUs />} exact />
            <Route path="/forum" element={<Forum />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="/online" element={<Online />} exact />
            <Route path="/limited" element={<Limited />} exact />
            <Route path="/ultimate" element={<Ultimate />} exact />
            <Route path="/learn" element={<LearnMore />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;



//left off at 1:13:10 on full MERN Indian Coders guide video you tube