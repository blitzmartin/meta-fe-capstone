import { MainContainer, Section } from "../../shared";

export const AboutPage = () => {
  return (
     <MainContainer id="about">
            <Section title="About Little Lemon 🍋" className="max-w-2xl mx-auto flex flex-col">
                 <p>Nestled in the heart of Chicago, our cozy, family-owned restaurant is more than just a place to eat—it's a place to feel at home.</p>
                 <p>For over 15, we've been serving up dishes inspired by our Mediterranean heritage, blending the vibrant zest of fresh lemons with time-honored recipes passed down through generations. Every plate is crafted with love, using only the finest locally-sourced ingredients to ensure every bite is bursting with flavor.</p>
                 <p>At Little Lemon, we believe in the power of sharing good food with great company. Whether you're here for a quick lunch, a romantic dinner, or a festive family gathering, our warm and inviting atmosphere is the perfect backdrop for creating cherished memories.</p>
                 <p>From our signature lemon-infused dishes to our decadent desserts, there's something for everyone at Little Lemon. Come for the food, stay for the smiles, and leave with a little zest in your step.</p>
          </Section>
     </MainContainer>
  );
};
