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
  checkIfShipIsDestroyed,
  resgisterAShotAndGetShipPositions,
} from '../controllers/shots';

const BattleshipView = ({ initialChances }) => {
  const navigate = useNavigate();
  const [squares, setSquares] = useState(buildInitialTable());
  const [gameChances, setGameChances] = useState(initialChances);
  const [showModal, setShowModal] = useState(false);

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
    if (gameChances === 0) {
      setShowModal(true);
    }
  }, [gameChances]);

  return (
    <>
      <Modal show={showModal} handleClose={() => { setShowModal(false); navigate('/'); }}>
        <Text>You have run out of shots!</Text>
      </Modal>
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
