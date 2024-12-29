import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import { BookingPage } from './pages/booking/BookingPage';
import { Congratulations } from './pages/congratulations/Congratulations';
import { Main } from './pages/main/Main';
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
      <Route index element={<Main />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Route>
    </Routes>
  );
}
export default App;
