import React from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage.jsx";
import CreateArticle from "./pages/CreateArticle/CreateArticle.jsx";
import { Routes, Route } from "react-router-dom";
import "./app.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Articles/:name" element={<ArticlesPage />} />
        <Route path="/CreateArticle" element={<CreateArticle />} />
      </Routes>
    </div>
  );
};

export default App;
