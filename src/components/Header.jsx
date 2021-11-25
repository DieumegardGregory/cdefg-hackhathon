import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <header>
        <Link to="/mood">
          <button type="button" className="button-mood"></button>{" "}
        </Link>
        <Link to="/party">
          <button type="button" className="button-party"></button>
        </Link>
        <Link to="/contact">
          <button type="button" className="button-contact"></button>
        </Link>
      </header>
    </div>
  );
}
