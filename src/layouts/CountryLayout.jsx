const Countrylayout = ({ children }) => {
  return (
    <div className="w-full py-10 flex flex-col space-y-10 lg:space-y-0 lg:flex-row">
      { children }
    </div>
  );
}
 
export default Countrylayout;