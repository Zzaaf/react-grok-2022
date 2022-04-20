import React from 'react';
import { createRoot } from 'react-dom/client';
import AnswersApp from './components/answers/App/App.jsx';
import PuzzlesApp from './components/puzzles/App/App.jsx';

const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';
const App = testSet === 'answers' ? AnswersApp : PuzzlesApp;

function Root() {
  return <React.StrictMode>
    <App />
  </React.StrictMode>;
}

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
