import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SquareStyled from './common/Square.styled';
import Icon from './common/Icon.styled';
import targetIcon from '../img/target.png';
import equixIcon from '../img/equix.png';
import { skullsIconsByShip } from '../util';

const TargetIcon = styled(Icon)`
  visibility: hidden;
`;

const SuccessfulShotIcon = styled(Icon)`
  visibility: visible;
  padding: 8px;
`;

const Square = ({ data, subtractAChance, handleSuccesfulShot }) => {
  const { isFilled, isDestroyed, type } = data;
  const [isClicked, setIsClicked] = useState(false);
  const [squareColor, setSquareColor] = useState('default');
  const handleClick = () => {
    if (!isFilled) {
      setSquareColor('ocean');
    } else {
      setSquareColor('shot');
      handleSuccesfulShot(data.id);
    }
    setIsClicked(true);
    subtractAChance();
  };

  useEffect(() => {
    if (isDestroyed) {
      setTimeout(() => {
        setSquareColor(type);
      }, 500);
    }
  }, [isDestroyed]);

  return (
    <SquareStyled
      onClick={!isClicked ? handleClick : null}
      backgroundColor={squareColor}
    >
      {squareColor !== 'shot' && !isDestroyed && <TargetIcon src={targetIcon} alt="target icon" className="target-icon" />}
      {squareColor !== 'shot' && isDestroyed && <Icon src={skullsIconsByShip[type]} />}
      {squareColor === 'shot' && !isDestroyed && <SuccessfulShotIcon src={equixIcon} alt="Equix icon" />}
    </SquareStyled>
  );
};

export default Square;

Square.propTypes = {
  data: PropTypes.shape({
    isFilled: PropTypes.bool.isRequired,
    type: PropTypes.string,
    shipSquares: PropTypes.arrayOf(PropTypes.number),
    isClicked: PropTypes.bool,
    isDestroyed: PropTypes.bool,
    id: PropTypes.string.isRequired,
  }).isRequired,
  subtractAChance: PropTypes.func.isRequired,
  handleSuccesfulShot: PropTypes.func.isRequired,
};
