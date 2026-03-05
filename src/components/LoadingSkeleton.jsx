// LoadingSkeleton.jsx

const shimmer = `
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
`;

const skeletonBase = {
  background:
    "linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.04) 75%)",
  backgroundSize: "600px 100%",
  animation: "shimmer 1.6s infinite linear",
  borderRadius: "10px",
};

function SkeletonBox({ width = "100%", height = "16px", style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        ...skeletonBase,
        ...style,
      }}
    />
  );
}

export default function LoadingSkeleton() {
  return (
    <>
      <style>{shimmer}</style>

      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: "20px",
          padding: "24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "700px",
        }}
      >
        {/* Left: city + temp */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <SkeletonBox width="60%" height="36px" />
          <SkeletonBox width="40%" height="72px" />
          <SkeletonBox width="50%" height="18px" />
          <SkeletonBox width="70%" height="14px" />
        </div>

        {/* Right: 24h chart + alert */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <SkeletonBox width="80%" height="20px" />
          <SkeletonBox width="100%" height="90px" style={{ borderRadius: "14px" }} />
          <SkeletonBox width="60%" height="18px" />
          <SkeletonBox width="100%" height="52px" style={{ borderRadius: "12px" }} />
        </div>

        {/* Bottom: 5-day forecast */}
        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            gap: "16px",
            justifyContent: "space-between",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SkeletonBox width="36px" height="36px" style={{ borderRadius: "50%" }} />
              <SkeletonBox width="90%" height="13px" />
              <SkeletonBox width="70%" height="13px" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
