import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { levels } from '../util';

const Label = styled.label`
  color: #05FC32;
  font-size: 2rem;
  margin: 0 0.75rem;
`;

const Input = styled.input`
  background: transparent;
  color: ${(props) => (props.readOnly ? '#ffffffa2' : '#ffffff')};
  font-size: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  margin: 0 0.75rem;
  padding: 0.5rem 1rem;
  outline: 0;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  margin: 0.75rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;

const ButtonSuccess = styled(Button)`
  background-color: #113CFC;
  color: #ffffff;
  :disabled {
    background-color: transparent;
    color: #ffffffa2;
  }
`;

const ButtonLevel = styled(Button)`
  background-color: ${(props) => (props.selected ? '#FCC82B' : 'transparent')};
  color: ${(props) => (props.selected ? '#000000' : '#ffffffa2')};
`;

const Field = styled.div`
  margin: 2rem 0;
`;

const SettingsView = ({ levelSelected, saveLevel }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const handleInput = (event) => {
    const value = event.target.value.trim();
    setNickname(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <>
      <Field>
        <Label htmlFor="user-nickname">Nickname</Label>
        <Input
          type="text"
          id="user-nickname"
          placeholder="Jack Sparrow"
          onInput={handleInput}
        />
      </Field>
      <Field>
        {levels.map((level) => (
          <ButtonLevel
            key={level.id}
            selected={levelSelected === level.id}
            onClick={() => saveLevel(level.id)}
          >
            {level.name}
          </ButtonLevel>
        ))}
      </Field>
      <Field>
        <Label htmlFor="user-chances">
          <Input type="number" id="user-chances" placeholder="20" min="20" readOnly={levelSelected !== 'custom'} />
        </Label>
      </Field>
      <ButtonSuccess
        type="submit"
        disabled={!nickname}
        onClick={handleSubmit}
      >
        start game
      </ButtonSuccess>
    </>
  );
};

export default SettingsView;

SettingsView.propTypes = {
  levelSelected: PropTypes.string.isRequired,
  saveLevel: PropTypes.func.isRequired,
};
