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
            Hi, I'm Aliya. I'm beginner Web Developer. 

          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            > I am a passionate and aspiring web developer with a strong desire to create engaging and user-friendly websites. 
            With a solid foundation in HTML, CSS, JavaScript, React and a little bit of Redux. 
            </p>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              I am constantly expanding my skills and exploring new technologies to stay up-to-date in the ever-evolving field of web development.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            
          }}
        >
          <img style = {{maxWidth: "100%", 
            maxHeight: '450px',}} src={image} />
        </div>
      </div>
    </section>
  );
};

export default About;