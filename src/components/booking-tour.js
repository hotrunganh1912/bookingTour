import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "../config/router";
import Footer from "./footer/footer";
import Header from "./headers/header";


function Main(props) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <div className="my-body">
          <Header />
          <div className="content">
            <Switch>
              {routes.map((config, i) => {
                const component = lazy(() => import(`${config.component}`));

                return (
                  <Route
                    key={"routes" + i}
                    exact
                    path={config.path}
                    component={component}
                  />
                );
              })}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default Main;
