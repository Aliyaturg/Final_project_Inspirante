import React from "react";
import ModalWindow from "./ModalWindow.js";


const SayHello = (props) => { 

  const { setModal, handleModal, modal } = props;
    
    return (
    <>
      <div className="border-bottom" id="contacts">
        <div className="contacts">
          <h1>Say Hello</h1>
          <p style={{ maxWidth: "500px" }}>
            Feel free to contact with me using the contact info below. Let's create together
            something amazing!
          </p>
          <button className="button" onClick={handleModal}>
            Get In Touch
          </button>
        </div>
      </div>
      {modal && <ModalWindow setModal={setModal} />}
    </>
  );
}

  

export default SayHello;