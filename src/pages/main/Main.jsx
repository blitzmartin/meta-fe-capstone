import { Section, Separator } from '../../shared';
import { foodItems } from '../../utils/constants';

export const Main = () => {
     return (
          <main id="home" className='w-full'>
               <Section title="Menu" isHighlighted>
                    {foodItems.map((item) => (
                         <MenuItem key={item.id} item={item} />
                    ))}
               </Section>
          </main>
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
