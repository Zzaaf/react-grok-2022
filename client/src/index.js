import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/puzzles/App/App.jsx';

function Root() {
  return <React.StrictMode>
    <App />
  </React.StrictMode>;
}

const root = createRoot(document.getElementById('root'));
root.render(<Root />);