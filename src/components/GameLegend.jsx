import styled from 'styled-components';
import Text from './common/Text.styled';
import { ships } from '../controllers/buildShips';
import Container from './common/Container.styled';
import SquareStyled from './common/Square.styled';
import Icon from './common/Icon.styled';
import { skullsIconsByShip } from '../util';

const Title = styled(Text)`
  color: #05FC32;
`;

const GameLegend = () => (
  <Container direction="column" className="m-2 p-1">
    <Title>Ships legend</Title>
    {ships.map(({ type, size, total }) => (
      <div key={type}>
        <Text size="small">
          {type}
          :
          {' '}
          {total}
        </Text>
        <Container>
          {[...Array(size)]
            .map((_, index) => ({ id: `${type}-${index}` }))
            .map(({ id }) => (
              <SquareStyled key={id} backgroundColor={type}>
                <Icon src={skullsIconsByShip[type]} />
              </SquareStyled>
            ))}
        </Container>
      </div>
    ))}
  </Container>
);

export default GameLegend;
