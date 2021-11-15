import 'jest-styled-components';
import { render } from '@testing-library/react';
import Icon from '../Icon.styled';

describe('Icon', () => {
  test('Should renders Icon component', () => {
    const { container } = render(<Icon />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
