import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((countries) => {
        console.log("countries", countries);
        setCountries(countries.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>

        <div className="list-group">
          {countries.map((country) => {
            return (
              <div key={country.alpha3Code}>
                <Link
                  className="list-group-item list-group-item-action"
                  to={country.alpha3Code}
                >
                  <img
                    src={
                      "https://flagpedia.net/data/flags/icon/72x54/" +
                      country.alpha2Code.toLowerCase() +
                      ".png"
                    }
                  ></img>
                  <p>{country.name.common}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
