import { useState } from 'react';
import styled from 'styled-components';

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

const SettingsView = () => {
  const [nickname, setNickname] = useState('');
  const handleInput = (event) => {
    const value = event.target.value.trim();
    setNickname(value);
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
        <Button>easy</Button>
        <Button>medium</Button>
        <Button>hard</Button>
      </Field>
      <Field>
        <Label htmlFor="user-chances">Choose my game chances</Label>
        <Input type="number" id="user-chances" placeholder="20" min="20" />
      </Field>
      <Button type="submit" disabled={!nickname}>
        start game
      </Button>
    </>
  );
};

export default SettingsView;
