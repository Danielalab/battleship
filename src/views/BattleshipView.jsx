import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/TableGame';
import GameChancesDisplay from '../components/GameChancesDisplay';
import Square from '../components/Square';
import Modal from '../components/Modal';
import Text from '../components/common/Text.styled';
import { buildInitialTable, buildNewSquares } from '../controllers/buildShips';
import {
  checkIfAllShipsAreDestroyed,
  checkIfShipIsDestroyed,
  resgisterAShotAndGetShipPositions,
} from '../controllers/shots';
import GameLegend from '../components/GameLegend';
import Container from '../components/common/Container.styled';

const BattleshipView = ({ initialChances }) => {
  const navigate = useNavigate();
  const [squares, setSquares] = useState(buildInitialTable());
  const [gameChances, setGameChances] = useState(initialChances);
  const [showModal, setShowModal] = useState(false);
  const allShipsAreDestroyed = checkIfAllShipsAreDestroyed(squares);

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

  useEffect(() => {
    if (allShipsAreDestroyed || gameChances === 0) {
      setShowModal(true);
    }
  }, [gameChances, squares]);

  return (
    <Container justifyContent="center" className="w-100">
      <Modal show={showModal} handleClose={() => { setShowModal(false); navigate('/'); }}>
        <Text>
          {allShipsAreDestroyed ? 'You are the best captain! You have destroyed all the ships.' : 'You have run out of shots!'}
        </Text>
      </Modal>
      <div>
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
      </div>
      <GameLegend />
    </Container>
  );
};

export default BattleshipView;

BattleshipView.propTypes = {
  initialChances: PropTypes.number,
};

BattleshipView.defaultProps = {
  initialChances: 200,
};
