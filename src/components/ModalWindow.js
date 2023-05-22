import React, { useState } from "react";
import "../App.css";

const ModalWindow = (props) => {
  const { setModal } = props;
  
  const handleGoBack = () => {
    setModal(false);
  };

  const email = 'alturgimb@gmail.com';
  const telegramUsername = 'Aliya_turgimb';

  return (
    <div className="modal-window" id="modal-window">
        <div className="modal-content">
          <div className="modal-outline">
            <label>Name: </label>
            <p>Aliya Turgimbayeva</p>
            <label style={{ marginTop: "20px" }}>Email: </label>
            <p ><a class ="modal-col" href={`mailto:${email}`}>{email}</a></p>
            <label style={{ marginTop: "20px" }}>Tel: </label>
            <p>+7 702 5000721</p>
            <p><a href={`https://t.me/${telegramUsername}`}>Напишите мне в Telegram</a></p>
            <label style={{ marginTop: "20px" }}>GitHub: </label>
            <p><a href={`https://github.com/Aliyaturg`}>GitHub portfolio </a></p>
            <div
              style={{ display: "flex", columnGap: "20px", marginTop: "20px" }}
            >
              <button className="button" onClick={handleGoBack}>
                Back
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ModalWindow;