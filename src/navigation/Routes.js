import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "../components/login/MainContainer";

export const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={MainContainer} />
      </Switch>
    </Fragment>
  );
};
