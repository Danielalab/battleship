import 'jest-styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from './App';

describe('Buttons', () => {
  test('Should renders Button component', () => {
    /* render component with router */
    const history = createMemoryHistory();
    const { container } = render(
      <Router location={history}>
        <App />
      </Router>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
