import React, {useContext} from "react"
import {Redirect} from "react-router-dom"
import {Context} from "../../context/Context";

export const WithAuthRedirect = ({children})=>{
    const {role} = useContext(Context);

    if (!role) {
        return <Redirect to="/" />
    }

    return children
};