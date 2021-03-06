import React from "react";
import "./Square.css";

export default function Square({
  width,
  height,
  children,
  isCurrent,
  onClick,
}) {

  return (
    <div onClick={onClick} className="Square">
      {children === "X" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ff2825"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
      {children === "O" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#7bc62d"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )}
    </div>
  );
}
