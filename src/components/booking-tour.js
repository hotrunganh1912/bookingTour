import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "../config/router";
import Footer from "./footer/footer";
import Header from "./headers/header";
import Waiting from "../common/waiting";

const AddTitle = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (document.title = rest.title) && <Component {...props} />;
    }}
  />
);

function Main(props) {
  return (
    <Suspense
      fallback={<Waiting custome={{ position: "relative", top: "300px" }} />}
    >
      <Router>
        <div className="my-body">
          <Header />
          <div className="content">
            <Switch>
              {routes.map((config, i) => {
                const component = lazy(() => import(`${config.component}`));

                return (
                  <AddTitle
                    key={"routes" + i}
                    exact
                    title={config.title}
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
