import {all, put, takeLatest} from "redux-saga/effects";
import {ADD_USER, DELETE_USER, GET_USER, REMOVE_SINGLE_USER} from "../store/actions/usersAction";
import {loadLocalStorageState, saveLocalStorageState} from "../utils/localStorage";
import {
    addUserSucceed,
    getUsersSucceed,
    removeSingleUserSucceed,
    userDeleteSucceed
} from "../store/action-creaters/addUserActionCreaters";

export function* getUsers() {
    try {
        //   Here should be a request
        let usersList = loadLocalStorageState("usersList");

        if (!usersList) {
            usersList = [];
            saveLocalStorageState({key: "usersList", state: []});
        }
        yield put(getUsersSucceed(usersList));
    } catch (error) {
        console.log(error)
    }
}

export function* addUser({payload}) {
    try {
        //   Here should be a request
        const usersList = loadLocalStorageState("usersList");
        usersList.unshift(payload);

        saveLocalStorageState({key: "usersList", state: usersList})

        yield put(addUserSucceed(usersList));
    } catch (error) {
        console.log(error)
    }
}

export function* userDelete({payload}) {
    try {
        //   Here should be a request
        const usersList = loadLocalStorageState("usersList");
        const usersWorks = loadLocalStorageState("usersWorks");

        const newList = usersList.filter(user => user.id !== payload.id);
        const newWorkList = usersWorks.filter(user => user.id !== payload.id);

        saveLocalStorageState({key: "usersList", state: newList});
        saveLocalStorageState({key: "usersWorks", state: newWorkList});

        yield put(userDeleteSucceed(newList));
        yield put(userDeleteSucceed(newList));
    } catch (error) {
        console.log(error)
    }
}

export function* removeSingleUser({payload}) {
    try {
        //   Here should be a request
        const usersList = loadLocalStorageState("usersList");
        const newList = usersList.map(user => user.id === payload.id ? payload : user);

        saveLocalStorageState({key: "usersList", state: newList});

        yield put(removeSingleUserSucceed(newList));
    } catch (error) {
        console.log(error)
    }
}

export function* usersSagas() {
    yield all(
        [
            takeLatest(ADD_USER, addUser),
            takeLatest(GET_USER, getUsers),
            takeLatest(DELETE_USER, userDelete),
            takeLatest(REMOVE_SINGLE_USER, removeSingleUser),
        ]
    );
}
