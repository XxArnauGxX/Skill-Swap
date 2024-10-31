import React, { useEffect } from 'react';
import { pruebaConexion } from './services/api';

function App() {
  useEffect(() => {
    pruebaConexion();
  }, []);

  return (
    <div>
      <h1>Intercambio de Habilidades</h1>
    </div>
  );
}

export default App;
