
import "./App.css";
import About from "./components/About";
import SayHello from "./components/SayHello";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Component1 from "./components/Component1";
import Projects from "./components/Projects";
import React, { useState } from "react";

function App() {
 
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />
      <Component1 />
      <About />
      <Experience />
      <Projects />
      <SayHello modal={modal} setModal={setModal} handleModal={handleModal}/>
      <Footer />
    </div>
  );
}

export default App;