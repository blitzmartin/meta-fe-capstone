import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { fetchAPI } from '../../api';
import { MainContainer, Section } from '../../shared';


export const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <MainContainer id="booking">
      <Section title="Book a Table" isHighlighted>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </Section>
    </MainContainer>
  );
};
const bookingSchema = z.object({
  date: z.string().refine((value) => !isNaN(new Date(value).getTime()), {
    message: 'Invalid date',
  }),
  time: z.string().nonempty('Time is required'),
  guests: z.number().min(1, 'At least 1 guest required').max(20, 'Cannot book for more than 20 guests'),
  occasion: z.enum(['Birthday', 'Anniversary'], {
    errorMap: () => ({ message: 'Please select a valid occasion' }),
  }),
});

const fetchInitialTimes = () => {
  const today = new Date();
  return fetchAPI(today)
}

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};


export const BookingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: '',
      time: '',
      guests: 1,
      occasion: 'Birthday',
    },
  });
 const [availableTimes, dispatch] = useReducer(updateTimes, [], fetchInitialTimes);

  useEffect(() => {
    // Initialize with today's available times
    dispatch({ type: 'UPDATE_TIMES', payload: new Date() });
  }, []);

  // Watch for date changes and dispatch updates
  const selectedDate = watch('date');
  if (selectedDate) {
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  }

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    navigate('/congratulations');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto h-screen">
      <div>
        <label htmlFor="date" className="block font-medium">Date</label>
        <input
          type="date"
          id="date"
          className="border rounded p-2 w-full"
          {...register('date')}
        />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}
      </div>

      <div>
      <label htmlFor="time">Time:</label>
       <select id="time" name="time" className="border rounded p-2 w-full" required>
        {availableTimes.map((time) => (
          <option  key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

        {errors.time && <p className="text-red-500">{errors.time.message}</p>}
      </div>

      <div>
        <label htmlFor="guests" className="block font-medium">Number of Guests</label>
        <input
          type="number"
          id="guests"
          className="border rounded p-2 w-full"
          min="1"
          max="20"
          {...register('guests', { valueAsNumber: true })}
        />
        {errors.guests && <p className="text-red-500">{errors.guests.message}</p>}
      </div>

      <div>
        <label htmlFor="occasion" className="block font-medium">Occasion</label>
        <select id="occasion" className="border rounded p-2 w-full" {...register('occasion')}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && <p className="text-red-500">{errors.occasion.message}</p>}
      </div>

      <button type="submit" className="bg-lemonGreen text-white p-2 rounded">
        Book Now
      </button>
    </form>
  );
};
