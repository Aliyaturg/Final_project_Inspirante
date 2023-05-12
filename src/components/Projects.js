import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import todolistImg from "../assets/todolist.png";


const Projects = () => {
  return (
    <section className="border-bottom" id="projects">
      <div className="projects-page">
        <h1 style={{ paddingTop: "100px" }}>Projects I’ve Worked On</h1>
        <div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-between",
            }}
          >
            <img src={todolistImg} width="650" height="400" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "100px",
              }}
            >
              <h2 style={{ fontSize: "40px", margin: 0 }}>Todo List App</h2>
              <p style={{ maxWidth: "500px" }}>
                The Todo List app on React helps users keep track of tasks.
              </p>
            </div>
          </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;