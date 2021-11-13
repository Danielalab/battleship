import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import BattleshipView from './views/BattleshipView';
import SettingsView from './views/SettingsView';

function App() {
  const [gameLevel] = useState('easy');
  return (
    <Routes>
      <Route path="/" element={<BattleshipView level={gameLevel} exact />} />
      <Route path="/settings" element={<SettingsView />} exact />
    </Routes>
  );
}

export default App;
