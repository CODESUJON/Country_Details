import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/PostApi'
import Loader from '../components/UI/Loader';
import CountryCard from '../components/layouts/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';

function Country() {

  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState()


  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData()
      // console.log(res);
      setCountries(res.data);


    });

  }, []);

  if (isPending) return <Loader />

  // console.log(search, filter);

  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;

  }

  const filterRegion=(country)=>{
    if(filter==='all')
      return country;
      return country.region === filter;
    

  }


  //main search logic

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );



  return (
    <section className="country-section">
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
      <ul className="grid grid-four-cols">
        {
          filterCountries.map((curCountry, index) => {
            return <CountryCard key={index} country={curCountry} />
          })
        }

      </ul>
    </section>
  )
}

export default Country