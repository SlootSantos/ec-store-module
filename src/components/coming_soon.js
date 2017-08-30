import React from 'react';

import '../styles/coming_soon.css';
import ComingSoonImg from '../assets/ComingSoon.jpg';

function ComingSoon() {
  return(
    <div className="coming-soon">
      <img src={ComingSoonImg} alt=""/>



      <p>
        Bestellungen per Mail und Vorkasse <br/>
        Abholung in Mannheim oder Versand nach Hause (zzgl. Versandkosten)
      </p>


      <p className="coming-soon__impressum">
        <b>V|O Trading UG</b> <br/>(haftungsbeschränkt) <br/>
        <b>Petra Vo</b> <br/>
        Mail: <a href="mailto:info@vo-coffee.de">info@vo-coffee.de</a> <br/>
        Mobil: +49 160 94446382
      </p>
    </div>
  );
}

export default ComingSoon;
