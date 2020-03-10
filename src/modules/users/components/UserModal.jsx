import React from "react";

import UsersContext from "../context/UsersContext";
import UserModalTab from "./UserModalTab";

import "./UserModal.scss";

const tabs = [
  {
    label: "Name"
  },
  {
    label: "Email"
  },
  {
    label: "Phone"
  }
];

function UserModal() {
  const [tab, setTab] = React.useState(0);
  const { appState, onCloseModal } = React.useContext(UsersContext);

  const handleChangeTab = index => () => {
    setTab(index);
  };

  return (
    <div className="user-modal">
      <div
        id="myModal"
        className={`modal modal-${appState.isOpenModal ? "open" : "close"}`}
      >
        <div className="modal-content">
          <div className="modal-btnclose">
            <span type="button" onClick={onCloseModal} className="close">
              &times;
            </span>
          </div>
          <div>
            <UserModalTab
              tabs={tabs}
              currentTab={tab}
              onChangeTab={handleChangeTab}
            />
            <div className="field">
              <input placeholder="Email" type="text"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
