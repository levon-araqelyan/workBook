import React from "react"
import {render} from '@testing-library/react'
import UsersList from "./UsersList";
import {Provider} from "react-redux";
import store from "../../store/store";
import {Context} from "../../context/Context";
import {BrowserRouter as Router} from "react-router-dom";

it("it should render UsersList", () => {
    render(
        <Provider store={store}>
            <Context.Provider value={{role: "admin"}}>
                <Router>
                    <UsersList/>
                </Router>
            </Context.Provider>
        </Provider>
    );
});