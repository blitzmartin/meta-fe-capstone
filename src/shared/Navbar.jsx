import { Link } from 'react-router-dom';
import { navBarLinks } from '../utils/constants';

export const Navbar = () => {
     return (
          <nav id="navbar" className='w-full px-4 py-2 bg-lemonGreen'>
               <ul className="navbar-links flex w-full justify-end gap-3 text-white">
                    {navBarLinks.map((link) => (
                         <li key={link.id}>
                              <Link to={link.linkTo}>{link.name}</Link>
                         </li>
                    ))
                    }
               </ul>
          </nav>
     );
};
