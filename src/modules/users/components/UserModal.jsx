import React from "react";

import UsersContext from "../context/UsersContext";
import UserModalTab from "./UserModalTab";

import "./UserModal.scss";

const tabs = [
  {
    label: "Name",
    input: {
      name: "name",
      type: "text",
      placeholder: "Name"
    }
  },
  {
    label: "Email",
    input: {
      name: "email",
      type: "text",
      placeholder: "Email"
    }
  },
  {
    label: "Phone",
    input: {
      name: "phone",
      type: "number",
      placeholder: "Phone"
    }
  }
];

function UserModal() {
  const [tab, setTab] = React.useState(0);
  const { appState, addNewUser, onCloseModal } = React.useContext(UsersContext);
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    phone: ""
  });

  const input = React.useMemo(() => tabs[tab].input, [tab]);
  const handleChangeTab = index => () => {
    setTab(index);
  };

  const onChangeInput = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const onCancelModal = () => {
    onCloseModal();
    setTab(0);
    setFormValues({
      name: "",
      email: "",
      phone: ""
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    addNewUser(formValues);
    onCancelModal();
  }

  return (
    <div className="user-modal">
      <div
        id="myModal"
        className={`modal modal-${appState.isOpenModal ? "open" : "close"}`}
      >
        <div className="modal-content">
          <div className="modal-btnclose">
            <span type="button" onClick={onCancelModal} className="close">
              &times;
            </span>
          </div>
          <form onSubmit={onSubmitForm}>
            <UserModalTab
              tabs={tabs}
              currentTab={tab}
              onChangeTab={handleChangeTab}
            />
            <div className="field">
              <input
                value={formValues[input.name]}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                onChange={onChangeInput}
                required
              />
            </div>
            <div className="control">
              <button type="submit" className="btn control-ok">Save</button>
              <button onClick={onCancelModal} className="btn control-nok">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
