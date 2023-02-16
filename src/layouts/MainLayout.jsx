const MainLayout = ({ children }) => {
  return (
    <div className="px-8 xl:px-28 lg:px-20 md:px-14 sm:px-10 py-8 w-full min-h-screen flex flex-col items-center bg-[#f8f8f8] dark:bg-[#202c37]">
      {children}
    </div>
  );
}
 
export default MainLayout;