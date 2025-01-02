import { Link } from 'react-router-dom';
import { MainContainer, Section, Separator } from '../../shared';
import { foodItems } from '../../utils/constants';

export const MainPage = () => {
     return (
          <MainContainer id="main">
               <Section isHighlighted>
                    <h1 className='text-3xl font-bold font-header'>Welcome to the Restaurant</h1>
                    <p className='text-gray-800 mt-4'>
                         You can reserve a table in advance. Click on button and follow instructions!</p>
                    <Link to='booking' className='rounded-xl bg-lemonGreen text-lemonYellow px-3 py-1'>Reserve a table</Link>
               </Section>
               <Section title="Menu" >
                    {foodItems.map((item) => (
                         <MenuItem key={item.id} item={item} />
                    ))}
               </Section>
          </MainContainer>
     );
};

const MenuItem = ({ item }) => {
     return (
          <div className='flex flex-col text-gray-800 py-2 max-w-4xl mx-auto'>
               <Separator />
               <h3 className='text-lg font-bold mt-4 font-header'>{item.name}</h3>
               <p className='text-sm'>{item.description}</p>
               <p className='font-bold text-gray-600'>${item.price.toString()}</p>
          </div>
     );
}
