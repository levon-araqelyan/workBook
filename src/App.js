import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UsersList from "./components/UsersList";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import {loadLocalStorageState, saveLocalStorageState} from "./utils/localStorage";
import {Context} from "./context/Context";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
    const [role, setRole] = useState(loadLocalStorageState("role"));

    const removeRole = (value) => {
        const userList = loadLocalStorageState("usersList");
        const usersWorks = loadLocalStorageState("usersWorks");
        if (!(userList?.length || usersWorks?.length) && value) {
            saveLocalStorageState({key: "usersList", state: []});
            saveLocalStorageState({key: "usersWorks", state: []});
        }
        saveLocalStorageState({key: "role", state: value});
        setRole(value)
    };

    return (
        <Provider store={store}>
            <Context.Provider value={{role, removeRole}}>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route exact path="/usersList" component={UsersList}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/" component={Login}/>
                        </Switch>
                    </div>
                </Router>
            </Context.Provider>
        </Provider>
    );
}

export default App;
