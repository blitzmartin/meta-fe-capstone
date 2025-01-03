import { cn } from '../utils/utils';

export const PageContainer = ({ children }) => {
    return (
        <div id="main" className='w-full flex flex-col items-center'>
            {children}
        </div>
    );
}

export const MainContainer = ({children, id}) => {
    return (
        <main id={id} className='w-full h-screen'>
            {children}
        </main>
    );
}

export const Section = ({ children, className, isHighlighted, title }) => {
    return (
        <section className={cn('w-full px-4 py-2 text-gray-800', className, { 'bg-lemonHighlight': isHighlighted })}>
            {title && <h2 className='text-2xl font-bold text-center pb-4'>{title}</h2>}
            {children}
        </section>
    );
}

export const Separator = () => {
    return <hr className='w-full border-t-1 border-lemonGreenLight' />;
}
