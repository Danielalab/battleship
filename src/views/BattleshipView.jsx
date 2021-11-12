import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import Table from '../components/TableGame';
import GameChancesDisplay from '../components/GameChancesDisplay';
import Square from '../components/Square';
import buildInitialTable from '../controllers/buildShips';
import chancesByLevel from '../util';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const BattleshipView = ({ level }) => {
  const squares = buildInitialTable();
  const [gameChances, setGameChances] = useState(chancesByLevel[level]);
  return (
    <Container>
      <GameChancesDisplay chances={gameChances} />
      <Table>
        {squares.map((square) => <Square data={square} subtractAChance={setGameChances} />)}
      </Table>
    </Container>
  );
};

export default BattleshipView;

BattleshipView.propTypes = {
  level: PropTypes.string.isRequired,
};
