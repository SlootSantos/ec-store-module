import React, { Component } from 'react';

import '../styles/landing_page.css';
import coffee from '../assets/coffee.svg';
import star from '../assets/star.png';

class LandingPage extends Component {

  render() {
    return (
      <div className="main_container">
        <div className="page_one full_page">
          <div className="title">
            <span>Coffee</span>
            <img src={coffee} alt="" height="50"/>
            <span>BlaBla</span>
          </div>
        </div>
        <div className="page_two full_page">
        </div>
      </div>
    );
  }
};

export default LandingPage;
