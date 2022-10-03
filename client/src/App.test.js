import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home'
import store from './redux/store/'
import {Provider} from 'react-redux'

test('renders learn react link', () => {
  render(
  <Provider store = {store}>
  <Home />
  </Provider>
  );
  const linkElement = screen.getByText(/Nav/i);
  expect(linkElement).toBeInTheDocument();
});
