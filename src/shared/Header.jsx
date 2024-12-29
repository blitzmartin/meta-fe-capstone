import { Link } from 'react-router';

export const Header = () => {
     return (
          <header id="header" className='w-full flex gap-4 bg-lemonGreen'>
               <div className='w-32 h-32'>
                    <Link to="/">
                         <img className='object-contain' alt="little-lemon-log" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeNJGPK3Q_b9f9iBhMgu2JhZMXkXUDhPqqQ&s' />
                    </Link>
               </div>
               <div className='flex flex-col max-w-72 text-white'>
                    <h1 className='text-2xl'>Little Lemon</h1>
                    <h2 className='text-lg'>Chicago</h2>
                    <h3>We are a family ownd Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
               </div>
          </header>
     );
};
