import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

interface dataProps {
  name: {
    common: string;
  };
  flags: { svg: string };
  population: number;
  region: string;
  capital: string[];
}

const Index: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const countries = useLoaderData() as dataProps[];

  useEffect(() => {
    // Add or remove 'dark' class based on darkMode state
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-800 h-[100vh]">
      <button onClick={handleDarkMode}>Toggle dark mode</button>

      {countries.length > 0 ? (
        <ul>
          {countries.map((country: dataProps, index: number) => (
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

export default Index;
