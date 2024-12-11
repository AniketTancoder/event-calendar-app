import React from "react";

const Header = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div className="calendar-header">
      <button onClick={onPrevMonth} className="nav-button">
        Previous
      </button>
      <h2 className="current-month">
        {currentDate.toLocaleDateString("default", { month: "long", year: "numeric" })}
      </h2>
      <button onClick={onNextMonth} className="nav-button">
        Next
      </button>
    </div>
  );
};

export default Header;
