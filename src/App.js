import './App.css';
import { Footer } from './pages/footer/Footer';
import { Header } from './pages/header';
import { Main } from './pages/main/Main';
import { Navbar } from './pages/navbar/Navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
