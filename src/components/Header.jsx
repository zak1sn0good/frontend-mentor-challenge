import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Header = () => {

  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="w-full flex flex-row items-center justify-between px-6 md:px-12 py-4 bg-white dark:bg-[#2b3945] shadow z-20">
      <h2 className="text-base md:text-lg font-semibold md:font-bold dark:text-white">Where in the world?</h2>
      <button
        onClick={() => setTheme(theme => theme === 'light' ? 'dark' : 'light') } 
        className="px-2 py-1 flex flex-row items-center rounded-md border dark:border-gray-600 hover:drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
        <i className="fa-regular fa-moon dark:text-white"></i>
        <span className="text-sm md:text-base px-2 font-semibold dark:text-white">Dark mode</span>
      </button>
    </div>
  );
}
 
export default Header;