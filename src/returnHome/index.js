import React from "react";
import { Link } from "react-router-dom";
import "./returnHome.css";

function ReturnHome() {
  return (
    <div className="returnHome">
      <Link to="/game">Home</Link>
    </div>
  );
}

export default ReturnHome;
