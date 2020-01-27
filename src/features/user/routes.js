import React from "react";
import { Switch, Route } from "react-router-dom";
import NewUser from "./new-user";
import ListUsers from "./list-user";

export default () => {
  return (
    <Switch>
      <Route
        path="/users/new"
        key="2"
        children={props => <NewUser {...props} />}
      />
      <Route
        path="/users/update"
        key="10"
        children={props => <NewUser {...props} />}
      />
      <Route path="/users/list" children={props => <ListUsers {...props} />} />
    </Switch>
  );
};
