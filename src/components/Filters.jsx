import Search from "./Search";
import Select from "./Select";

const Filters = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
      <Search/>
      <Select 
        options={[
          { id : 0, name : 'All', icon : 'fa-earth' },
          { id : 1, name : 'Africa', icon : 'fa-earth-africa' },
          { id : 2, name : 'Asia', icon : 'fa-earth-asia' },
          { id : 3, name : 'Europe', icon : 'fa-earth-europe' },
          { id : 4, name : 'Americas', icon : 'fa-earth-americas' },
          { id : 5, name : 'Oceania', icon : 'fa-earth-oceania' }
        ]}
      />
    </div>
  );
}
 
export default Filters;