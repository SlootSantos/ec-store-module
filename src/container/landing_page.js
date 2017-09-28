import React, { Component } from 'react';




// import full pages
import FullpageOne from '../components/fullpage_one';
import FullPageTwo from '../components/fullpage_two';
import FullPageThree from '../components/fullpage_three';


import '../styles/landingpage/landing_page.css';

class LandingPage extends Component {

  render() {
    let mockData = [
      {
        name: 'Product One',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis, impedit quam quo! Soluta quam officiis natus, libero alias dolorum nostrum saepe id fuga at iusto exercitationem dolores? Ipsam, reprehenderit.'
      },
      {
        name: 'Product two',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis, impedit quam quo! Soluta quam officiis natus, libero alias dolorum nostrum saepe id fuga at iusto exercitationem dolores? Ipsam, reprehenderit.'
      },
      {
        name: 'Product three',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis, impedit quam quo! Soluta quam officiis natus, libero alias dolorum nostrum saepe id fuga at iusto exercitationem dolores? Ipsam, reprehenderit.'
      }
    ]

    return (
      <div className="main_container">
        <FullpageOne></FullpageOne>
        <FullPageTwo products={mockData}></FullPageTwo>
        <FullPageThree></FullPageThree>
      </div>
    );
  }
};

export default LandingPage;
