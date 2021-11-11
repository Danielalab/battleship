import styled from 'styled-components';
import TableGame from '../components/TableGame';
import GameChancesDisplay from '../components/GameChancesDisplay';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const BattleshipView = () => (
  <Container>
    <GameChancesDisplay />
    <TableGame />
  </Container>
);

export default BattleshipView;
