import 'jest-styled-components';
import { render } from '@testing-library/react';
import Container from '../Container.styled';

describe('Container', () => {
  test('Should renders Container component', () => {
    const { container } = render(<Container />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should renders Container component with flex-direction & justify-content values', () => {
    const { container } = render(<Container direction="column" justifyContent="center" />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
