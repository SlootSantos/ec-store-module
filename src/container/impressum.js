import React, { Component } from 'react';


import '../styles/impressum/impressum.css';

class Impressum extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div className="impressum">
        <div>
          <p>
            <b>V|O Tading UG </b> <br/>
            (haftungsbeschränkt) <br/>
            Rheinhäuserstr.12<br/>
            68165 Mannheim<br/><br/><br/>

            <b>Vertreten durch</b>:<br/><br/>

            <b>Geschäftsführerin</b>: Petra Vo<br/><br/>

            <b>Kontakt</b>:<br/><br/>

            <b>Telefon</b>: +49160944 463 82<br/>
            <b>E-Mail</b>: info@vo-coffee.de<br/><br/>

            USt-IdNr.<br/><br/>

            DE308029691<br/><br/>

            Aufsichtsbehörde:<br/><br/>

            Amtsgericht Mannheim<br/>
          </p>
        </div>

        <div>
          <h2>Angaben gemäß § 5 TMG:</h2>
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für <br/>
            eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            <br/><br/>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            <br/><br/>
            <h3>Haftung für Links</h3>
            <br/><br/>
            Unser Angebot enthält Links zu externen Webseiten Dritter,
            auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
            der Verlinkung nicht erkennbar.
            <br/><br/>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            <br/><br/>
            <h3>Urheberrecht</h3>
            <br/><br/>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            <br/><br/>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
            aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
            umgehend entfernen.

            <br/><br/><br/>
            Icons made by <a href="http://www.freepik.com/">Freepik</a> and <a href="https://www.epicpxls.com/">EpicCoders</a> from www.flaticon.com
          </p>
        </div>
      </div>
    );
  }
};

export default Impressum;
