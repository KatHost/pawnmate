export default function VideoBackground({ poster = "/hero-poster.jpg" }) {
  // Primary local video path: place a `hero.mp4` in the `public/` folder for best performance.
  // Fallback uses a free sample video hosted externally.
  const fallback = "https://cdn.coverr.co/videos/coverr-students-coding-in-library-1589?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1ODkiLCJpYXQiOjE2NzE3MzQ4MjR9.mK3bF0Qx1Fqk1YJH3Fv0wVZk3Q5b0gXn0nKxv2x5y8&download=true";

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        aria-hidden
      >
        <source src="/artreeland-ad.mp4" type="video/mp4" />
        <source src={fallback} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950/90"
        aria-hidden
      />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .absolute video { display: none; }
          .absolute { background-image: linear-gradient(180deg, rgba(2,6,23,0.95), rgba(2,6,23,0.95)); }
        }
      `}</style>
    </div>
  );
}
