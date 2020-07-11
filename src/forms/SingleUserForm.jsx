import React from "react"
import s from "../fields/field.module.scss";
import UserInfoField from "../fields/UserInfoField";
import {useForm} from "react-hook-form";

const SingleUserInfoForm = ({onSubmit, editableUser, children}) => {
    const {control, handleSubmit, errors} = useForm({
        mode: 'onSubmit',
        defaultValues: editableUser
    });

    const onSubmitting = data => {
        console.log(data);
        onSubmit({...data, id: editableUser.id});
    };

    return (
        <div className={s.singleUserWrap}>
            <UserInfoField onSubmit={onSubmitting} children={children} className={s.singleForm} errors={errors} control={control} handleSubmit={handleSubmit}/>
        </div>

    )
};

export default SingleUserInfoForm;