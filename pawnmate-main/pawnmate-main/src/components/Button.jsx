export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-cyan-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}