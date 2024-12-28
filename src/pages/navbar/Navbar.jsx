import { Link } from 'react-router-dom';

export const Navbar = () => {
     return (
          <nav id="navbar">
               <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
               </ul>
          </nav>
     );
};
