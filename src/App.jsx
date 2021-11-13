import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import BattleshipView from './views/BattleshipView';
import SettingsView from './views/SettingsView';
import { levels } from './util';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

function App() {
  const [gameLevel, setGameLevel] = useState('easy');
  const [customChances, setCustomChances] = useState(undefined);
  const chancesByLevel = levels.find((level) => level.id === gameLevel).chances;
  return (
    <Container>
      <Routes>
        <Route path="/" element={<BattleshipView initialChances={customChances || chancesByLevel} exact />} />
        <Route
          path="/settings"
          element={(
            <SettingsView
              levelSelected={gameLevel}
              chances={customChances || chancesByLevel}
              saveLevel={setGameLevel}
              saveCustomChances={setCustomChances}
            />
        )}
          exact
        />
      </Routes>
    </Container>
  );
}

export default App;
