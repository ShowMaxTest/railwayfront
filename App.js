// 1. Frontend: React.js
// Plik: App.js
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const currentSecond = new Date().getSeconds();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/time`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ second: currentSecond }),
      });
      if (response.ok) {
        setMessage('Sekunda zapisana do bazy!');
      } else {
        setMessage('Wystąpił błąd przy zapisie.');
      }
    } catch (error) {
      setMessage('Błąd połączenia z serwerem.');
    }
  };

  return (
    <div>
      <h1>Aplikacja Railway</h1>
      <button onClick={handleClick}>Zapisz aktualną sekundę</button>
      <p>{message}</p>
    </div>
  );
}

export default App;