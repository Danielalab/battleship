import PropTypes from 'prop-types';
import styled from 'styled-components';

const Display = styled.div`
  background-color: #FBD148;
  padding: 1rem;
  margin: 1rem 0;
`;

const Text = styled.p`
  color: #000000;
  font-size: 1.2rem;
  margin: 0;
`;

const GameChancesDisplay = ({ chances }) => (
  <Display>
    <Text>Game chances</Text>
    <Text>{chances || 'Infinity'}</Text>
  </Display>
);

export default GameChancesDisplay;

GameChancesDisplay.propTypes = {
  chances: PropTypes.number,
};

GameChancesDisplay.defaultProps = {
  chances: null,
};
