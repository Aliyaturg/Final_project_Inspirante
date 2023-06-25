import React from "react";
import image from "../assets/motiv2.jpg";

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
          <h1>About App</h1>
          <p style={{ width: "850px",
          fontSize: "32px",
        }}>
          Inspirante - it's your dedicated companion on your journey towards personal growth and achievement.

          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                maxWidth: "850px",
                fontWeight: 300,
                fontSize: "32px",
              }}
            > Are you looking for an extra boost of motivation to help you achieve your goals? Look no further! 
            Introducing Inspirante, the ultimate web application designed to ignite your inner drive and keep you focused on your path to success.
            
            </p>
            <p
              style={{
                maxWidth: "850px",
                fontWeight: 300,
                fontSize: "32px",
              }}
            >
              With its intuitive interface and powerful features, Inspirante empowers you to stay motivated, overcome obstacles, and reach new heights.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            width:"850px"
            
          }}
        >
          <img style = {{maxWidth: "100%", 
            maxHeight: '600px',}} src={image} />
        </div>
      </div>
    </section>
  );
};

export default About;