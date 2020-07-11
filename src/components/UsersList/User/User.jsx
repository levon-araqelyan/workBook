import React from "react"
import s from "../UsersList.module.scss";
import {ReactComponent as Edit} from "../../../imges/edit.svg"
import {ReactComponent as Ok} from "../../../imges/ok.svg"
import {ReactComponent as Close} from "../../../imges/Close.svg"
import {ReactComponent as Delete} from "../../../imges/delete.svg"
import {ReactComponent as Settings} from "../../../imges/settings.svg"
import SingleUserInfoForm from "../../../forms/SingleUserForm";
import WithRole from "../../WithRole";

const User = ({usersList, userDelete, usersEdit, editableUser, putSingleUser, usersDeactivate, usersSettings}) => {
    return (
        <>
            {usersList.map(user => (
                <div className={s.infoWrap} key={user.id}>
                    <div className={s.info}>
                        {editableUser.id === user.id ?
                            <SingleUserInfoForm
                                onSubmit={putSingleUser}
                                editableUser={editableUser}
                            >
                                <div className={s.icons} onClick={() => {
                                    putSingleUser()
                                }}>
                                    <button><Ok/></button>
                                </div>
                                <div className={s.icons} onClick={() => usersDeactivate()}><Close/></div>
                                <div className={s.icons} onClick={() => usersSettings(user)}><Settings/></div>
                            </SingleUserInfoForm>
                            :
                            <>
                                <div className={s.name}><b>First Name</b>: {user.firstname}</div>
                                <div className={s.name}><b>Last Name</b>: {user.lastname}</div>
                                <div className={s.name}><b>Email</b>: {user.email}</div>
                                <div className={s.name}><b>Passport</b>: {user.passport}</div>
                                <div className={s.name}><b>Date of Birth</b>: {user.date}</div>
                            </>
                        }
                    </div>
                    <div className={s.iconsWrap}>
                        {editableUser.id !== user.id ?
                            <>
                                <WithRole>
                                    <div className={s.icons} onClick={() => usersEdit(user)}><Edit/></div>
                                    <div className={s.icons} onClick={() => userDelete(user.id)}><Delete/></div>
                                </WithRole>
                                <div className={s.icons} onClick={() => usersSettings(user)}><Settings/></div>
                            </>
                            :
                            null
                        }
                    </div>
                </div>
            ))}
        </>
    )
};

export default User