import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./navigation/Routes";
import store from "./redux/store";
import "./components/login/css/login.scss";


const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
