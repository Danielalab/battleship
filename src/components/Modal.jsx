import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonSuccess } from './common/Buttons.styled';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: #00000099;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const ContentSection = styled.section`
  position:fixed;
  background-color: #181A1B;
  width: 50%;
  height: auto;
  top:50%;
  left:50%;
  padding: 2rem;
  text-align: center;
  transform: translate(-50%,-50%);
`;

const Modal = ({ handleClose, show, children }) => (
  <Container show={show}>
    <ContentSection>
      {children}
      <ButtonSuccess type="button" onClick={handleClose}>
        play again
      </ButtonSuccess>
    </ContentSection>
  </Container>
);

export default Modal;

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
