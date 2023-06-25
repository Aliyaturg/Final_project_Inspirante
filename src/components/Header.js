import React from "react";
import image4 from "../assets/icons.png";

const Header = () => {
  const headerNav = ["About", "Login", "Register", "Contact"];

  const scrollTo = (elementId) => {
    console.log(elementId);
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className = "head-motiv">
        <img className = "img-motiv" src={image4} alt="Иконка" />
      <h2>
        Inspirante
      </h2>
      </div>
      
      <ul style={{ display: "flex", listStyle: "none" }}>
        {headerNav.map((el) => (
          <li
            style={{
              paddingLeft: "30px",
              fontFamily: "Inter",
              fontSize: 25,
              cursor: "pointer",
            }}
            onClick={() => scrollTo(el.toLowerCase())}
          >
            {el}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;