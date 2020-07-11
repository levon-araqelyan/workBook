import React from "react"
import UserInfoField from "../fields/UserInfoField";
import s from "../fields/field.module.scss";
import {useForm} from "react-hook-form";

const UserInfoForm = ({onSubmit}) => {
    const {control, handleSubmit, errors, reset} = useForm({
        mode: 'onSubmit',
        defaultValues: { firstname: "", lastname: "", email: "", passport: "", date: ""  }
    });

    const onSubmitting = data => {
        onSubmit(data);
        reset();
    };

    return (
        <div className={s.userInfoWrap}>
            <UserInfoField control={control} handleSubmit={handleSubmit} onSubmit={onSubmitting} errors={errors}/>
        </div>
    )
};

export default UserInfoForm;