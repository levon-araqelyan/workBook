import {
  ADD_USER_SUCCEED,
  USER_EDIT,
  REMOVE_SINGLE_USER_SUCCEED,
  USER_DEACTIVATE,
  GET_USER_SUCCEED, DELETE_USER_SUCCEED
} from "../actions/usersAction";

const initialState = {
  usersList:[],
  editableUser:{},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_SUCCEED:{
      return {
        ...state,
        usersList: payload
      }
    }
    case GET_USER_SUCCEED:{
      return {
        ...state,
        usersList: payload
      }
    }
    case DELETE_USER_SUCCEED:{
      return {
        ...state,
        usersList: payload
      }
    }
    case USER_EDIT:{

      return {
        ...state,
        editableUser: payload.user
      }
    }
    case USER_DEACTIVATE:{

      return {
        ...state,
        editableUser: {}
      }
    }
    case REMOVE_SINGLE_USER_SUCCEED:{
      return {
        ...state,
        usersList: payload,
        editableUser:{}
      }
    }
    default:
      return state;
  }
};
