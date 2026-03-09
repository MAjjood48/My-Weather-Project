import { useState } from "react";
import Home   from "./pages/Home";
import Search from "./pages/Search";

export default function App() {
  const [page, setPage]                 = useState("home");
  const [selectedCity, setSelectedCity] = useState("Egypt");
  const [isDark, setIsDark]             = useState(true);
  const [searchQuery, setSearchQuery]   = useState("");

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setSearchQuery("");
    setPage("home");
  };

  return (
    <>
      {page === "home" && (
        <Home
          city={selectedCity}
          isDark={isDark}
          onToggleTheme={() => setIsDark((p) => !p)}
          onGoSearch={(q) => {
            setSearchQuery(q);
            setPage("search"); // ✅ يروح السيرش دايماً حتى لو الاسم غلط
          }}
        />
      )}

      {page === "search" && (
        <Search
          isDark={isDark}
          onToggleTheme={() => setIsDark((p) => !p)}
          onSelectCity={handleSelectCity}
          initialQuery={searchQuery}
        />
      )}
    </>
  );
}