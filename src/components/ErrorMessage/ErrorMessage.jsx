import React, {useEffect} from "react"
import s from "./ErrorMessage.module.scss"
import {ReactComponent as Close} from "../../imges/Close.svg";

const ErrorMessage = ({errorMessage, removeErrorMessage}) => {
    useEffect(() => {
        setTimeout(() => {
            removeErrorMessage()
        }, 8000)
    }, []);
    return (
        <div className={s.error}>
            {
                errorMessage &&
                (<div>
                    <div className={s.icons} onClick={removeErrorMessage}><Close/></div>
                    <div>
                        {errorMessage}
                    </div>
                </div>)
            }
        </div>
    )
};

export default ErrorMessage