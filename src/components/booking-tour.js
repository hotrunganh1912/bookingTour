import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browerHistory
} from "react-router-dom";
import Contact from "./headers/contact";
import Payment from "./headers/payment";
import Home from "./bodys/home/home";
import Header from "./headers/header";
import Footer from "./footer/footer";
import Detail from "./bodys/home/detail/detail"
import LoginRegister from "./bodys/home/Login-Logout/login";

class Main extends React.Component {
  render() {
    return (
      <Router history={browerHistory}>
        <div className="my-body">
          <Header />
          <div className="content">
            <Route exact path="/contact"></Route>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/login">
              <LoginRegister />
            </Route>

           <Route exact path="/detail">
              <Detail/>
            </Route>

            <Route exact path="/payment">
              <Payment />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
