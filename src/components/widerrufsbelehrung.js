import React from 'react';
import { Link } from 'react-router-dom';

import Widerrufsformular from '../assets/Widerrufsformular.pdf';

import '../styles/impressum/impressum.css';

export default () => (
  <div className="AGB widerruf">
    <h1>Widerrufsbelehrung</h1>
    <h3>Widerrufsrecht</h3>
    Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
    Ihren Vertrag mit V|O Trading UG (haftungsbeschränkt) zu widerrufen.
    Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag an dem Sie oder ein
    von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in
    Besitz genommen haben bzw. hat. <br />
    Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ( V|O Trading UG
    (haftungsbeschränkt), Rheinhäuserstr. 12 68165 Mannheim, Tel.: +49
    160/94446382, E-Mail: petra@vo-coffee.de ) mittels einer eindeutigen
    Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über
    Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können
    dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch
    nicht vorgeschrieben ist. <br />
    Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über
    die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. <br />
    <h3>Folgen des Widerrufs</h3>
    Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
    wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit
    Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine
    andere Art der Lieferung als die von uns angebotene, günstigste
    Standardlieferung gewählt haben), unverzüglich und spätestens binnen
    vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
    Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
    Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
    ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde
    ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen
    dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung
    verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie
    den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben,
    je nachdem, welches der frühere Zeitpunkt ist. <br />
    Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
    vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
    Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist
    ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen
    absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der
    Waren. Sie müssen für einen etwaigen Wertverlust der Waren nur
    aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der
    Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
    notwendigen Umgang mit ihnen zurückzuführen ist. <br /> <br />
    Quelle: Rechtsanwalt Metzler <br /> <br />


    <Link to={Widerrufsformular} target="_blank">Widerrufsbestimmungen</Link>
  </div>
);
