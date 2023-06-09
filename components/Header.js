import React from "react";

function Header({ pos }) {
  return (
    <div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li style={{ float: pos}}>
          <a class="active" href="#about">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
