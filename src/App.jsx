/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Copyright from "./components/Copyright/Copyright";
import InfoPage from "./pages/infoPage/InfoPage";
import FoxDetail from "./pages/FoxDetail/FoxDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* Configuração de Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fotos" element={<Gallery />} />
          <Route path="/Detalhes" element={<InfoPage />} />
          <Route path="/Detalhes/:slug" element={<FoxDetail />} />
        </Routes>
        <Copyright />
      </div>
    </Router>
  );
};

export default App;
