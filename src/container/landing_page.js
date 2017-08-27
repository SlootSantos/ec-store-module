import React, { Component } from 'react';

// import full pages
// import FullpageOne from '../components/fullpage_one';
// import FullPageTwo from '../components/fullpage_two';
// import FullPageThree from '../components/fullpage_three';


import '../styles/landing_page.css';
import coffee from '../assets/coffee.svg';

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
