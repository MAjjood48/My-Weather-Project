import DarkLightToggle from "./DarkLightToggle";

export default function Navbar({ isDark, onToggleTheme }) {
  return (
    <header className="weather-header">
      <h1 className="weather-title">MYWEATHER</h1>
      <DarkLightToggle isDark={isDark} onToggle={onToggleTheme} />
    </header>
  );
}
