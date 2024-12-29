export const PageContainer = ({ children }) => {
    return (
        <div id="main" className='w-full flex flex-col items-center'>
            {children}
        </div>
    );
}
