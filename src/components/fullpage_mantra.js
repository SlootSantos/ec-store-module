import React from 'react';

// import facebook from '../assets/facebook-logo.svg';
// import instagram from '../assets/instagram-logo.svg';
import CaPhe from '../assets/CaPhePhin_white.svg';

function FullPageMantra() {
  return (
    <div className="full_page fp_mantra_redesign">
      <div className="fp_mantra_redesign_border">
        <h1 className="fp_mantra_redesign_headline">Warum V|O Coffee?</h1>
        <div className="fp_mantra_redesign_content">
          <div className="fp_mantra_redesign_content_image">
            <img src={CaPhe} alt="" height="200" />
          </div>
          <div className="fp_mantra_redesign_content_text">
            Wenn Du gerne ein Stück von Vietnam und der Tradition des Landes in
            Deutschland erleben möchtest, probiere den vietnamesischen Kaffee
            und erlebe „Vietnam In A Cup“. <br />
            <br />
            Für Updates folge uns auf unseren Social Media Kanälen und sei live
            dabei, wie wir wachsen und die Kaffeekultur verändern!
            <div className="fp_mantra_redesign_content_button">
              {/* <button className="btn redesign">Erfahre mehr</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function renderIcons() {
//   return (
//     <div className="social-icons">
//       <img
//         onClick={() => goToSocialMedia('https://facebook.com/vocoffeede')}
//         src={facebook}
//         alt=""
//       />
//       <img
//         onClick={() => goToSocialMedia('https://www.instagram.com/vo.coffee')}
//         src={instagram}
//         alt=""
//       />
//     </div>
//   );
// }

// function goToSocialMedia(link) {
//   window.open(link);
// }

export default FullPageMantra;
