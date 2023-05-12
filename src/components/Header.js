import React from "react";

const Header = () => {
  const headerNav = ["About", "Experience", "Projects", "Contacts"];

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
            }}
          >
            {el}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;