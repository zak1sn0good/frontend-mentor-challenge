const CountiesLayout = ({ children, loading, error }) => {
  return (
    <div className={`w-max lg:w-full py-10 ${loading || error ? 'flex flex-col items-center' : 'grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:gap-12 lg:gap-10 md:gap-8 sm:gap-6'}`}>
      {children}
    </div>
  );
}
 
export default CountiesLayout;