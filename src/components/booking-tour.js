import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browerHistory,
  Switch
} from "react-router-dom";
// import Contact from "./headers/contact";
import Payment from "./headers/payment";
import Home from "./bodys/home/home";
import Header from "./headers/header";
import Footer from "./footer/footer";
import Detail from "./bodys/home/detail/detail";
import NotFouund from "./bodys/home/notFound/404NotFound";
import Login from "./bodys/login-logout/login";
// import SignIn from "./bodys/home/login-Logout/login";

class Main extends React.Component {
  render() {
    return (
      <Router history={browerHistory}>
        <div className="my-body">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/contact"></Route>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/home">
                <Home />
              </Route>

              <Route exact path="/detail">
                <Detail />
              </Route>

              <Route exact path="/payment">
                <Payment />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>

              <Route exact path="*">
                <NotFouund />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
