import React from 'react';

const AboutPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#90EE90',
    padding: '20px',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '30px',
  };

  const highlightStyle: React.CSSProperties = {
    backgroundColor: '#fafafa',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  const specialtiesStyle: React.CSSProperties = {
    marginBottom: '20px',
  };

  const openingHoursStyle: React.CSSProperties = {
    marginBottom: '20px',
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ fontSize: '28px', margin: 0, color: 'black' }}>WE ARE HOMEMADE</h1>
      </header>
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Willkommen in unserem Restaurant!</h2>
        <p style={{color: 'orange'}}>
          Bei uns dreht sich alles um gutes Essen und ein angenehmes Ambiente. Seit über 10 Jahren bieten wir unseren Gästen köstliche Speisen aus aller Welt.
        </p>

        <div style={containerStyle}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Unsere Philosophie</h3>
          <p style={{color: 'orange'}}>
            Wir glauben daran, dass Essen ein Erlebnis sein sollte. Daher verwenden wir nur hochwertige Zutaten und bereiten alle unsere Gerichte frisch zu. Unser engagiertes Küchenteam legt großen Wert auf Qualität und Geschmack.
          </p>
        </div>

        <div style={specialtiesStyle}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Unsere Spezialitäten</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'orange' }}>
            <li style={{ marginBottom: '5px' }}>React-Burger</li>
            <li style={{ marginBottom: '5px' }}>Chilli Cheeseburger</li>
            <li style={{ marginBottom: '5px' }}>BBG Burger</li>
            <li style={{ marginBottom: '5px' }}>Hamburger</li>
            <li style={{ marginBottom: '5px' }}>Chicken Burger</li>
          </ul>
        </div>

        <div style={openingHoursStyle}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Öffnungszeiten</h3>
          <p style={{color: 'orange'}}>
            Wir haben täglich von 12:00 bis 22:00 Uhr geöffnet. Reservieren Sie einen Tisch und kommen Sie vorbei, um unsere leckeren Gerichte zu genießen!
          </p>
        </div>
      </section>

      <footer style={footerStyle}>
        <p style={{ fontSize: '14px', margin: 0, color: 'black' }}>&copy; 2023 Seit 10 Jahren Frische Zubereitung</p>
      </footer>
    </div>
  );
};

export default AboutPage;
