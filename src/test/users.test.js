import React from "react";
import {addUserSucceed, userEdit} from "../store/action-creaters/addUserActionCreaters";
import users from "../store/reducers/users";

const state = {
  usersList:[],
  editableUser:{},
};

test('add user', () => {
  const action = addUserSucceed([{firstname:"Jon",lastname:"Smith",email:"smith@gmail.com",passport:"AC7378477",date:'1989-05-30',id:"AC7378477"}])
  const newState = users(state,action);

  expect(newState.usersList.length > 0).toBe(true)
});

test('must save user edit object', () => {
  const action = userEdit({firstname:"Jon",lastname:"Smith",email:"smith@gmail.com",passport:"AC7378477",date:'1989-05-30',id:"AC7378477"})
  const newState = users(state,action);

  expect(newState.editableUser.firstname).toBe("Jon")
});
