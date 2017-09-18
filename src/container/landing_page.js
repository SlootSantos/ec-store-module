import React, { Component } from 'react';

// import header && footer
import Header from '../components/header';
import Footer from '../components/footer';


// import full pages
import FullpageOne from '../components/fullpage_one';
import FullPageTwo from '../components/fullpage_two';
import FullPageThree from '../components/fullpage_three';


import '../styles/landing_page.css';

class LandingPage extends Component {

  render() {
    let mockData = [
      {
        name: 'Product One',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis, impedit quam quo! Soluta quam officiis natus, libero alias dolorum nostrum saepe id fuga at iusto exercitationem dolores? Ipsam, reprehenderit.'
      },
      {
        name: 'Product two',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis, impedit quam quo! Soluta quam officiis natus, libero alias dolorum nostrum saepe id fuga at iusto exercitationem dolores? Ipsam, reprehenderit.'
      },
      {
        name: 'Product three',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis, impedit quam quo! Soluta quam officiis natus, libero alias dolorum nostrum saepe id fuga at iusto exercitationem dolores? Ipsam, reprehenderit.'
      }
    ]

    return (
      <div className="main_container">
        <Header></Header>


        <FullpageOne></FullpageOne>
        <FullPageTwo products={mockData}></FullPageTwo>
        <FullPageThree></FullPageThree>


        <Footer></Footer>
      </div>
    );
  }
};

export default LandingPage;
