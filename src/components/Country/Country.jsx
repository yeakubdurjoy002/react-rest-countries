import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisiting = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Country Name : {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>
      <button onClick={handleVisiting}>Click to visit</button>
      {visited
        ? "I have visited this country"
        : "I want  to visit this country"}
    </div>
  );
};

export default Country;
