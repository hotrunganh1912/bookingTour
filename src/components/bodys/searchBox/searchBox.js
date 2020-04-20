import React from "react";
import "./search.css";
import BgSearchBox from "./bgSearchBox";

class SearchBox extends React.Component {
  render() {
    return <BgSearchBox {...this.props} />;
  }
}

export default SearchBox;
