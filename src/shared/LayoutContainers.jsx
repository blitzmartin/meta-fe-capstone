import { cn } from '../utils/utils';

export const PageContainer = ({ children }) => {
    return (
        <div id="main" className='w-full flex flex-col items-center'>
            {children}
        </div>
    );
}

export const Section = ({ children, className, isHighlighted, title }) => {
    return (
        <section className={cn('w-full px-4 py-2 text-gray-800', className, { 'bg-yellow-100': isHighlighted })}>
            {title && <h2 className='text-2xl font-bold text-center '>{title}</h2>}
            {children}
        </section>
    );
}
