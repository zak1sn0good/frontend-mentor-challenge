import Header from "../components/Header";
import PageLayout from "../layouts/PageLayout";
import MainLayout from "../layouts/MainLayout";
import CountryLayout from "../layouts/CountryLayout";
import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import BackBtnLayout from "../layouts/BackBtnLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCountry = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState(null);

  const { countryName } = useParams();

  useEffect(() => {

    window.scrollTo(0, 0);
    setLoading(true);
    setError(false);

    setTimeout(() => {
      fetch(`https://restcountries.com/v3.1/alpha/${countryName}`)
      .then(resj => {
        if(resj.ok){
          return resj.json();
        }else{
          throw new Error();
        }
      })
      .then(res => {
        setLoading(false);
        setCountry(res[0]);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
    }, 1500);

  }, [countryName]);

  const iterateOverObject = (obj) => {
    let valuesArray = [];
    for( const value of Object.values(obj)){
      valuesArray.push(value);

    }
    return valuesArray;
  }

  return (
    <PageLayout>
      <Header/>
      <MainLayout>
        <BackBtnLayout>
          <BackBtn/>
        </BackBtnLayout>
        <CountryLayout>
          {
            loading
            &&
            <Loader/>
          }
          {
            error
            &&
            <div className="text-red-500 font-medium italic text-lg">
              error while fetching data!
            </div>
          }
          {
            country
            &&
            <>
              <div className="max-w-[425px] w-full lg:w-2/5 mr-20">
                <img
                  className="w-full h-[250px] lg:h-[325px]" 
                  src={country.flags.png} 
                  alt={country.flags.alt} 
                />
              </div>
              <div className="w-full lg:w-3/5 flex flex-col items-start space-y-6 dark:text-white">
                <h2 className="text-2xl font-bold">{country.name.common}</h2>
                <div className="w-full flex flex-col items-start space-y-4 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between">
                  <div className="w-full sm:w-1/2 space-y-1">
                    <p><span className="font-bold">Population :</span> {country.population}</p>
                    <p><span className="font-bold">Region :</span> {country.region}</p>
                    <p><span className="font-bold">Sub Region :</span> {country.subregion}</p>
                    <p><span className="font-bold">Capital :</span> {country.capital}</p>
                  </div>
                  <div className="w-full sm:w-1/2 space-y-1">
                    <p><span className="font-bold">Top level domain :</span> {country.tld}</p>
                    <p><span className="font-bold">Currencies :</span> { iterateOverObject(country.currencies).map(currency => ( <span key={currency.name}> {currency.name}, </span> )) }</p>
                    <p><span className="font-bold">Languages :</span> { iterateOverObject(country.languages).map(lang => ( <span key={lang}> {lang}, </span> )) }</p>
                  </div>
                </div>
                <div className="w-full flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-start sm:space-x-3">
                  <p className="min-w-fit font-bold">Border Countries : </p>
                  <div className="w-full flex flex-row flex-wrap">
                    {
                      'borders' in country ?
                      country.borders.map(border => (
                        <div
                          key={border} 
                          className="mr-2 mb-2 px-5 py-2 bg-white dark:bg-[#2b3945] shadow rounded">
                          {border}
                        </div>    
                      ))
                      :
                      <p className="font-medium italic">has no borders!</p>
                    }
                  </div>
                </div>
              </div>
            </>
          }
        </CountryLayout>
      </MainLayout>
    </PageLayout>
  );
}
 
export default SingleCountry;