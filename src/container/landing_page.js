import React, { Component } from 'react';




// import full pages
import FullpageOne from '../components/fullpage_one';
import FullPageTwo from '../components/fullpage_two';
import FullPageThree from '../components/fullpage_three';
import FullPageMantra from '../components/fullpage_mantra';

import Espresso from '../assets/Espresso.svg';
import Classic from '../assets/CaPhePhin.svg';
import Filter from '../assets/FrenchPress.svg';


import '../styles/landingpage/landing_page.css';

class LandingPage extends Component {

  render() {
    let mockData = [
      {
        name: 'Cà Phê Phin',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: Classic,
        description: 'Der <b>traditionell vietnamesische Kaffee</b> zeichnet sich durch seine sehr starke Röstung aus, die dem Kaffee einen sehr kräftigen Geschmack geben. Traditionell wird er mit gesüßter Kondensmilch auf Eis serviert, die die starke Röstung ausbalanciert und die Schokonoten der Bohnen hervorheben und den Kaffee cremig machen.',
        bullets: ['Kräftiges Aroma', 'Schokoladige Noten', '70% Arabica, 30 % Robusta'],
        price: '€8,90'
      },
      {
        name: 'Thanh Trùc',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: Filter,
        description: 'Unser <b>Filterkaffee</b> ist ein sortenreiner Kaffee aus 100% Bourbon Bohnen, eine sehr edle Sorte von Arabica Bohnen. Bourbon Bohnen sind bekannt dafür, dass sie eine sehr feine komplexe Säurestruktur hat, die den Kaffee sehr bekömmlich und fein machen.',
        bullets: ['Ausgewogenge, geringe Säure', 'Feiner und milder Kaffee', '100% Bourbon Arabica'],
        price: '€12,90'
      },
      {
        name: 'Dình Huy',
        id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
        imgSrc: Espresso,
        description: 'Der <b>Espressokaffee</b> hat einen sehr hohen Arabica Anteil, was dem Kaffee fruchtige Aromen verleiht. Da der vietnamesische Kaffee meistens einen höheren Koffeeinanteil haben, ist der Kaffee sehr kräftig und hat eine wunderbare Crema.',
        bullets: ['Fruchtige Säure', 'Crema', '90% Arabica, 10% Robusta'],
        price: '€10,90'
      }
    ]

    return (
      <div className="main_container">
        <FullpageOne></FullpageOne>
        <FullPageMantra></FullPageMantra>
        <FullPageTwo products={mockData}></FullPageTwo>
        <FullPageThree></FullPageThree>
      </div>
    );
  }
};

export default LandingPage;
