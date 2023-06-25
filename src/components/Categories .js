import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import imgOne from "../assets/job.png";
import imgTwo from "../assets/book.png";
import imgThree from "../assets/ceiling-light.png";


const Projects = () => {
  return (
    <section className="border-bottom" id="projects">
      <div className="projects-page">
        <h1 style={{ paddingTop: "100px" }}>Categories</h1>
        <div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-evenly",
            }}
          >
            <img src={imgOne} />
            <img src={imgTwo} />
            <img src={imgThree} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "100px",
              }}
            >
              
              
            </div>
          </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;