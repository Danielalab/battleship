import 'jest-styled-components';
import { render } from '@testing-library/react';
import Text from '../Text.styled';

describe('Text', () => {
  test('Should renders Text component', () => {
    const { container } = render(<Text />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should renders Text with small font-size', () => {
    const { container } = render(<Text size="small" />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
