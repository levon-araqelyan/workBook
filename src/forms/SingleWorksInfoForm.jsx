import React, {useState} from "react"
import s from "../fields/field.module.scss";
import WorksInfoField from "../fields/WorksInfoFiled";
import {useForm} from "react-hook-form";
import {validateCrossingOfDates} from "../utils/validation/workValidation";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const SingleWorksInfoForm = ({onSubmit, editedWork, children, worksList}) => {
    const [errorMessage, setMessage] = useState("");

    const {control, handleSubmit, errors, reset} = useForm({
        validate: (...data) => {
            console.log(data, "xiar");
            return true
        },
        mode: 'onSubmit',
        defaultValues: editedWork
    });
    const removeErrorMessage = () => {
        setMessage("")
    };
    const onSubmitting = data => {
        const validation = validateCrossingOfDates(data.startDate, data.endDate, worksList, editedWork.workId);

        if (validation.valid) {
            onSubmit({...data, workId: editedWork.workId, id: editedWork.id});
            reset();
            setMessage("")
        } else {
            setMessage(validation.message)
        }
    };

    return (
        <div className={s.singleUserWrap}>
            <ErrorMessage errorMessage={errorMessage} removeErrorMessage={removeErrorMessage} />
            <WorksInfoField onSubmit={onSubmitting} handleSubmit={handleSubmit} errors={errors} children={children} className={s.singleForm} control={control}/>
        </div>

    )
};

export default SingleWorksInfoForm;