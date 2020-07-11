import {
    ADD_USER,
    DELETE_USER,
    REMOVE_SINGLE_USER,
    USER_DEACTIVATE,
    USER_EDIT,
    ADD_USER_SUCCEED,
    GET_USER_SUCCEED,
    GET_USER,
    DELETE_USER_SUCCEED,
    REMOVE_SINGLE_USER_SUCCEED
} from "../actions/usersAction"

export const addUser = (firstname, lastname, email, passport, date) => {
    return {
        type: ADD_USER,
        payload: {
            firstname,
            lastname,
            email,
            passport,
            date,
            id: passport
        }
    }
};

export const addUserSucceed = (data) => {
    return {
        type: ADD_USER_SUCCEED,
        payload: data
    }
};

export const getUsers = () => {
    return {
        type: GET_USER
    }
};

export const getUsersSucceed = (data) => {
    return {
        type: GET_USER_SUCCEED,
        payload: data
    }
};

export const userDelete = (id) => {
    return {
        type: DELETE_USER,
        payload: {
            id
        }
    }
};

export const userDeleteSucceed = (data) => {
    return {
        type: DELETE_USER_SUCCEED,
        payload: data
    }
};

export const userEdit = (user) => {
    return {
        type: USER_EDIT,
        payload: {
            user
        }
    }
};

export const removeSingleUser = (firstname, lastname, email, passport, id, date) => {
    return {
        type: REMOVE_SINGLE_USER,
        payload: {
            firstname, lastname, email, passport, date, id
        }
    }
};

export const removeSingleUserSucceed = (data) => {
    return {
        type: REMOVE_SINGLE_USER_SUCCEED,
        payload: data
    }
};

export const userDeactivate = () => {
    return {
        type: USER_DEACTIVATE,
    }
};








