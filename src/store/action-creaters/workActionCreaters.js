import {
    ADD_NEW_WORK,
    ADD_NEW_WORK_SUCCEED,
    ADD_WORK_LIST_SUCCEED,
    ADD_WORK_LISTS,
    WORK_DELETE,
    WORK_DELETE_SUCCEED,
    EDIT_WORK,
    DEACTIVATE_WORK,
    PUT_WORK,
    PUT_WORK_SUCCEED,
    GET_WORKS,
    GET_WORKS_SUCCEED,
} from "../actions/worksAction";

export const getWorks = ()=>{
    return {
        type:GET_WORKS,
    }
};

export const getWorksSucceed = (data)=>{
    return {
        type:GET_WORKS_SUCCEED,
        payload:data
    }
};

export const addNewWork = (workplace,company,country,startDate,endDate,id,workId)=>{
    return {
        type:ADD_NEW_WORK,
        payload:{workplace,company,country,startDate,endDate,id,workId}
    }
};

export const addNewWorkSucceed = (data)=>{

    return {
        type:ADD_NEW_WORK_SUCCEED,
        payload:data
    }
};

export const addWorksList = (id,dateBirth)=>{
    return {
        type: ADD_WORK_LISTS,
        payload: {id,dateBirth}
    }
};

export const addWorksListSucceed = (data)=>{
    return {
        type: ADD_WORK_LIST_SUCCEED,
        payload: data
    }
};

export const workDelete = (id,workId)=>{
    return {
        type: WORK_DELETE,
        payload: {id,workId}
    }
};

export const workDeleteSucceed = (data)=>{
    return {
        type: WORK_DELETE_SUCCEED,
        payload: data
    }
};

export const editWork = (data)=>{
    return {
        type: EDIT_WORK,
        payload: data
    }
};

export const deactivateWork = ()=>{
    return {
        type: DEACTIVATE_WORK,
    }
};

export const putWork = (company,country,endDate,id,startDate,workId,workplace)=>{
    return {
        type: PUT_WORK,
        payload:{company,country,endDate,id,startDate,workId,workplace}
    }
};

export const putWorkSucceed = (data)=>{
    return {
        type: PUT_WORK_SUCCEED,
        payload:data
    }
};



