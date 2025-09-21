import { useTheme } from "../../context/ThemeContext";

export default function Card({ children, className = "" }) {
  const { theme } = useTheme();
  return (
    <div
      className={`rounded-2xl shadow py-5 px-6 flex flex-col gap-1 transition-colors
        ${theme === "dark"
          ? "bg-[#17181c] text-gray-100 border border-[#22232e]"
          : "bg-white text-gray-900 border border-gray-200"}
        ${className}`
      }
      role="region"
      aria-label="Dashboard card"
    >
      {children}
    </div>
  );
}
