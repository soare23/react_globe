import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function Country({ country }) {
  console.log(country);

  return (
    <>
      <div className="details-container">
        <div className="general-details sub-containers">
          <div className="title">
            <h4>General Details</h4>
          </div>
          <div className="general-details-split">
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
            <h4>Economic Details</h4>
          </div>
          <p>Currency</p>
          {country.currencies.map((currency) => (
            <div>
              <p>Name: {currency.name}</p>
              <p>Code: {currency.code}</p> <p>Symbol: {currency.symbol}</p>
            </div>
          ))}
        </div>
        <div className="geographic-details sub-containers">
          <div className="title">
            <h4>Geographic Details</h4>
          </div>
          <p>Region: {country.subregion}</p>
          {country.timezones.map((timezone) => (
            <p>{timezone}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Country;
