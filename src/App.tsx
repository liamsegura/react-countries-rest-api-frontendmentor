import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure you have axios installed

interface dataProps {
  name: {
    common: string;
  };
  flags: { svg: string };
  population: number;
  region: string;
  capital: string[];
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState<dataProps[]>([]);

  useEffect(() => {
    // Add or remove 'dark' class based on darkMode state
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Fetch data from the API
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-800 h-[100vh]">
      <button onClick={handleDarkMode}>Toggle dark mode</button>

      {data.length > 0 ? (
        <ul>
          {data.map((country, index) => (
            <li key={index}>
              <img className="w-20" src={country.flags.svg}></img>
              <h3>{country.name.common}</h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
