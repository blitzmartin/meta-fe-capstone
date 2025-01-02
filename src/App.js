import { useReducer } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import { BookingPage } from './pages/booking/BookingPage';
import { ConfirmedBooking } from './pages/confirmed/ConfirmedBooking';
import { MainPage } from './pages/main/MainPage';
import { Footer, Header, Navbar, PageContainer } from './shared';

// Reducer for available times
const initializeTimes = () => ['18:00', '19:00', '20:00', '21:00'];

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Update logic based on action.payload (selected date)
      return initializeTimes(); // Placeholder
    default:
      return state;
  }
};

const Layout = () => {
  return (
    <PageContainer>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </PageContainer>
  );
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
        <Route path="booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Route>
    </Routes>
  );
}
export default App;
