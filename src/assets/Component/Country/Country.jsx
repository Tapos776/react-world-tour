import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetail/CountryDetails';
const Country = ({country,visitCountry,handelFlag}) => {
    const {name ,flags,population,area,cca3}=country ;
    const [visited ,setVisited]=useState(false)
    const handelVisit =()=>{
        setVisited (!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'red' : 'black'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            {/* <img src={flags.svg} alt="" /> */}
            {/* <img src={coatOfArms.svg} alt="" /> */}
            <h3>Population : {population}</h3>
            <h3>Area: {area}</h3>
            <h3>Code: {cca3}</h3>
            <button onClick={()=>visitCountry(country)}>Visited</button>
            <button onClick={handelVisit}>Going</button>
            <button onClick={()=>handelFlag(country.flags.png)}>Flag</button>
            {visited ? "I have visited this Country": 'I Want to visited'}
            <hr />
            <CountryDetails 
            country={country}
            visitCountry={visitCountry}
            handelFlag={handelFlag}>

            </CountryDetails>
        </div>
    );
};

export default Country;