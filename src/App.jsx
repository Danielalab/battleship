import './App.css';
import { Routes, Route } from 'react-router-dom';
import BattleshipView from './views/BattleshipView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BattleshipView />} />
    </Routes>
  );
}

export default App;
