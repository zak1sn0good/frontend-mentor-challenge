import { useContext, useState } from "react";
import { FiltersContext } from "../contexts/filtersContext";

const Select = ({ options }) => {
  
  const [open, setOpen] = useState(false);
  const { region } = useContext(FiltersContext);

  const handleOptionClick = (name) => {
    region.update(name);
    setOpen(state => !state);
  };

  return (
    <div className="max-w-[300px] w-full md:w-2/5 xl:w-1/5 relative rounded shadow">
      <button 
        onClick={() => setOpen(state => !state)} 
        className="w-full px-4 py-2 rounded flex items-center justify-between bg-white dark:text-white dark:bg-[#2b3945]"
      >
        <span className="mr-4">
          {
            region.value !== null ? region.value : 'Filter by region'
          }
        </span>
        <i className="fa-solid fa-caret-down"></i>
      </button>
      {
        open
        &&
        <div className="absolute z-10 w-full mt-1 rounded flex flex-col bg-white dark:bg-[#2b3945] dark:text-white border border-gray-200 dark:border-none shadow dark:shadow-gray-600">
          {
            options?.map(option => (
              <div 
                key={option.id}
                onClick={() => handleOptionClick(option.name)}
                className="px-4 py-2 w-full flex items-center justify-between hover:bg-blue-100 dark:hover:bg-gray-600 hover:cursor-pointer"
              >
                <span className="mr-10">{option.name}</span>
                <i className={`fa-solid ${option.icon}`}></i>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}
 
export default Select;