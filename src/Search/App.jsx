import { useState } from "react";
import "./App.css";

const cities = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "London, UK",
  "Paris, FR",
  "Tokyo, JP",
];

function App() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [weatherType, setWeatherType] = useState("sun"); // sun or rain

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (city) => {
    setQuery(city);
    setWeatherType(Math.random() > 0.5 ? "sun" : "rain");
  };

  return (
    <div className="app">
      <div className="content">
        <h1 className="logo">MYWEATHER</h1>
        <h2 className="title">Search</h2>

        <div className={`search-box ${focused ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Search city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
          />

          {focused && (
            <ul className="suggestions">
              {filteredCities.length > 0 ? (
                filteredCities.map((city, index) => (
                  <li key={index} onClick={() => handleSelect(city)}>
                    {city}
                  </li>
                ))
              ) : (
                <li className="no-result">No results</li>
              )}
            </ul>
          )}
        </div>

        {query && (
          <div className="weather-card">
            <h3>{query}</h3>
            <div className="weather-icon">
              {weatherType === "sun" ? "☀️" : "🌧"}
            </div>
            <p>25°C</p>
          </div>
        )}
      </div>

      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
    </div>
  );
}

export default App;