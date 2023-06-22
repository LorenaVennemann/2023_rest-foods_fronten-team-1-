import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Über uns</h1>
      </header>
      <section>
        <h2>Willkommen in Unserem Restaurant!</h2>
        <p>
          Bei uns dreht sich alles um gutes Essen und ein angenehmes Ambiente.
          Seit über 10 Jahren bieten wir unseren Gästen köstliche Speisen aus
          aller Welt.
        </p>

        <h3>Unsere Philosophie</h3>
        <p>
          Wir glauben daran, dass Essen ein Erlebnis sein sollte. Daher verwenden
          wir nur hochwertige Zutaten und bereiten alle unsere Gerichte frisch
          zu. Unser engagiertes Küchenteam legt großen Wert auf Qualität und
          Geschmack.
        </p>

        <h3>Unsere Spezialitäten</h3>
        <p>
          Unsere Küche bietet eine Vielzahl von Spezialitäten, darunter:
        </p>
        <ul>
          <li>React-Burger</li>
          <li>Chilli Cheeseburger</li>
          <li>BBG Burger</li>
          <li>Hamburger</li>
          <li>Chicken Burger</li>
        </ul>

        <h3>Öffnungszeiten</h3>
        <p>
          Wir haben täglich von 12:00 bis 22:00 Uhr geöffnet. Reservieren Sie
          einen Tisch und kommen Sie vorbei, um unsere leckeren Gerichte zu
          genießen!
        </p>
      </section>

      <footer>
        <p>&copy; 2023 Seit 10 Jahren Frische Zubereitung</p>
      </footer>
    </div>
  );
};

export default AboutPage;
