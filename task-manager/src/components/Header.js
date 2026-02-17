import React from "react";

function Header({ total, completed, remaining }) {
  return (
    <header className="header">
      <h1>Task Manager – Graduate Student Planner</h1>
      <div className="stats">
        <span className="stat">
          <strong>{total}</strong> Total
        </span>
        <span className="stat stat-completed">
          <strong>{completed}</strong> Completed
        </span>
        <span className="stat stat-remaining">
          <strong>{remaining}</strong> Remaining
        </span>
      </div>
    </header>
  );
}

export default Header;
