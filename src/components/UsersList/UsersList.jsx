import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import s from "./UsersList.module.scss";
import UserInfoForm from "../../forms/UserInfoForm";
import {
    addUser,
    getUsers,
    removeSingleUser,
    userDeactivate,
    userDelete,
    userEdit
} from "../../store/action-creaters/addUserActionCreaters";
import User from "./User";
import {addWorksList} from "../../store/action-creaters/workActionCreaters";
import WithRole from "../WithRole";
import {WithAuthRedirect} from "../WithAuthRedirect/WithAuthRedirect";
import Header from "../Header";

const UsersList = () => {
    const dispatcher = useDispatch();
    const usersList = useSelector(({users}) => users.usersList);
    const editableUser = useSelector(({users}) => users.editableUser);
    const history = useHistory();

    useEffect(() => {
        dispatcher(getUsers())
    }, []);


    const onSubmit = ({firstname, lastname, email, passport, date}) => {
        const id = Math.random();

        dispatcher(addUser(firstname, lastname, email, passport, date, id));
    };

    const usersDelete = id => {
        dispatcher(userDelete(id))
    };

    const usersEdit = user => {
        dispatcher(userEdit(user))
    };

    const putSingleUser = (formData) => {
        if (formData) {
            dispatcher(removeSingleUser(formData.firstname, formData.lastname, formData.email, formData.passport, formData.id, formData.date))
        }
    };

    const usersDeactivate = () => {
        dispatcher(userDeactivate())
    };

    const usersSettings = (user) => {
        history.push(`/settings/${user.id}`);
        dispatcher(addWorksList(user.id, user.date))
    };

    return (
        <WithAuthRedirect>
            <Header/>
            <div className={s.workbookWrap}>
                <h1>Users List</h1>
                <WithRole>
                    <div className={s.users}>
                        <UserInfoForm onSubmit={onSubmit}/>
                    </div>
                </WithRole>
                <User
                    usersList={usersList}
                    userDelete={usersDelete}
                    usersEdit={usersEdit}
                    editableUser={editableUser}
                    putSingleUser={putSingleUser}
                    usersDeactivate={usersDeactivate}
                    usersSettings={usersSettings}
                />
            </div>
        </WithAuthRedirect>
    )
};

export default UsersList