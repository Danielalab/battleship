import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './common/Text.styled';

const Display = styled.div`
  background-color: #FBD148;
  padding: 1rem;
  margin: 1rem 0;
`;

const ChancesText = styled(Text)`
  color: #000000;
  margin: 0;
`;

const GameChancesDisplay = ({ chances }) => (
  <Display>
    <ChancesText>Game chances</ChancesText>
    <ChancesText>{chances === null ? 'Infinity' : chances}</ChancesText>
  </Display>
);

export default GameChancesDisplay;

GameChancesDisplay.propTypes = {
  chances: PropTypes.number,
};

GameChancesDisplay.defaultProps = {
  chances: null,
};
