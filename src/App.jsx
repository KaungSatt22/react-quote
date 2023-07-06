import React from "react";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuote from "./pages/AddQuote";
import AllQuote from "./pages/AllQuote";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allquotes" element={<AllQuote />} />
          <Route path="/addquote" element={<AddQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
