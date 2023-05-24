import React from "react";

const Header = () => {
  const headerNav = ["About", "Experience", "Projects", "Contacts"];

  const scrollTo = (elementId) => {
    console.log(elementId);
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <h2>
        Aliya
      </h2>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {headerNav.map((el) => (
          <li
            style={{
              paddingLeft: "30px",
              fontFamily: "Inter",
              fontSize: 15,
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