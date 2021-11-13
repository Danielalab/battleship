import PropTypes from 'prop-types';
import { useState } from 'react';
import Table from '../components/TableGame';
import GameChancesDisplay from '../components/GameChancesDisplay';
import Square from '../components/Square';
import { buildInitialTable, buildNewSquares } from '../controllers/buildShips';
import {
  checkIfShipIsDestroyed,
  resgisterAShotAndGetShipPositions,
} from '../controllers/shots';

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
    <>
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
    </>
  );
};

export default BattleshipView;

BattleshipView.propTypes = {
  initialChances: PropTypes.number,
};

BattleshipView.defaultProps = {
  initialChances: 20,
};
