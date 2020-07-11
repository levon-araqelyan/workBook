import React, {useContext, useEffect, useState} from "react"
import s from "./Login.module.scss"
import {useHistory} from "react-router-dom"
import InputComponent from "../Input/InputComponent";
import {Context} from "../../context/Context";
import {loadLocalStorageState} from "../../utils/localStorage";

const Login = () => {
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const history = useHistory();
    const {role, removeRole} = useContext(Context);

    const onSubmit = () => {
        if (loginValue === "admin" && passwordValue === "1111") {
            removeRole("admin");
            history.push("/usersList")
        }
        if (loginValue === "user" && passwordValue === "0000") {
            removeRole("user");
            history.push("/usersList")
        }
    };

    useEffect(() => {
        if (role && loadLocalStorageState("role")) {
            history.push("/usersList")
        }
    }, []);

    return (
        <div className={s.loginWrap}>
            <div className={s.login}>
                <h2>Login</h2>
                <InputComponent value={loginValue} onChange={(e) => setLoginValue(e.target.value)} placeholder="Login"
                                type="login"
                />
                <InputComponent value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} type="password"
                                placeholder="Password"
                />
                <button onClick={onSubmit}>Login</button>
            </div>
        </div>
    )
};

export default Login