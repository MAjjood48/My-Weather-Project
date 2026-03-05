export default function DarkLightToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        position: "relative",
        width: "64px",
        height: "34px",
        borderRadius: "17px",
        border: "none",
        cursor: "pointer",
        background: isDark
          ? "linear-gradient(135deg, #0d1b3e, #1a2f5e)"
          : "linear-gradient(135deg, #87ceeb, #ffd700)",
        transition: "background 0.4s ease",
        padding: 0,
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: isDark
          ? "0 0 12px rgba(30,80,180,0.5)"
          : "0 0 12px rgba(255,200,0,0.5)",
      }}
    >
      {isDark &&
        [
          { top: "6px",  left: "8px",  size: "3px" },
          { top: "14px", left: "18px", size: "2px" },
          { top: "8px",  left: "28px", size: "2px" },
        ].map((s, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: s.top, left: s.left,
              width: s.size, height: s.size,
              borderRadius: "50%",
              background: "white",
              opacity: 0.8,
            }}
          />
        ))}
      <span
        style={{
          position: "absolute",
          top: "4px",
          left: isDark ? "34px" : "4px",
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          background: isDark ? "#f5c842" : "#ffffff",
          transition: "left 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
