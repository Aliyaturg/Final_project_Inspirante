import React from "react";
import myCV from "../assets/CV_Aliya.pdf";

const Component1 = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = myCV;
    link.download = "myCV.pdf";
    link.click();
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>
          Hi, I’m Aliya,
          <br />
          I build things for the web.
        </h1>
        <p style={{ marginTop: "20px" }}>
          I’m Frontend Developer and this is my portfolio.
        </p>
        <button
          style={{ marginTop: "20px" }}
          className="button"
          onClick={download}
        >
          Check out my CV
        </button>
      </div>
    </section>
  );
};

export default Component1;