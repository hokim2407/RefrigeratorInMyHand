import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText("냉장고");
  expect(linkElement).toBeInTheDocument();
});
