// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('affiche le header', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // Adapte ce test à ton projet :
  expect(screen.getByRole('banner')).toBeInTheDocument();
});