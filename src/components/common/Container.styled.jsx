import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
`;

export default Container;
