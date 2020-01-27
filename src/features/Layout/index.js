import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "../../config/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./ressources/constants";
import AppBar from "../../components/commun/AppBar";
import UserRoute from "../user/routes";

export default function BasicExample() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppBar style={{ height: 100 }} className="p-2">
            <Link to="/users/new">Add New User</Link>
            <br />
            <Link
              to={{
                pathname: "/users/update",

                state: {
                  values: {
                    email: "test@tes.fr",
                    password: "a"
                  }
                }
              }}
            >
              update User
            </Link>
            <br />
            <Link to="/users/list">Users</Link>
          </AppBar>
          <div style={{ margin: "10px 5px", background: "red" }}>
            <Switch>
              <Route
                path="/users"
                children={props => <UserRoute {...props} />}
              />
            </Switch>
          </div>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}
