import React from 'react';

// import full pages
import FullpageOne from '../components/fullpage_one';
import FullPageTwo from '../components/fullpage_two';
import FullPageThree from '../components/fullpage_three';
import FullPageMantra from '../components/fullpage_mantra';

import Espresso from '../assets/Espresso_white.svg';
import Classic from '../assets/CaPhePhin_white.svg';
import Filter from '../assets/FrenchPress_white.svg';
import VietFilter from '../assets/viet.Filter.svg';
import Milk from '../assets/milk.svg';

import '../styles/landingpage/landing_page.css';

export const mockData = [
  {
    name: 'Cà Phê Phin',
    id: '256acf70-cd6f-4406-af71-5d52523ad329',
    img_url:
      'https://s3.eu-central-1.amazonaws.com/www.vocoffee.de/traditionell_vietnamesischer_kaffee_bohnen_ca_phe_phin%400%2C5x.png',
    imgSrc: Classic,
    description:
      'Der <b>traditionell vietnamesische Kaffee</b> zeichnet sich durch seine starke Röstung aus, die dem Kaffee einen sehr kräftigen Geschmack gibt. Traditionell wird er mit gesüßter Kondensmilch auf Eis serviert, die die starke Röstung ausbalanciert und die Schokonoten der Bohnen hervorhebt und den Kaffee cremig macht.',
    bullets: [
      'Kräftiges Aroma',
      'Schokoladige Noten',
      '70% Arabica, 30 % Robusta'
    ],
    price: '€8,90',
    quantity: '250g'
  },
  {
    name: 'Thanh Trúc',
    id: '85e048e5-b4f1-49a5-a466-d52b01646729',
    img_url:
      'https://s3.eu-central-1.amazonaws.com/www.vocoffee.de/filterkaffee_gemahlen_thanh_truc%400%2C5x.png',
    imgSrc: Filter,
    description:
      'Unser <b>Filterkaffee</b> ist ein sortenreiner Kaffee aus 100% Bourbon Bohnen, eine sehr edle Sorte von Arabica Bohnen. Bourbon Bohnen sind bekannt dafür, dass sie eine feine komplexe Säurestruktur haben, die den Kaffee bekömmlich und fein machen.',
    bullets: [
      'Ausgewogenge, geringe Säure',
      'Feiner und milder Kaffee',
      '100% Bourbon Arabica'
    ],
    price: '€12,90',
    quantity: '250g'
  },
  {
    name: 'Dình Huy',
    id: 'ed0ee098-d5ba-409d-b2f4-c9610feca4b4',
    img_url:
      'https://s3.eu-central-1.amazonaws.com/www.vocoffee.de/espresso_gemahlen_dinh_huy%400%2C5x.png',
    imgSrc: Espresso,
    description:
      'Der <b>Espressokaffee</b> hat einen hohen Arabica Anteil, was dem Kaffee fruchtige Aromen verleiht. Da der vietnamesische Kaffee meist einen höheren Koffeinanteil hat, ist der Kaffee sehr kräftig und hat trotzdem eine wunderbare Crema.',
    bullets: ['Fruchtige Säure', 'Crema', '90% Arabica, 10% Robusta'],
    price: '€10,90',
    quantity: '250g'
  }
  // {
  //   name: 'V|O Coffee Filter',
  //   id: '28f3bae2-a791-403b-b769-00ea6ddeac5f',
  //   img_url:
  //     'https://s3.eu-central-1.amazonaws.com/www.vocoffee.de/vietnamesischer_filter%400%2C5x.png',
  //   imgSrc: VietFilter,
  //   description:
  //     'Um den traditionellen Kaffee „Ca Phe Phin“ zubereiten zu können, benötigt man den dazugehörigen Kaffeefilter „Phin“, der gleichzeitig auch Namensgeber des Kaffees ist.',
  //   bullets: [],
  //   price: '€8,00',
  //   quantity: 'Stück'
  // },
  // {
  //   name: 'Süße Kondensmilch',
  //   id: '2a21361e-15f3-4eee-ac70-e091444fc1c6',
  //   img_url:
  //     'https://s3.eu-central-1.amazonaws.com/www.vocoffee.de/kondensmilch%400%2C5x.png',
  //   imgSrc: Milk,
  //   description:
  //     'In Vietnam wird der traditionelle Kaffee „Cà Phê Phin“ mit der <b>gesüßten Kondensmilch</b> getrunken, um die dunkle Röstung der Bohnen auszubalancieren und die Schokonoten hervorzuheben.',
  //   bullets: [],
  //   price: '€2,00',
  //   quantity: 'Dose'
  // }
];

export function LandingPage() {
  return (
    <div className="main_container">
      <FullpageOne />
      <FullPageMantra />
      <FullPageTwo products={mockData} />
      <FullPageThree />
    </div>
  );
}
