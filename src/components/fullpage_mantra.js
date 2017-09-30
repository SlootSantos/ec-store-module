import React from 'react';

import facebook from '../assets/facebook-logo.svg';
import instagram from '../assets/instagram-logo.svg';


function FullPageMantra() {
  return (
    <div className="full_page fp__mantra">
      <div className="mantra-wrapper">
        <p>
          <b>
            Wenn Du gerne ein Stück von Vietnam und der Tradition des Landes in Deutschland erleben möchtest, probiere den vietnamesischen Kaffee und experience „Vietnam In A Cup“. <br/><br/>
            Für Updates folge uns auf unseren Social Media Kanälen und sei live dabei, wie wir wachsen und die Kaffeekultur verändern!
          </b>

          { renderIcons() }
        </p>

        <div className="mantra-bullets">
          <h2>Warum V|O ?</h2>
          <ul>
            <li>
              Authentischer und traditionell vietnamesischer Kaffee
            </li>
            <li>
              Mehr Koffein als herkömmlicher Kaffee
            </li>
            <li>
              Hohe Qualität
            </li>
            <li>
              Unterstützung von sozialen Projekten
            </li>
            <li>
              Andere Kaffeealternative
            </li>
            <li>
              Einzigartiger Geschmack
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function renderIcons() {
  return (
    <div className="social-icons">
      <img onClick={ () => goToSocialMedia('https://facebook.com/vocoffeede') } src={facebook} alt=""/>
      <img onClick={ () => goToSocialMedia('https://www.instagram.com/vo.coffee') } src={instagram} alt=""/>
    </div>
  )
};

function goToSocialMedia(link) {
  window.open(link);
};


export default FullPageMantra;
