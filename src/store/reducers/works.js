import {
  ADD_NEW_WORK_SUCCEED,
  ADD_WORK_LIST_SUCCEED,
  WORK_DELETE_SUCCEED,
  EDIT_WORK,
  DEACTIVATE_WORK,
  PUT_WORK_SUCCEED,
  GET_WORKS_SUCCEED,
} from "../actions/worksAction";


const initialState = {
  usersWorks:[],
  editWork:{},
  dateBirth: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WORKS_SUCCEED:{
      return {
        ...state,
        usersWorks: payload,
        dateBirth :payload.dateBirth
      }
    }
    case ADD_NEW_WORK_SUCCEED:{
      return {
        ...state,
        usersWorks: payload
      }
    }
    case ADD_WORK_LIST_SUCCEED:{
      return {
        ...state,
        usersWorks: payload,
        dateBirth :payload.dateBirth
      }
    }
    case WORK_DELETE_SUCCEED:{
      return {
        ...state,
        usersWorks: payload
      }
    }
    case EDIT_WORK:{
      return {
        ...state,
        editWork: payload
      }
    }
    case DEACTIVATE_WORK:{
      return {
        ...state,
        editWork: {}
      }
    }
    case PUT_WORK_SUCCEED:{
      return {
        ...state,
        editWork:{},
        usersWorks: payload
      }
    }
    default:
      return state;
  }
};
