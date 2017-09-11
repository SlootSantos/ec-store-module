import React, { Component } from 'react';

// import header
import Header from '../components/header';

// import full pages
import FullpageOne from '../components/fullpage_one';
import FullPageTwo from '../components/fullpage_two';
import FullPageThree from '../components/fullpage_three';


import '../styles/landing_page.css';

class LandingPage extends Component {

  render() {
    return (
      <div className="main_container">
        <Header></Header>


        <FullpageOne></FullpageOne>
        <FullPageTwo></FullPageTwo>
        <FullPageThree></FullPageThree>
      </div>
    );
  }
};

export default LandingPage;
