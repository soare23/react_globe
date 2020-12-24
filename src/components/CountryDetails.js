import React from 'react';

function Country({ country }) {
  const rounded = (num) => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + ' Bn';
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + ' M';
    } else {
      return Math.round(num / 100) / 10 + ' K';
    }
  };

  return (
    <>
      <div className="details-container">
        <div className="general-details sub-containers">
          <div className="title">
            <h4>GENERAL DETAILS</h4>
          </div>
          <div className="general-details-split split">
            <div>
              <p>Country Name: {country.name}</p>
              <p>Capital: {country.capital}</p>
              <img src={country.flag} alt="country-flag"></img>
              <p>
                Alpha Code: {country.alpha2Code} or {country.alpha3Code}
              </p>
            </div>
            <div>
              <p>Neighbours: </p>
              {country.borders.map((border) => (
                <p>{border}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="economic-details sub-containers">
          <div className="title">
            <h4>ECONOMIC DETAILS</h4>
          </div>
          <div className="split">
            <p>Currency</p>
            {country.currencies.map((currency) => (
              <div>
                <p>Name: {currency.name}</p>
                <p>Code: {currency.code}</p> <p>Symbol: {currency.symbol}</p>
              </div>
            ))}
            <p>Population: {rounded(country.population)}</p>
          </div>
        </div>
        <div className="geographic-details sub-containers">
          <div className="title">
            <h4>GEOGRAPHIC DETAILS</h4>
          </div>
          <div className="split">
            <p>Region: {country.subregion}</p>
            {country.timezones.map((timezone) => (
              <p>{timezone}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
