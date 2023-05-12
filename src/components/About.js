import React from "react";
import image from "../assets/imageAboutMe.png";

const About = () => {
  return (
    <section className="border-bottom" id="about">
      <div className="about-me">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>About me</h1>
          <p style={{ width: "629px" }}>
            Hi, I'm Aliya. I build things for the web.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            > I'm software developer and this is my portfolio.
            </p>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              Lorem Ipsum Description text
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={image} />
        </div>
      </div>
    </section>
  );
};

export default About;