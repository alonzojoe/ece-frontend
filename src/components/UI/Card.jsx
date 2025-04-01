import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="card border border position-relative">
    <span className="card-legend bg-primary text-white fw-semibold rounded px-3 py-2">
        {title}
      </span>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
