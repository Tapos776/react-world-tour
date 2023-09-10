import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [counties , setCountries]= useState([]);
    const [visitedCountry ,setVisitedCountry] =useState([])
    const [visitedFlag, setVisitedFlag] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handelVisitedCountry =country =>{
        const allVisitedCountry =[...visitedCountry ,country]
        setVisitedCountry (allVisitedCountry)
    }
    const handelFlag =flag=>{
       const newFlag =[...visitedFlag ,flag]
       setVisitedFlag(newFlag)
    }
    return (
        <div >
            <h3>Countries: {counties.length}</h3>
            <h3>Countries: {visitedCountry.length}</h3>
            <div >
                <ol >
                   {
                    visitedCountry.map(country => <li  key={country.cca3}> {country.name.common}</li>)
                   }
                </ol>
            </div>
            <div className="flag-container">
                {
                    visitedFlag.map(flags=><img key={flags} src={flags}></img>)
                }
            </div>
          <div className="countries-container">
          {
                counties.map(countries=>
                <Country 
                key ={countries.cca3}
                country ={countries}
                visitCountry ={handelVisitedCountry}
                handelFlag ={handelFlag}>
                
                </Country>)
            }
          </div>
        </div>
    );
};

export default Countries;