import { Section, Separator } from '../../shared';
import { foodItems } from '../../utils/constants';

export const Main = () => {
     return (
          <main id="main" className='w-full h-screen '>
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
          <div className='flex flex-col gap-1 text-gray-800'>
               <Separator />
               <h3 className='text-xl font-bold'>{item.name}</h3>
               <p className='text-sm'>{item.description}</p>
               <p className='text-lg font-bold'>{item.price.toString()}</p>
          </div>
     );
}
