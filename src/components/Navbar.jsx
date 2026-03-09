import { useState } from "react";
import { Search } from "lucide-react";
import DarkLightToggle from "./DarkLightToggle";

export default function Navbar({ isDark, onToggleTheme, onSearch }) {
  const [query, setQuery] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch?.(query.trim());
  };

  return (
    <header className="weather-header">
      <h1 className="weather-title">MYWEATHER</h1>

      <form
        onSubmit={handleSubmit}
        className={`search-wrapper ${searchFocus ? "focused" : ""}`}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search for a City..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />
      </form>

      {/* ✅ onToggleTheme بيتمرر صح لـ DarkLightToggle */}
      <DarkLightToggle isDark={isDark} onToggle={onToggleTheme} />
    </header>
  );
}