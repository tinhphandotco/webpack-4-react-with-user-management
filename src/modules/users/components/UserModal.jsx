import React from "react";

import UsersContext from "../context/UsersContext";

import './UserModal.scss'

function UserModal() {
  const { appState, onCloseModal } = React.useContext(UsersContext);

  return (
    <div className="user-modal">
      <div id="myModal" className={`modal modal-${appState.isOpenModal ? 'open' : 'close'}`}>
        <div className="modal-content">
          <span type="button" onClick={onCloseModal} className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
