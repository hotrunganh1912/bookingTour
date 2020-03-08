import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="w-100 mt-3 color-footer">
        <div className="container px-0">
          <div className="text-center w-100 py-2">
            <div className="row">
              <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="nav-link text-center text-light" href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center text-light" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center text-light" href="#">
                        <i className="fab fa-twitter-square"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link text-center text-light"
                        to="/contact"
                      >
                        Giúp Đỡ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-center text-light"
                        to="/Payment"
                      >
                        Thanh Toán
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-center text-light"
                        to="/home"
                      >
                        Trang Chủ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-12 border-top">
                <div className="my-2">
                  <small className="text-center mt-3 text-light">
                    © Copyright 2020 - Anh & Vũ. All rights reserved.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
