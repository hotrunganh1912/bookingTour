import React, { Component } from "react";
import "./App.css";
import "./listTour.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/booking-tour";
import { NotificationContainer } from "react-notifications";
// import  Main  from "./components/booking-tour";
class App extends Component {
  render() {
    return (
      <>
        <Main /> <NotificationContainer />
      </>
    );
  }
}

export default App;
