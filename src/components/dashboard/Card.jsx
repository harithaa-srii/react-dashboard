export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl shadow py-5 px-6 flex flex-col gap-1 ${className}`}
      role="region"
      aria-label="Dashboard card"
    >
      {children}
    </div>
  );
}
