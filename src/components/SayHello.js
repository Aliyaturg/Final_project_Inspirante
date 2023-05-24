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
          If you have any questions or would like to discuss potential collaborations, please don't hesitate to reach out. 
          Feel free to contact with me using the contact info below. 
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