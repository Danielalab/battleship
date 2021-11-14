import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  margin: 0.75rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;

export const ButtonSuccess = styled(Button)`
  background-color: #113CFC;
  color: #ffffff;
  :disabled {
    background-color: transparent;
    color: #ffffffa2;
  }
`;
