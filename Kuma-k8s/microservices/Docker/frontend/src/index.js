import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Asegúrate de que este archivo exista
import App from './App';  // Asegúrate de que este archivo exista en la carpeta src

// Renderiza el componente App dentro del elemento con id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Este elemento debe estar presente en tu public/index.html
);