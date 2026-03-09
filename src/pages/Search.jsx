import { useState } from "react";
import "../styles/App.css";
import Navbar from "../components/Navbar";
import ErrorHandling from "../components/ErrorHandling";
import LoadingSkeleton from "../components/LoadingSkeleton";

const CITIES = [
  "Cairo",
  "Egypt",
  "Shourk City",
  "Salam City",
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "London, UK",
  "Paris, FR",
  "Tokyo, JP",
];

const getRandomWeather = () => (Math.random() > 0.5 ? "sun" : "rain");

function Search({ isDark, onToggleTheme, onSelectCity, initialQuery = "" }) {
  const [query, setQuery]             = useState(initialQuery);
  const [focused, setFocused]         = useState(false);
  const [weatherType, setWeatherType] = useState("sun");
  const [isLoading, setIsLoading]     = useState(false);

  // ✅ لو الـ initialQuery مش موجود في الـ list → يظهر error تلقائي
  const isValidCity = (q) =>
    CITIES.some((c) => c.toLowerCase().includes(q.toLowerCase()));

  const [error, setError] = useState(
    initialQuery && !isValidCity(initialQuery) ? "NOT_FOUND" : null
  );

  const filteredCities = CITIES.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (city) => {
    setQuery(city);
    setError(null);
    setIsLoading(true);
    setWeatherType(getRandomWeather());
    setTimeout(() => setIsLoading(false), 1500);
    if (onSelectCity) {
      setTimeout(() => onSelectCity(city), 300);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setFocused(false);
      if (query.trim() && !isValidCity(query)) {
        setError("NOT_FOUND");
      }
    }, 200);
  };

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>

      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />

      <div className="content">
        <h2 className="title">Search</h2>

        {/* ✅ ErrorHandling يظهر هنا بس */}
        {error && (
          <ErrorHandling
            type={error}
            onRetry={() => setError(null)}
            onDismiss={() => setError(null)}
          />
        )}

        <div className={`search-box ${focused ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Search city..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setError(null); }}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
          />
          {focused && (
            <ul className="suggestions">
              {filteredCities.length > 0 ? (
                filteredCities.map((city, index) => (
                  <li key={index} onClick={() => handleSelect(city)}>{city}</li>
                ))
              ) : (
                <li className="no-result">No results</li>
              )}
            </ul>
          )}
        </div>

        {isLoading ? (
          <div style={{ marginTop: "24px" }}>
            <LoadingSkeleton />
          </div>
        ) : (
          query && !error && isValidCity(query) && (
            <div className="weather-card">
              <h3>{query}</h3>
              <div className="weather-icon">
                {weatherType === "sun" ? "☀️" : "🌧"}
              </div>
              <p>25°C</p>
              {onSelectCity && (
                <button className="go-home-btn" onClick={() => onSelectCity(query)}>
                  View Full Forecast →
                </button>
              )}
            </div>
          )
        )}
      </div>

      <div className="cloud cloud1" />
      <div className="cloud cloud2" />
    </div>
  );
}

export default Search;