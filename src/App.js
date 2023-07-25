
import "./App.css";
import GetStarted from "./components/Get Started";
import SayHello from "./components/SayHello";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Component1 from "./components/Component1";
import Categories  from "./components/Categories ";
import React, { useState } from "react";
import MyChatComponent from "./components/MyChatComponent";




function App() {
 
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />
      <Component1 />
      <GetStarted />
      <Categories />
      <MyChatComponent />
      <SayHello modal={modal} setModal={setModal} handleModal={handleModal}/>
      <Footer />
    </div>
  );
}

export default App;