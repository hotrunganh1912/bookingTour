import React from "react";

class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.inputSearch = React.createRef();
  }
  handleForcus = e => {
    e.target.type = "date";
  };

  handleUnforcus = e => {
    if (e.target.value === "") {
      e.target.type = "text";
    } else {
      e.target.type = "date";
    }
  };

  handerKeyUpFormSearch = e => {
    console.log("props :", this.props.match.path);
    let currentPath = this.props.match.path;
    if (e.keyCode === 9 && (currentPath == "/" || currentPath == "/home"))
      e.preventDefault();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handerKeyUpFormSearch);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handerKeyUpFormSearch);
  }

  render() {
    return (
      <div className="row border-search mx-auto w-75 rounded">
        <div className="col-12">
          <input
            type="text"
            ref={this.inputSearch}
            className="form-control w-100 my-2"
            id="placeWantToGo"
            placeholder="Bạn Muốn Đi Đâu?"
            name="placeWantToGo"
          />
        </div>
        <div className="col-md-4  my-1">
          <input
            type="text"
            className="form-control"
            id="dateStart"
            placeholder="Thời Gian Đi?"
            name="dateStart"
            onFocus={this.handleForcus}
            onBlur={this.handleUnforcus}
          />
        </div>
        <div className="col-md-4 my-1">
          <input
            type="text"
            className="form-control"
            id="dateReturn"
            placeholder="Thời Gian Về?"
            name="dateReturn"
            onFocus={this.handleForcus}
            onBlur={this.handleUnforcus}
          />
        </div>
        <div className="col-md-4 text-right  my-1">
          <button className="btn btn-outline-primary w-100 mr-auto">
            Tìm Kiếm
          </button>
        </div>
      </div>
    );
  }
}

export default FormSearch;
