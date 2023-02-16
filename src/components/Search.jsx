import { useContext, useState } from "react";
import { FiltersContext } from "../contexts/filtersContext";

const Search = () => {

  const [searchInput, setSearchInput] = useState('');

  const { search } = useContext(FiltersContext);

  return (
    <div className="max-w-[300px] w-full sm:w-auto flex flex-row items-center justify-start bg-white dark:bg-[#2b3945] rounded overflow-hidden shadow">
      <button
        onClick={() => search.update(searchInput)} 
        className="mx-2 w-8 h-8 rounded-full">
        <i className="fa-solid fa-magnifying-glass dark:text-white"></i>
      </button>
      <input
        className="py-2 w-64 outline-none dark:bg-[#2b3945] dark:text-white" 
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            search.update(searchInput);
          }
        }} 
      />
    </div>
  );
}
 
export default Search;