import 'jest-styled-components';
import { render } from '@testing-library/react';
import SquareStyled from '../Square.styled';

describe('Square.styled', () => {
  test('Should renders SquareStyled component', () => {
    const { container } = render(<SquareStyled backgroundColor="default" />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
