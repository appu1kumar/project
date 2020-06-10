import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faSearch, faBell, faClock } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

class Header extends Component {
  state = {
    date: new Date()
  };

  callMe(){ 
    setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img className="brand-image" src="/images/ascent-brand-logo.png" alt='image'/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto search-box">
              <input type='text' placeholder='Search...' className='search-box-input' />
              {/* <FontAwesomeIcon icon={faSearch}/> */}
            </div>
            <div className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href='#'><FontAwesomeIcon icon={faCalendar}/><span className='vl'></span>{this.state.date.toDateString()}</a>
                </li>
                <li className="nav-item active clock">
                  <a className="nav-link" href='#'><FontAwesomeIcon icon={faClock}/><span className='vl'></span>{this.state.date.toLocaleTimeString()}</a>
                </li>
                <li className="nav-item active clock">
                  <a className="nav-link" href='#'><FontAwesomeIcon icon={faBell}/></a>
                </li>
                <li className="nav-item active clock">
                  <a className="nav-link" href='#'><img src='/images/admin.jpg' alt='image' style={{width: '20px', height: '26px'}}/></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;



// return (
    //   <div className='row'>
    //      <img src='/images/ascent.png' alt='image' style={{height: '55px'}}/>
    //     <header className='main-header'>
    //       <nav>
    //         <ul>
    //           <li>
    //             <div className='search-box'>
    //               <input
    //                 type='text'
    //                 placeholder='Search...'
    //                 className='search-box-input'
    //               />
    //               <FontAwesomeIcon icon={faSearch}/>
    //             </div>
    //           </li>
    //           <li>
    //               <a href='#'><FontAwesomeIcon icon={faCalendar}/><span className='vl'></span>{this.state.date.toDateString()}</a>
    //           </li>
    //           <li>
    //               <a href='#'><FontAwesomeIcon icon={faClock}/><span className='vl'></span>{this.state.date.toLocaleTimeString()}</a>
    //           </li>
    //           <li>
    //             <a href='#'><FontAwesomeIcon icon={faBell}/></a>
    //           </li>
    //           <li>
    //             <a href='#'><img src='/images/admin.jpg' alt='image' style={{width: '20px', height: '26px'}}/></a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </header>
    //   </div>
    // )