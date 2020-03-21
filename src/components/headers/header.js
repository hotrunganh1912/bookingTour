import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpne: false
    };
  }
  handlerClickShowMenu = () => {
    this.setState({
      isOpne: !this.state.isOpne
    });
  };

  render() {
    return (
      <header className="main-header bg-light shadow-sm z-2">
        <div className="container p-0 ">
          <nav className="navbar navbar-expand-lg navbar-light p-0 ">
            <Link className="navbar-brand py-3" to="/home">
              Logo
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.handlerClickShowMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              data-menu="menu"
              className={`collapse navbar-collapse  bg-light${
                this.state.isOpne ? " show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item py-2">
                  <Link className="nav-link text-center  bg-light" to="/home">
                    Trang Chủ
                  </Link>
                </li>
                <li className="nav-item py-2">
                  <Link className="nav-link text-center  bg-light" to="/tour">
                    Tour
                  </Link>
                </li>
                <li className="nav-item py-2">
                  <a
                    className="nav-link text-center border-left border-right px-3  bg-light"
                    href="#"
                  >
                    <i className="far fa-user"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
