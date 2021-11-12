import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import BattleshipView from './views/BattleshipView';

function App() {
  const [gameLevel] = useState('easy');
  return (
    <Routes>
      <Route path="/" element={<BattleshipView level={gameLevel} />} />
    </Routes>
  );
}

export default App;
