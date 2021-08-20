import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <p>Elections have long been conducted by in-person voting or mailing methods resulting in potential uncounted votes. 
        With blockchain technology, we are able to make voting more secure and transparent. 
        Every citizen has received an anonymous voter ID.
        Multiple votes with the same ID will only count the first entry. 
      </p>
      <button onClick={props.onCancel}>I understand</button>
    </div>
  );
}

export default Modal;
