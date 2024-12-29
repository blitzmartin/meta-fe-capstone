import { Link } from 'react-router-dom';
import { Section } from '../../shared';

export const Congratulations = () => {
  return (
     <main id="congratulations" className='w-full'>
          <Section title="Congratulations!" className={"h-screen text-center py-12"} isHighlighted>
               <p className="mt-4 max-w-2xl mx-auto">
                      Your table has been reserved. You will receive a confirmation message via your preferred means of contact containing necessary information about your reservation.
               </p>
               <Link to="/">
                    <button className="bg-lemonGreen text-white p-3 rounded mt-6">Back to Home</button>
               </Link>
          </Section>
    </main>
  );
};
