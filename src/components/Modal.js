import React from "react";

function Modal(props) {
  return (
    <div id='myModal' class='modal'>
      <div className='modal-wrapper'>
        <div className='modal-header'>
          <h3 className='Modal Header'></h3>
        </div>
        <div className='modal-body'>
          <p className=''>{props.children}</p>
        </div>
        <div className='modal-footer'>
          <button className='btn-cancel' onClick={props.close}>
            X
          </button>
          <button className='btn-continue'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
