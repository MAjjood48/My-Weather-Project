// ErrorHandling.jsx
import { useState } from "react";

const ERROR_TYPES = {
  NOT_FOUND: {
    icon: "🔍",
    title: "City Not Found",
    message: "We couldn't find any city matching your search. Check the spelling and try again.",
    color: "#f5c842",
  },
  NETWORK: {
    icon: "📡",
    title: "Connection Error",
    message: "Couldn't reach the weather service. Check your internet connection.",
    color: "#ff6b6b",
  },
  SERVER: {
    icon: "⚠️",
    title: "Service Unavailable",
    message: "The weather service is temporarily down. Please try again in a moment.",
    color: "#ff9f43",
  },
  GENERIC: {
    icon: "❌",
    title: "Something Went Wrong",
    message: "An unexpected error occurred. Please try again.",
    color: "#ff6b6b",
  },
};

export default function ErrorHandling({
  type = "GENERIC",
  customMessage,
  onRetry,
  onDismiss,
}) {
  const [dismissed, setDismissed] = useState(false);
  const error = ERROR_TYPES[type] || ERROR_TYPES.GENERIC;

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${error.color}33`,
        borderLeft: `4px solid ${error.color}`,
        borderRadius: "16px",
        padding: "20px 24px",
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        maxWidth: "480px",
        backdropFilter: "blur(10px)",
        animation: "fadeInSlide 0.3s ease",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Icon */}
      <span style={{ fontSize: "28px", lineHeight: 1, flexShrink: 0 }}>
        {error.icon}
      </span>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: "0 0 4px",
            fontWeight: 700,
            fontSize: "15px",
            color: error.color,
            fontFamily: "inherit",
          }}
        >
          {error.title}
        </p>
        <p
          style={{
            margin: "0 0 14px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5,
          }}
        >
          {customMessage || error.message}
        </p>

        {/* Actions */}
        {onRetry && (
          <button
            onClick={onRetry}
            style={{
              padding: "7px 18px",
              borderRadius: "8px",
              border: `1px solid ${error.color}55`,
              background: `${error.color}18`,
              color: error.color,
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = `${error.color}30`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = `${error.color}18`)
            }
          >
            Try Again
          </button>
        )}
      </div>

      {/* Dismiss X */}
      <button
        onClick={handleDismiss}
        style={{
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.35)",
          fontSize: "18px",
          cursor: "pointer",
          padding: "0",
          lineHeight: 1,
          flexShrink: 0,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
        title="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
