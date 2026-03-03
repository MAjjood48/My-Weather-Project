import { useState } from "react";
import { Search, AlertTriangle } from "lucide-react";
import "./Home.css";


export default function App() {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <div className="weather-container">
      <Background />

      <Header
        searchFocus={searchFocus}
        onFocus={() => setSearchFocus(true)}
        onBlur={() => setSearchFocus(false)}
      />

      <MainContent />

      <SevenDayForecast />

      <div className="corner-decoration" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Background components                                                      */
/* -------------------------------------------------------------------------- */
function Background() {
  return (
    <>
      <div className="page-background" />
      <div className="weather-bg" />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header with title and search input                                        */
/* -------------------------------------------------------------------------- */
function Header({ searchFocus, onFocus, onBlur }) {
  return (
    <header className="weather-header">
      <h1 className="weather-title">MYWEATHER</h1>

      <div className={`search-wrapper ${searchFocus ? "focused" : ""}`}>
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search for a City..."
          className="search-input"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <div className="weather-moon" />
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main content area: current weather + sidebar                              */
/* -------------------------------------------------------------------------- */
function MainContent() {
  return (
    <main className="weather-main">
      <CurrentWeather />
      <Sidebar />
    </main>
  );
}

function CurrentWeather() {
  return (
    <section className="current-weather">
      <div className="current-header">
        <h2 className="city-name">Egypt</h2>
      </div>

      <div className="temperature-display">
        <span className="temperature">28°</span>
      </div>

      <div className="condition-info">
        <p className="condition">Clear</p>
        <p className="temp-range">H: 30° L: 22°</p>
      </div>

      <FiveDayForecast />
    </section>
  );
}

function FiveDayForecast() {
  const days = [
    { day: "Tue", icon: "☀️", chance: "78%" },
    { day: "Wed", icon: "☁️", chance: "80%" },
    { day: "Thu", icon: "☁️", chance: "70%" },
    { day: "Fri", icon: "☁️", chance: "90%" },
    { day: "Sat", icon: "☁️", chance: "80%" },
  ];

  return (
    <div className="forecast-5day">
      {days.map(({ day, icon, chance }) => (
        <div className="forecast-item" key={day}>
          <div className="forecast-day">{day}</div>
          <div
            className={`forecast-icon ${
              icon === "☀️" ? "sun-icon" : "cloud-icon"
            }`}
          >
            {icon}
          </div>
          <div className="forecast-chance">{chance}</div>
        </div>
      ))}
    </div>
  );
}

function Sidebar() {
  return (
    <section className="weather-sidebar">
      <ForecastCard />
      <AlertsCard />
      <HistoryCard />
    </section>
  );
}

function ForecastCard() {
  return (
    <div className="info-card forecast-card">
      <h3 className="card-title">24-Hour Forecast</h3>
      <svg
        className="forecast-chart"
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,60 40,45 80,50 120,35 160,40 200,30 240,45 300,222"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <div className="forecast-labels">
        <span>6 AM</span>
        <span>12 PM</span>
        <span>6 PM</span>
        <span>12 AM</span>
      </div>
    </div>
  );
}

function AlertsCard() {
  return (
    <div className="info-card alert-card">
      <div className="alert-header">
        <h3 className="card-title">Weather Alerts</h3>
        <div className="alert-icon">
          <AlertTriangle size={16} />
        </div>
      </div>
      <p className="alert-text">Heavy rainfall expected in the area</p>
    </div>
  );
}

function HistoryCard() {
  return (
    <div className="info-card history-card">
      <h3 className="card-title">History</h3>
      <div className="history-list">
        <div className="history-item">Los Angeles</div>
        <div className="history-item">Chicago</div>
        <div className="history-item">Miami</div>
      </div>
    </div>
  );
}

function SevenDayForecast() {
  const extended = [
    { day: "Tue", icon: "☁️", chance: "50%" },
    { day: "Wed", icon: "☀️", chance: "45%" },
    { day: "Thu", icon: "☁️", chance: "50%" },
    { day: "Fri", icon: "☁️", chance: "54%" },
    { day: "Sat", icon: "☁️", chance: "53%" },
    { day: "Sun", icon: "☁️", chance: "66%" },
    { day: "Mon", icon: "🌧️", chance: "77%" },
    { day: "Tue", icon: "☁️", chance: "34%" },
  ];

  return (
    <section className="forecast-7day">
      {extended.map(({ day, icon, chance }) => (
        <div
          className="forecast-item-extended"
          key={day + chance}
        >
          <div className="forecast-day">{day}</div>
          <div
            className={`forecast-icon ${
              icon === "☀️"
                ? "sun-icon"
                : icon === "🌧️"
                ? "cloud-rain-icon"
                : "cloud-icon"
            }`}
          >
            {icon}
          </div>
          <div className="forecast-chance">{chance}</div>
        </div>
      ))}
    </section>
  );
}