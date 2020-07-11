import {all, put, takeLatest} from "redux-saga/effects";
import {loadLocalStorageState, saveLocalStorageState} from "../utils/localStorage";

import {
    addNewWorkSucceed,
    addWorksListSucceed,
    getWorksSucceed, putWorkSucceed,
    workDeleteSucceed
} from "../store/action-creaters/workActionCreaters";
import {ADD_NEW_WORK, ADD_WORK_LISTS, GET_WORKS, PUT_WORK, WORK_DELETE} from "../store/actions/worksAction";

export function* addWorksList({payload}) {
    try {
        //   Here should be a request
        const usersWorks = loadLocalStorageState("usersWorks");
        const newData = (!usersWorks.some(el => el.id === payload.id) ? [{
            id: payload.id,
            worksList: []
        }, ...usersWorks] : [...usersWorks]);

        saveLocalStorageState({key: "usersWorks", state: newData});
        yield put(addWorksListSucceed(newData));
    } catch (error) {
        console.log(error)
    }
}

export function* getWorks() {
    try {
        //   Here should be a request
        let usersWorks = loadLocalStorageState("usersWorks");

        if (!usersWorks) {
            usersWorks = [];
            saveLocalStorageState({key: "usersWorks", state: []});
        }
        yield put(getWorksSucceed(usersWorks));
    } catch (error) {
        console.log(error)
    }
}

export function* addNewWork({payload}) {
    try {
        //   Here should be a request
        const usersWorks = loadLocalStorageState("usersWorks");
        const newData = usersWorks.filter(el => el.id === payload.id
            ? {id: payload.id, worksList: el.worksList.unshift(payload)} : el);

        saveLocalStorageState({key: "usersWorks", state: newData});

        yield put(addNewWorkSucceed(newData));
    } catch (error) {
        console.log(error)
    }
}

export function* workDelete({payload}) {
    try {
        //   Here should be a request
        const usersWorks = loadLocalStorageState("usersWorks");
        const newData = usersWorks.map(el => {
            if(el.id === payload.id){
                return {
                    id:payload.id,
                    worksList: el.worksList.filter(work => work.workId !== payload.workId)
                }
            }
            return el
        });

        saveLocalStorageState({key: "usersWorks", state: newData});

        yield put(workDeleteSucceed(newData));
    } catch (error) {
        console.log(error)
    }
}

export function* putWork({payload}) {
    try {
        //   Here should be a request
        const usersWorks = loadLocalStorageState("usersWorks");
        const newData = usersWorks.map( u => {
            if(u.id === payload.id){
                return {
                    id: payload.id,
                    worksList: u.worksList.map(el => {
                        if(el.workId === payload.workId){
                            return payload
                        }
                        return el
                    })
                }
            }
            return u
        });

        saveLocalStorageState({key: "usersWorks", state: newData});

        yield put(putWorkSucceed(newData));
    } catch (error) {
        console.log(error)
    }
}

export function* worksSagas() {
    yield all(
        [
            takeLatest(ADD_WORK_LISTS, addWorksList),
            takeLatest(GET_WORKS, getWorks),
            takeLatest(ADD_NEW_WORK, addNewWork),
            takeLatest(WORK_DELETE, workDelete),
            takeLatest(PUT_WORK, putWork),
        ]
    );
}
