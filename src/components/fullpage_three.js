import React from 'react';

import ImgLeo from '../assets/leo_web.png';
import ImgPetra from '../assets/petra_web.png';
import ImgPhil from '../assets/philipp_web.png';
import ImgFlo from '../assets/flo_square.png';

import ImgLeo1 from '../assets/leo_web(1).png';
import ImgPetra1 from '../assets/petra_web(1).png';
import ImgPhil1 from '../assets/philipp_web(1).png';
import ImgFlo1 from '../assets/flo_square(1).png';

import '../styles/fullpage/fullpage.css';



function FullPageThree() {
  return(
    <div className="full_page fp__three">
      <div className="fp__three-headline">
        <h1>V | O Crew</h1>
        <h4>Wir &lt;3 Kaffee</h4>
      </div>
      <div className="fp__three-introduction">
        <p>
          <b>V|O Coffee</b> wurde im Sommer 2016 von Petra gegründet. Als einer der ersten Online-Anbieter für vietnamesischen Kaffee in Deutschland wollen wir unsere Liebe für Kaffee mit euch teilen und die Kaffeekultur in Deutschland bereichern.<br/><br/>
          Seit der Gründung sind wir als Team gewachsen und arbeiten im Kernteam zu viert an dem Start-Up. Erste Erfolge konnten wir auch schon verzeichnen. Denn bei dem Rhein-Neckar-Start-Up-Weekend konnten wir uns den 3. Platz sichern und haben schon bei diversen Marketing-Events unseren Kaffee erfolgreich angeboten. Dabei wollen wir es natürlich nicht belassen, sondern noch viel mehr erreichen!
        </p>
      </div>
      <div className="fp__three-item-wrapper">
        { renderTeamBubbles() }
      </div>
    </div>
  );
};


function renderTeamBubbles() {
  let isSafari = (navigator.userAgent.indexOf("Safari") !== -1);

  let arr = [
    {
      img: isSafari ? ImgPetra1 : ImgPetra,
      name: 'Petra',
      desc: 'The Chaperone',
      intro: 'Petra ist die Gründerin von V|O Coffee. Bereits vor ihrer Gründung war sie selbstständig und hat neben ihrem Englisch und BWL Studium an der Uni Mannheim viel im Sales und Merchandising Bereich gearbeitet. Als zertifizierte Barista ist ihr die Qualität bei Kaffee besonders wichtig. <br />Mit <b>V|O Coffee</b> kann sie nun ihre Kaffeeliebe und ein Stück ihrer vietnamesischen Kultur mit euch teilen.',
      id: 1
    },
    {
      img: isSafari ? ImgLeo1 : ImgLeo,
      name: 'Leo',
      desc: 'The Accountant',
      intro: 'Wenn es um kaufmännische Entscheidungen geht, dann ist Leo unser Mann. Vor V|O Coffee hat er Akkreditivgeschäfte der BASF am Standort Hong Kong betreut und studiert jetzt Unternehmensjura an der Uni Mannheim.<br />Bei <b>V|O Coffee</b> ist er dabei, weil er an das Produkt glaubt und Petras Leidenschaft zu V|O ihn überzeugt hat.',
      id: 2
    },
    {
      img: isSafari ? ImgPhil1 : ImgPhil,
      name: 'Philipp',
      desc: 'The Creator',
      intro: 'Philipp ist der Kreative bei V|O und arbeitet als digitaler Mediendesigner in einer Werbeagentur. Durch sein Ehrenamt hat er ein Jahr in Vietnam gelebt, wo er das erste Mal den vietnamesischen Kaffee kennenlernte. <br />Durch <b>V|O Coffee</b> möchte er daran mitwirken, diesen auch in Deutschland bekannter zu machen und die Kaffeelandschaft zu bereichern.',
      id: 3
    },
    {
      img: isSafari ? ImgFlo1 : ImgFlo,
      name: 'Flo',
      desc: 'The Nerd',
      intro: 'Flo ist unser IT-Guru. Schon in jungen Jahren hat er sich für das Coding interessiert. Heute arbeitet er als Freelancer im Software Engineering und hat u.a. bei Volkswagen, E.ON und AboutYou gearbeitet. Wie jeder andere Nerd auch ist Flo ein Kaffeetrinker. <br />Bei <b>V|O Coffee</b> kann er seine zwei größten Lieben vereinen.',
      id: 4
    }
  ];


  return arr.map(a =>
    <div key={a.id} className="fp__three-items">
      <div className="fp__three-items">
        <div className="fp__three-item-bubble outter">
          <div className="fp__three-item-bubble inner">
            <img src={a.img} alt="showing"/>
          </div>
        </div>
      </div>
      <div className="description">
        <h1>{ a.name }</h1>
        <h4>{ a.desc }</h4>

        <p dangerouslySetInnerHTML={{__html: a.intro}} />
      </div>
    </div>
  );
};

export default FullPageThree;
