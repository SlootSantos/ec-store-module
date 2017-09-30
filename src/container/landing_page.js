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
        name: 'Cà Phe Phin',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Der traditionell vietnamesische Kaffee zeichnet sich durch seine sehr starke Röstung aus, die dem Kaffee einen sehr kräftigen Geschmack geben. Traditionell wird er mit gesüßter Kondensmilch auf Eis serviert, die die starke Röstung ausbalanciert und die Schokonoten der Bohnen hervorheben und den Kaffee cremig machen.',
        bullets: ['Kräftiges Aroma', 'Schokoladige Noten', '70% Arabica, 30 % Robusta']
      },
      {
        name: 'Thanh Trùc',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Unser Filterkaffee ist ein sortenreiner Kaffee aus 100% Bourbon Bohnen, eine sehr edle Sorte von Arabica Bohnen. Bourbon Bohnen sind bekannt dafür, dass sie eine sehr feine komplexe Säurestruktur hat, die den Kaffee sehr bekömmlich und fein machen.',
        bullets: ['Ausgewogenge, geringe Säure', 'Feiner und milder Kaffee', '100% Bourbon Arabica']
      },
      {
        name: 'Dình Huy',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: 'https://www.huber-kaffee.de/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/m/a/marisma_shop_big.png',
        description: 'Der Espressokaffee hat einen sehr hohen Arabica Anteil, was dem Kaffee fruchtige Aromen verleiht. Da der vietnamesische Kaffee meistens einen höheren Koffeeinanteil haben, ist der Kaffee sehr kräftig und hat eine wunderbare Crema.',
        bullets: ['Fruchtige Säure', 'Crema', '90% Arabica, 10% Robusta']
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
