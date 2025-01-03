import { Link } from 'react-router';

export const Header = () => {
     return (
          <header id="header" className='w-full flex sm:flex-row flex-col gap-8 px-6 py-4'>
               <div className='w-56 flex justify-center items-center'>
                    <Link to="/">
                         <img className='object-contain' alt="little-lemon-logo" src='/little-lemon-logo.png' />
                    </Link>
               </div>
               <div className='flex flex-col justify-center text-lemonGreen text-sm font-header'>
                    <h2 >A family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</h2>
               </div>
          </header>
     );
};
