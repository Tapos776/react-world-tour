import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    return (
        <div>
            <h4>Country Details</h4>
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetails;