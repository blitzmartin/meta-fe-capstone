import { Link } from 'react-router-dom';
import { Section } from '../../shared';

export const ConfirmedBooking = () => {
  return (
     <main id="congratulations" className='w-full'>
            <Section title="Congratulations!" className={"h-screen text-center py-12"} isHighlighted>
                 <div className="w-52 h-auto mb-6 flex justify-center mx-auto">
                  <img
        src="/congrats.svg"
        alt="Congratulations"
       className='object-cover w-full h-full'
                      />
                      </div>
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
