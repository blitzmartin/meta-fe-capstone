import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import { AboutPage } from './pages/about';
import { BookingPage } from './pages/booking/BookingPage';
import { ConfirmedBooking } from './pages/confirmed/ConfirmedBooking';
import { ContactsPage } from './pages/contacts';
import { HomePage } from './pages/home/HomePage';
import { MenuPage } from './pages/menu';
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
      <Route index element={<HomePage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="about" element={<AboutPage />} />
         <Route path="contacts" element={<ContactsPage />} />
        <Route path="confirmed" element={<ConfirmedBooking />} />
      </Route>
    </Routes>
  );
}
export default App;
