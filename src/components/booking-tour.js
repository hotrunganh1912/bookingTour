import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browerHistory
} from "react-router-dom";
import Contact from "./hearders/contact";
import Payment from "./hearders/payment";
import Home from "./bodys/home/home";
import Hearder from "./hearders/hearder";
import Footer from "./footer/footer";

class Main extends React.Component {
  render() {
    return (
      <Router history={browerHistory}>
        <div className="my-body">
          <Hearder />
          <div className="content">
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
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
