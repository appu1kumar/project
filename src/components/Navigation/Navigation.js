import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';


class Navigation extends Component {
  render() {
    return(
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName='active'>POWERPAY</NavLink>
            </li>
            <li>
              <NavLink to="/stohrm">STOHRM</NavLink>
            </li>
            <li>
              <NavLink to="/inputmodule">INPUT MODULE</NavLink>
            </li>
            <li>
              <NavLink to="/folders">FOLDERS</NavLink>
            </li>
            <li>
              <NavLink to="/crm">CRM</NavLink>
            </li>
            <li>
              <NavLink to="/smartreport">SMARTREPORT</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;
