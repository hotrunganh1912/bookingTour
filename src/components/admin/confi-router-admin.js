import React, { Suspense, lazy } from "react";
import Waiting from "../../common/waiting";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import routes from "./router-admin";
import { checkTokenLoginAdmin } from "../../common/funcCommon";

const IsProtected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return checkTokenLoginAdmin() ? (
        (document.title = rest.title) && <Component {...props} />
      ) : (
        <Redirect to="/admin/login-admin" />
      );
    }}
  />
);

const NoIsProtected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return !checkTokenLoginAdmin() ? (
        (document.title = rest.title) && <Component {...props} />
      ) : (
        <Redirect to="/admin/user-management" />
      );
    }}
  />
);

const ConfiRouterAdmin = () => {
  return (
    <Suspense
      fallback={<Waiting custome={{ position: "relative", top: "300px" }} />}
    >
      <Router>
        <div className="my-body">
          {/* <Header /> */}
          <div className="content">
            {/* <Link to="./tour-management">aaa</Link> */}
            {/* <Link to="./user-management">bbb</Link> */}
            <Switch>
              {routes.map((e, i) => {
                const component = lazy(() => import(`${e.component}`));
                return e.isProtected ? (
                  <IsProtected
                    key={"routes-admin" + i}
                    exact
                    title={e.title}
                    path={e.path}
                    component={component}
                  />
                ) : (
                  <NoIsProtected
                    key={"routes-admin" + i}
                    exact
                    title={e.title}
                    path={e.path}
                    component={component}
                  />
                );
              })}
            </Switch>
          </div>
        </div>
      </Router>
    </Suspense>
  );
};

export default ConfiRouterAdmin;
