import { useState } from "react";

import "./App.css";

// list of cities that the user will search through
const cities = [
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


// function that returns random weather - sun or rain
// placed outside component so eslint doesnt complain
const getRandomWeather = () => {
  // returns random number between 0 and 1
  const random = Math.random();

  // if greater than 0.5 return sun otherwise rain
  return random > 0.5 ? "sun" : "rain";
};

// main component of the app
function App() {

  // saves what the user types in the search
  const [query, setQuery] = useState("");

  // to know if the user clicked on the input or not
  const [focused, setFocused] = useState(false);

  // saves the weather type - sun or rain
  const [weatherType, setWeatherType] = useState("sun");

  // filter cities that match what user typed
  // toLowerCase so search is not case sensitive
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );


  // runs when the user clicks on a city
  const handleSelect = (city) => {

    // put city name in the search box
    setQuery(city);


    // generate random weather for the city
    setWeatherType(getRandomWeather());
  };

  return (

    // big div that wraps everything
    <div className="app">


       {/* main content  */}
      <div className="content">

 
         {/* app name at the top  */}
        <h1 className="logo">MYWEATHER</h1>


        <h2 className="title">Search</h2>

        {/* search box - if focused adds class called active */}
        <div className={`search-box ${focused ? "active" : ""}`}>

          <input
            type="text"
            placeholder="Search city..."

            value={query}
            // every time a character is typed it updates the state
            onChange={(e) => setQuery(e.target.value)}

            // when user clicks on the input
            onFocus={() => setFocused(true)}
            // when user leaves wait 200ms so they can click a city first
            onBlur={() => setTimeout(() => setFocused(false), 200)}
          />

           {/* this list only shows if input is focused  */}
          {focused && (
            <ul className="suggestions">
               {/* if there are cities show them otherwise show no results  */}
              {filteredCities.length > 0 ? (
                filteredCities.map((city, index) => (

                  // each city when clicked calls handleSelect
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


        {/* this card only shows if user selected a city */}
        {query && (
          <div className="weather-card">

            {/* city name */}
            <h3>{query}</h3>


            {/* icon - sun or rain based on state */}
            <div className="weather-icon">
              {weatherType === "sun" ? "☀️" : "🌧"}
            </div>
            {/* temperature - still static for now */}
            <p>25°C</p>
          </div>
        )}
      </div>

      {/* سحب ديكور بتتحرك في الخلفية */}
      {/* decorative clouds moving in background */}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
    </div>
  );
}

// exporting component so main.jsx can use it
export default App;
