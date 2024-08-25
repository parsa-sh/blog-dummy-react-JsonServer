import React from "react";
import styled from "./header.module.css";
import { Link } from "react-router-dom";
const Header = (probs) => {
  return (
    <div className={styled.header}>
      <h1>{probs.title}</h1>
      <ul>
        <li><Link to="/">لیست مقالات</Link></li>
        <li><Link to="/CreateArticle">مقاله جدید</Link></li>
        <li><Link to="/About">درباره</Link></li>
      </ul>
    </div>
  );
};

export default Header;
