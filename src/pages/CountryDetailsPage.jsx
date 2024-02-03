import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const CountryDetailsPage = () => {
  const { countryId } = useParams();
  console.log(countryId);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((country) => {
        setCountry(country.data);
        console.log("country", country.data.name.common);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryId]);

  return (
    <div>
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
        {country && (
          <div>
            <h1>{country.name.common}</h1>

            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((border) => {
                        return (
                          border && (
                            <li key={border}>
                              <Link to={`/${border}`}> {border} </Link>
                            </li>
                          )
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetailsPage;
