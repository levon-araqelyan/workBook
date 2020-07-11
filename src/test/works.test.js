import React from "react";
import {addWorksListSucceed, editWork} from "../store/action-creaters/workActionCreaters";
import works from "../store/reducers/works";

const state = {
  usersWorks:[],
  editWork:{},
  dateBirth: "",
};

test('add new work list from single user', () => {
  const action = addWorksListSucceed([{id: "AC7378477", worksList:[]}]);
  const newState = works(state,action);

  expect(newState.usersWorks.length > 0).toBe(true)
});

test('edit work', () => {
  const action = editWork({workplace: "15 p. 22bn", company: "Shell", country: "Armenia", startDate: "2010-07-01", endDate: "2020-07-25"});
  const newState = works(state,action);

  expect(newState.editWork.company).toBe("Shell")
});
