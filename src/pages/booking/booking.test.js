import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../api';
import { BookingPage } from './BookingPage';

jest.mock('../../api');

describe('BookingForm Component', () => {
  beforeEach(() => {
    fetchAPI.mockReturnValue(['12:00', '13:00', '14:00']);
    submitAPI.mockImplementation(() => {});
  });

  test('renders the booking form fields correctly', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Select a date for your booking/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select a time for your booking/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter the number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select the occasion for your booking/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument();
  });

  test('displays validation error when submitting an empty form', async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /Book Now/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid date/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
    });
  });

  test('fetches available times on initial render', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('updates available times when date changes', async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Select a date for your booking/i);
    fireEvent.change(dateInput, { target: { value: '2025-01-02' } });

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledWith(new Date('2025-01-02'));
    });
  });

  test('submits the form with valid data', async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Select a date for your booking/i), { target: { value: '2025-01-02' } });
    fireEvent.change(screen.getByLabelText(/Select a time for your booking/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/Enter the number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Select the occasion for your booking/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /Book Now/i }));

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith({
        date: '2025-01-02',
        time: '12:00',
        guests: 4,
        occasion: 'Birthday',
      });
    });
  });

  test('navigates to confirmation page after successful form submission', async () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Select a date for your booking/i), { target: { value: '2025-01-02' } });
    fireEvent.change(screen.getByLabelText(/Select a time for your booking/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/Enter the number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Select the occasion for your booking/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /Book Now/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/confirmed');
    });
  });
});
