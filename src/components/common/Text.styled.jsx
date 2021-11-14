import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) => (props.size === 'small' ? '1rem' : '1.2rem')};
`;

export default Text;
