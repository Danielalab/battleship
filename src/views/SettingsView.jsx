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

const SettingsView = ({
  levelSelected, saveLevel, chances, saveCustomChances,
}) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleInput = (event) => {
    const value = event.target.value.trim();
    const { id } = event.target;

    if (id === 'user-nickname') {
      setNickname(value);
    } else {
      const customChancesValue = parseInt(value, 10);
      if (customChancesValue >= 20) {
        saveCustomChances(customChancesValue);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('nickname', nickname);
    navigate('/battleship');
  };

  return (
    <>
      <Field>
        <Label htmlFor="user-nickname">Nickname:</Label>
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
          Chances:
          <Input
            type={levelSelected === 'easy' ? 'text' : 'number'}
            id="user-chances"
            min="20"
            value={chances || 'Infinity'}
            readOnly={levelSelected !== 'custom'}
            onInput={handleInput}
          />
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

SettingsView.defaultProps = {
  chances: 200,
};

SettingsView.propTypes = {
  levelSelected: PropTypes.string.isRequired,
  saveLevel: PropTypes.func.isRequired,
  chances: PropTypes.number,
  saveCustomChances: PropTypes.func.isRequired,
};
