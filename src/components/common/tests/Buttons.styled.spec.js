import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Button, ButtonSuccess } from '../Buttons.styled';

describe('Buttons', () => {
  test('Should renders Button component', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should renders ButtonSuccess component', () => {
    const { container } = render(<ButtonSuccess />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
