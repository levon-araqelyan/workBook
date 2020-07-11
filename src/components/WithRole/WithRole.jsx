import React, {useContext} from "react"
import {Context} from "../../context/Context";

const WithRole = ({children}) => {
    const {role} = useContext(Context);

    return (
        <>
            {role !== "admin" ? null : children}
        </>
    )
};

export default WithRole