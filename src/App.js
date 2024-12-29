import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import { About } from './pages/about/About';
import { Contacts } from './pages/contacts/Contacts';
import { Main } from './pages/main/Main';
import { Footer } from './shared/footer/Footer';
import { Header } from './shared/header';
import { Navbar } from './shared/navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
export default App;
