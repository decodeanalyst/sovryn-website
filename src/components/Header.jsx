import React from "react"

import "../css/header.css"
import "../styles/header.scss"
import Logo from "./Logo"

export default function Header() {
  return (
    <div className="menu">
      <nav className="menu-nav navbar navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="/">
          <Logo />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle btn btn-white"
                href="#"
                id="dropdown05"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown05">
                <a className="dropdown-item" href="#">
                  Swap
                </a>
                <a className="dropdown-item" href="#">
                  MARGIN
                </a>
                <a className="dropdown-item" href="#">
                  STAKE
                </a>
                <a className="dropdown-item" href="#">
                  BORROW
                </a>
                <a className="dropdown-item" href="#">
                  Liquidity
                </a>
              </div>
            </li>
            <li className="titles nav-item">
              <a className="nav-link btn btn-white" href="#">
                Developers
              </a>
            </li>
            <li className="titles nav-item">
              <a className="nav-link btn btn-white" href="#">
                Governance
              </a>
            </li>
            <li className="titles nav-item">
              <a className="nav-link btn btn-white" href="/blog">
                Blog
              </a>
            </li>
            <li className="titles nav-item">
              <a className="nav-link btn btn-white" href="#">
                About
              </a>
            </li>
            <li className="titles nav-item">
              <a className="nav-link btn btn-white" href="#">
                HELP
              </a>
            </li>
          </ul>

          <div className="nav-item dropdown">
            <a
              className="en btn btn-white dropdown-toggle"
              href="#"
              id="dropdown05"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              EN
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown05">
              <a className="dropdown-item" href="#">
                EN
              </a>
              <a className="dropdown-item" href="#">
                ES
              </a>
              <a className="dropdown-item" href="#">
                PR
              </a>
            </div>
          </div>
          <div className="cta">
            {" "}
            <a className="box nav-item btn-lg">
              <span className="toTheDapp">To the Dapp</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
