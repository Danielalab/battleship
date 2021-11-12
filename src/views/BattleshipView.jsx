import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import Table from '../components/TableGame';
import GameChancesDisplay from '../components/GameChancesDisplay';
import Square from '../components/Square';
import buildInitialTable from '../controllers/buildShips';
import { chancesByLevel } from '../util';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const BattleshipView = ({ level }) => {
  const [squares, setSquares] = useState(buildInitialTable());
  const [gameChances, setGameChances] = useState(chancesByLevel[level]);
  const chancesController = () => {
    if (gameChances) {
      setGameChances((prevGameChances) => prevGameChances - 1);
    }
  };
  const handleSuccesfulShot = (squareId) => {
    const squareClicked = squares.find((square) => square.id === squareId);
    squareClicked.isClicked = true;
    const shipIsDestroyed = !(squareClicked.shipSquares.some(
      (index) => squares[index].isClicked === false,
    ));
    if (shipIsDestroyed) {
      const newSquares = [...squares];
      squareClicked.shipSquares.forEach((index) => {
        newSquares[index] = {
          ...newSquares[index],
          isDestroyed: true,
        };
      });
      setSquares(newSquares);
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
  level: PropTypes.string.isRequired,
};
