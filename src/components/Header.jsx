import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo-header-01.png";

export default function Header({ title }) {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="logo-header" className="logo-header" />
      </Link>
      <h1>{title}</h1>
      <header>
        <Link to="/mood">
          <button type="button" className="button-mood"></button>
        </Link>
        <Link to="/party">
          <button type="button" className="button-party"></button>
        </Link>
        <Link to="/contact">
          <button type="button" className="button-contact"></button>
        </Link>
      </header>
      <h2>{title}</h2>
    </div>
  );
}
