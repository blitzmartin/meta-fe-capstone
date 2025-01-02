import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BookingPage } from './BookingPage';

// Mock the fetchAPI and submitAPI functions
jest.mock('../../api', () => ({
  fetchAPI: jest.fn().mockResolvedValue([]),
  submitAPI: jest.fn(),
}));

describe('BookingPage', () => {
  it('renders the booking form correctly', () => {
    render(
      <BrowserRouter>
        <BookingPage availableTimes={[]} dispatch={jest.fn()} />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/select a date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select a time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enter the number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select the occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book now/i })).toBeInTheDocument();
  });

  it('submits the form', async () => {
    render(
      <BrowserRouter>
        <BookingPage availableTimes={['18:00', '19:00']} dispatch={jest.fn()} />
      </BrowserRouter>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/select a date/i), { target: { value: '2025-01-01' } });
    fireEvent.change(screen.getByLabelText(/select a time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/enter the number of guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/select the occasion/i), { target: { value: 'Birthday' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /book now/i }));

    // Wait for the form submission and check that submitAPI was called
    await waitFor(() => expect(require('../../api').submitAPI).toHaveBeenCalled());
  });
});
