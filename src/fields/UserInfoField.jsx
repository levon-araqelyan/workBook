import React from "react"
import {Controller} from "react-hook-form";
import {useSelector} from "react-redux"
import InputComponent from "../components/Input/InputComponent";
import s from "../fields/field.module.scss";
import {
    dateFiled,
    dateValidation,
    email, maxLengthCreator,
    onlyLetters,
    passportField
} from "../utils/validation/validation";

const passportFieldValidate = (usersList) => passportField(usersList);
const maxLengthCreator20 = (maxLength) => maxLengthCreator(maxLength);

const UserInfoField = ({handleSubmit, onSubmit, children, className, control, errors}) => {
    const usersList = useSelector(({users}) => users.usersList);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <div style={!className ? {display: "flex"} : null}>
                <Controller
                    control={control}
                    placeholder="firstname"
                    name="firstname"
                    as={InputComponent}
                    errorMessage={errors.firstname?.message}
                    rules={{
                        required: "Field is required", validate: {onlyLetters}
                    }}
                />
                <Controller
                    control={control}
                    placeholder="lastname"
                    name="lastname"
                    as={InputComponent}
                    errorMessage={errors.lastname?.message}
                    rules={{
                        required: "Field is required", validate: {onlyLetters}
                    }}
                />
                <Controller
                    control={control}
                    placeholder="email"
                    name="email"
                    as={InputComponent}
                    type={"email"}
                    errorMessage={errors.email?.message}
                    rules={{
                        required: "Field is required", validate: {email}
                    }}
                />
                <Controller
                    control={control}
                    placeholder="passport"
                    name="passport"
                    as={InputComponent}
                    errorMessage={errors.passport?.message}
                    rules={{
                        required: "Field is required",
                        validate:
                            {passportFieldValidate: passportFieldValidate(usersList),maxLengthCreator20:maxLengthCreator20(20)}
                    }}
                />
                <Controller
                    control={control}
                    name="date"
                    as={InputComponent}
                    type="date"
                    errorMessage={errors.date?.message}
                    rules={{
                        required: "Field is required", validate: {dateFiled}
                    }}
                    max={dateValidation()}
                />
            </div>
            <div className={s.button}>{children ? children : <button>add</button>}</div>
        </form>
    )
};

export default UserInfoField