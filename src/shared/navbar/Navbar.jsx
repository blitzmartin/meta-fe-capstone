import { Link } from 'react-router-dom';

export const Navbar = () => {
     return (
          <nav id="navbar">
               <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
               </ul>
          </nav>
     );
};
