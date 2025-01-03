import { fetchImages } from '../../api';
import { MainContainer, Section, Separator } from '../../shared';
import { menuItems } from '../../utils/constants';

export const MenuPage = () => {
     return (
          <MainContainer id="menu">
               <Section title="Menu" isHighlighted className='h-screen'>
                    {menuItems.map((item) => <MenuItem key={item.id} item={item} />)}
               </Section>
          </MainContainer>
     )
}


const MenuItem = ({ item }) => {

     const image = fetchImages(1);
     console.log(image)
     return (
          <div className='flex flex-col gap-6 text-gray-800 max-w-2xl mx-auto'>
               <Separator />
               <div>
                    <div>
                         <h3 className='text-lg font-bold font-header'>{item.name}</h3>
                         <p className='text-sm'>{item.description}</p>
                         <p className='font-bold text-gray-600'>${item.price.toString()}</p>
                    </div>
                    <img alt={image[0].alt} src={image[0].src} />
               </div>
               <div></div>
          </div>
     );
}
