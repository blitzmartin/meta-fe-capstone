import { Link } from 'react-router-dom';

export const Navbar = () => {
     return (
          <nav id="navbar" className='w-full px-4 py-2 bg-lemonGreen'>
               <ul className="navbar-links flex w-full justify-end gap-3 text-white">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
               </ul>
          </nav>
     );
};
