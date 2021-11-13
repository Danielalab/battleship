import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import targetIcon from '../img/target.png';
import equixIcon from '../img/equix.png';
import { squaresColor, skullsIconsByShip } from '../util';

const SquareStyled = styled.div`
  background-color: ${(props) => squaresColor[props.backgroundColor]};
  border: 1px solid #1151B5;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  margin: 1px;
  width: 40px;
  transition: background-color 0.05s ease-in;
  :hover > .target-icon {
    background-color: #007a00;
    visibility: visible;
  }
`;

const Icon = styled.img`
  padding: 4px;
  visibility: hidden;
  transition: all 0.05s ease-in;
`;

const SuccessfulShotIcon = styled(Icon)`
  visibility: visible;
  padding: 8px;
`;

const SkullIcon = styled(Icon)`
  visibility: visible;
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
      {squareColor !== 'shot' && !isDestroyed && <Icon src={targetIcon} alt="target icon" className="target-icon" />}
      {squareColor !== 'shot' && isDestroyed && <SkullIcon src={skullsIconsByShip[type]} />}
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
