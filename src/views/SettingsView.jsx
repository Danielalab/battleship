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

const SettingsView = () => (
  <>
    <Field>
      <Label htmlFor="user-nickname">Nickname</Label>
      <Input type="text" id="user-nickname" placeholder="Jack Sparrow" />
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
    <Button type="submit">
      start game
    </Button>
  </>
);

export default SettingsView;
