import React from "react";
import "./search.css";
import BgSearchBox from "./bgSearchBox";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BgSearchBox {...this.props} />;
  }
}

export default SearchBox;
