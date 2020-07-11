import React from "react"
import { Controller } from "react-hook-form";
import InputComponent from "../components/Input/InputComponent";
import s from "../fields/field.module.scss";

const WorksInfoField = ({children, className, handleSubmit, onSubmit, control, errors}) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <div style={!className ? {display: "flex"} : null}>
                <Controller
                    control={control}
                    placeholder="workplace"
                    name="workplace"
                    as={InputComponent}
                    errorMessage={errors.workplace?.message}
                    rules={{
                        required: "Field is required"
                    }}
                />
                <Controller
                    control={control}
                    placeholder="company"
                    name="company"
                    as={InputComponent}
                    errorMessage={errors.company?.message}
                    rules={{
                        required: "Field is required"
                    }}
                />
                <Controller
                    control={control}
                    placeholder="country"
                    name="country"
                    as={InputComponent}
                    errorMessage={errors.country?.message}
                    rules={{
                        required: "Field is required"
                    }}
                />
                <Controller
                    control={control}
                    name="startDate"
                    as={InputComponent}
                    errorMessage={errors.startDate?.message}
                    rules={{
                        required: "Field is required"
                    }}
                    type="date"
                />
                <Controller
                    control={control}
                    name="endDate"
                    as={InputComponent}
                    errorMessage={errors.endDate?.message}
                    rules={{
                        required: "Field is required"
                    }}
                    type="date"
                />
            </div>
            <div className={s.button}>{children ? children : <button>add</button>}</div>
        </form>
    )
};

export default WorksInfoField