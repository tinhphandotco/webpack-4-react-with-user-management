import React from "react";
import PropTypes from "prop-types";

import UsersContext from "../context/UsersContext";

import "./UsersTable.scss";

function UsersTable(props) {
  const { onAddRecord } = React.useContext(UsersContext);

  return (
    <div>
      <div className="add-record">
        <button onClick={onAddRecord}>Add record</button>
      </div>
      <div className="users-table">
        <h4 className="title">Users</h4>
        <table id="users">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

UsersTable.propTypes = {};

UsersTable.defaultProps = {};

export default UsersTable;
