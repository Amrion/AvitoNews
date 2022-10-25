import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import {useDispatch} from "react-redux";
import {changePath} from "../store/reducers/pathReducer";

const AppRouter = () => {
    const dispatch = useDispatch();

    window.addEventListener("popstate", () => {
        dispatch(changePath(window.location.pathname));
    });

    return (
        <Switch>
            {
                routes.map((route) =>
                    <Route key={route.path} exact={route.exact} component={route.component} path={route.path}/>
                )
            }
        </Switch>
    );
};

export default AppRouter;