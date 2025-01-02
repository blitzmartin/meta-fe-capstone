import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import { BookingPage } from './pages/booking/BookingPage';
import { ConfirmedBooking } from './pages/confirmed/ConfirmedBooking';
import { MainPage } from './pages/main/MainPage';
import { Footer, Header, Navbar, PageContainer } from './shared';


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

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="confirmed" element={<ConfirmedBooking />} />
      </Route>
    </Routes>
  );
}
export default App;
