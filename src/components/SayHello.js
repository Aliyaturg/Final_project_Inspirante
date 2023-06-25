import React from "react";
import ModalWindow from "./ModalWindow.js";


const SayHello = (props) => { 

  const { setModal, handleModal, modal } = props;
    
    return (
    <>
      <div className="border-bottom" id="contacts">
        <div className="contacts">
          <h1>Text</h1>
          <p style={{ maxWidth: "500px" }}>
          text
          </p>
          <button className="button" onClick={handleModal}>
           Text
          </button>
        </div>
      </div>
      {modal && <ModalWindow setModal={setModal} />}
    </>
  );
}

  

export default SayHello;