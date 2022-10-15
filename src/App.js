import React from "react";
import ContactUs from "./components/ReactRouterLinks/ContactUs";
import Forum from "./components/ReactRouterLinks/Forum/Forum";
import Header from "./components/Header";
import Home from "./components/ReactRouterLinks/Home/Home";
import Game from "./components/ReactRouterLinks/Game/Game";
import Limited from "./components/ReactRouterLinks/Limited";
import Online from "./components/ReactRouterLinks/Online"
import Ultimate from "./components/ReactRouterLinks/Ultimate";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header>
          <Header />
      </header>
      <main className="white-background">
        <Routes>
            <Route path="/contact" element={<ContactUs />} exact />
            <Route path="/forum" element={<Forum />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="/online" element={<Online />} exact />
            <Route path="/limited" element={<Limited />} exact />
            <Route path="/ultimate" element={<Ultimate />} exact />
            <Route path="/play" element={<Game />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;



//left off at 1:13:10 on full MERN Indian Coders guide video you tube