import Header from "../components/Header";
import PageLayout from "../layouts/PageLayout";
import MainLayout from "../layouts/MainLayout";
import Filters from "../components/Filters";
import CountiesLayout from "../layouts/CountriesLayout";
import CountryCard from "../components/CountryCard";
import { useState } from "react";
import { useEffect } from "react";
import { FiltersContext } from "../contexts/filtersContext";
import Loader from "../components/Loader";

const Home = () => {
  
  const [countries, setCountries] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');

  const [region, setRegion] = useState('All');
  
  useEffect(() => {
    
    setLoading(true);
    setError(false);
    
    let url;

    if(search === ''){
      url  = `https://restcountries.com/v3.1/${ region === 'All' ? 'all' : 'region/'.concat(region.toLowerCase()) }`;
    }else{
      url  = `https://restcountries.com/v3.1/name/${search}`;
    }

    setTimeout(() => {
      fetch(url)
      .then(res => {
        if(res.ok){
          return res.json();
        }else{
          throw new Error();
        }
      })
      .then(resj => {
        setLoading(false);
        setError(false);
        setCountries(resj);
      })
      .catch(err => {
        setCountries([]);
        setLoading(false);
        setError(true);
      });
    }, 1500);

  }, [region, search]);

  return (
    <FiltersContext.Provider value={{ search : { value : search, update : setSearch }, region : { value : region, update : setRegion } }}>
    <PageLayout>
      <Header/>
      <MainLayout>
        <Filters/>
        <CountiesLayout loading={loading} error={error}>
          {
            loading
            &&
            <Loader/>
          }
          {
            error
            &&
            <div className="text-lg font-medium text-red-400 italic">
              error while fetching data!
            </div>
          }
          { 
            !loading && !error && countries.length > 0
            &&
            countries.map(country => (
            <CountryCard
              key={country.cca3}
              id={country.ccn3}
              country={country.name.common}
              capital={country.capital}
              region={country.region}
              population={country.population}
              flag={country.flags.png}
            />
          )) }
        </CountiesLayout>
      </MainLayout>
    </PageLayout>
    </FiltersContext.Provider>
  );
}
 
export default Home;