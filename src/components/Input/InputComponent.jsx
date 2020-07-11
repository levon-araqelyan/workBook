import React from "react"
import s from "./InputComponent.module.scss"

const InputComponent = ({errorMessage, ...props}) => {
    return (
        <div className={s.inputWrap + " " + (errorMessage && s.errorWrap)}>
            <input {...props} />
            {errorMessage && <div className={s.errorMessage}>{errorMessage}</div>}
        </div>
    )
};

export default InputComponent
