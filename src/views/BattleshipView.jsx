import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import Table from '../components/TableGame';
import GameChancesDisplay from '../components/GameChancesDisplay';
import Square from '../components/Square';
import { buildInitialTable, buildNewSquares } from '../controllers/buildShips';
import {
  checkIfShipIsDestroyed,
  resgisterAShotAndGetShipPositions,
} from '../controllers/shots';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const BattleshipView = ({ initialChances }) => {
  const [squares, setSquares] = useState(buildInitialTable());
  const [gameChances, setGameChances] = useState(initialChances);
  const chancesController = () => {
    if (gameChances) {
      setGameChances((prevGameChances) => prevGameChances - 1);
    }
  };
  const handleSuccesfulShot = (squareId) => {
    const shipPositions = resgisterAShotAndGetShipPositions(squares, squareId);
    const shipIsDestroyed = checkIfShipIsDestroyed(squares, shipPositions);
    if (shipIsDestroyed) {
      const newSquares = buildNewSquares(squares, shipPositions);
      setTimeout(() => {
        setSquares(newSquares);
      }, 500);
    }
  };
  return (
    <Container>
      <GameChancesDisplay chances={gameChances} />
      <Table>
        {squares.map(
          (square) => (
            <Square
              key={square.id}
              data={square}
              subtractAChance={chancesController}
              handleSuccesfulShot={handleSuccesfulShot}
            />
          ),
        )}
      </Table>
    </Container>
  );
};

export default BattleshipView;

BattleshipView.propTypes = {
  initialChances: PropTypes.number,
};

BattleshipView.defaultProps = {
  initialChances: 20,
};
