import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import BattleshipView from './views/BattleshipView';
import SettingsView from './views/SettingsView';
import { levels } from './util';

function App() {
  const [gameLevel, setGameLevel] = useState('easy');
  const [customChances, setCustomChances] = useState(undefined);
  const chancesByLevel = levels.find((level) => level.id === gameLevel).chances;
  return (
    <Routes>
      <Route path="/" element={<BattleshipView initialChances={customChances || chancesByLevel} exact />} />
      <Route
        path="/settings"
        element={(
          <SettingsView
            levelSelected={gameLevel}
            saveLevel={setGameLevel}
            saveCustomChances={setCustomChances}
          />
        )}
        exact
      />
    </Routes>
  );
}

export default App;
