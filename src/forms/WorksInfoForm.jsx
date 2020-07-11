import React, {useState} from "react"
import s from "../fields/field.module.scss";
import WorksInfoField from "../fields/WorksInfoFiled";
import {useForm} from "react-hook-form";
import {validateCrossingOfDates} from "../utils/validation/workValidation";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const WorksInfoForm = ({onSubmit, children, worksList}) => {
    const [errorMessage, setMessage] = useState("");
    const {control, handleSubmit, errors, reset} = useForm({
        validate: (...data) => {
            console.log(data, "xiar");
            return true
        },
        mode: 'onSubmit',
        defaultValues: {workplace: "", company: "", country: "", startDate: "", endDate: ""}
    });
    const removeErrorMessage = () => {
        setMessage("")
    };

    const onSubmitting = data => {
        const validation = validateCrossingOfDates(data.startDate, data.endDate, worksList, null);

        if (validation.valid) {
            onSubmit(data);
            reset();
            setMessage("")
        } else {
            setMessage(validation.message)
        }

    };

    return (
        <div className={s.singleUserWrap}>
            <ErrorMessage errorMessage={errorMessage} removeErrorMessage={removeErrorMessage}/>
            <WorksInfoField
                onSubmit={onSubmitting}
                handleSubmit={handleSubmit}
                children={children} control={control}
                errors={errors}
            />
        </div>
    )
};

export default WorksInfoForm;