import React from "react";

const experienceJobs = [
  {
    year: "November 2022 - curently",
    job: "Intern Developer",
    location: "Company",
    description:
      "Lorem Ipsum Description Text",
  },
  {
    year: "Aug 2021 - curently",
    job: "Structural Engineer",
    location: "Astana, Kazakhstan",
    description:
      "Designing of working drawings of Reinforced concrete section",
  },
];

const Experience = () => {
  return (
    <section className="border-bottom" id="experience">
      <div className="experience">
        <h1 style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          Experience
        </h1>
        <div>
          {experienceJobs.map((el) => {
            return (
              <div style={{ display: "flex" }}>
                <p style={{ width: "200px" }}>{el.year}</p>
                <div style={{ paddingLeft: "100px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      width="20"
                      height="20"
                      src={require("../assets/Pointer.png")}
                    />
                    <p style={{ paddingLeft: "10px" }}>{el.job}</p>
                  </div>
                  <div>{el.location}</div>
                  <p style={{ fontWeight: 300 }}>{el.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;