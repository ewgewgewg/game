import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <h1>Game Site</h1>
      <div>
        <Link to="/game/roots">Underground Roots Game</Link>
      </div>
      <div>
        <Link to="/game/collide">Collide Game</Link>
      </div>
      <div>
        <Link to="/game/quest">Quest Game</Link>
      </div>
    </div>
  );
}

export default Home;
