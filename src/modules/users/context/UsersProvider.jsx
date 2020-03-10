import React from "react";
import UsersContext from "./UsersContext";

const initState = {
  byId: {},
  allIds: [],
  appState: {
    isOpenModal: false,
    modalType: 'add',
    userCreating: {},
    userEditting: {}
  },
};

function UserReducer(state, action) {
  switch(action.type) {
    case 'OPEN_NEW_USER_MODAL': {
      return {
        ...state,
        appState: {
          ...state.appState,
          isOpenModal: true,
          modalType: 'add',
          userCreating: {}
        }
      }
    }

    case 'CLOSE_MODAL': {
      return {
        ...state,
        appState: {
          isOpenModal: false,
        }
      }
    }

    default: return state;
  }
}

function UsersProvider(props) {
  const [usersReducer, dispatch] = React.useReducer(UserReducer, initState);

  const onAddRecord = React.useCallback(() => {
    dispatch({
      type: 'OPEN_NEW_USER_MODAL'
    })
  }, [dispatch]);

  const onCloseModal = React.useCallback(() => {
    dispatch({
      type: 'CLOSE_MODAL'
    })
  }, [dispatch]);
  
  const contextValue = React.useMemo(() => ({
    ...usersReducer,
    onAddRecord,
    onCloseModal
  }), [usersReducer, onAddRecord]);

  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
