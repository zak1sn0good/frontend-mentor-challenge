import { Link } from "react-router-dom";

const CountryCard = ({ id, country, population, capital, region, flag }) => {
  return (
    <Link
      to={`/country/${id}`}
      className="max-w-[300px] flex flex-col rounded drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] overflow-hidden dark:border-[#2b3945] cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-150">
      <img
        className="w-full h-[180px]" 
        src={flag} 
        alt="flag" 
        />
      <div className="flex-grow px-4 py-6 w-full flex flex-col bg-white dark:bg-[#2b3945] dark:text-white border-t border-t-gray-200 dark:border-t-[#2b3945] ">
        <h2 className="my-2 text-xl font-bold">{country}</h2>
        <h3> <span className="font-semibold">Population :</span> {population}</h3>
        <h3> <span className="font-semibold">Capital :</span> {capital}</h3>
        <h3> <span className="font-semibold">Region :</span> {region}</h3>
      </div>
    </Link>
  );
}
 
export default CountryCard;