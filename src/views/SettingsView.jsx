import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { levels } from '../util';

const Label = styled.label`
  font-size: 2rem;
`;

const Input = styled.input`
  outline: 0;
`;

const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
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
          <Button
            key={level.id}
            selected={levelSelected === level.id}
            onClick={() => saveLevel(level.id)}
          >
            {level.name}
          </Button>
        ))}
      </Field>
      <Field>
        <Label htmlFor="user-chances">Choose my game chances</Label>
        <Input type="number" id="user-chances" placeholder="20" min="20" />
      </Field>
      <Button
        type="submit"
        disabled={!nickname}
        onClick={handleSubmit}
      >
        start game
      </Button>
    </>
  );
};

export default SettingsView;

SettingsView.propTypes = {
  levelSelected: PropTypes.string.isRequired,
  saveLevel: PropTypes.func.isRequired,
};