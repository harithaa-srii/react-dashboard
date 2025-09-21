import { useTheme } from "../../context/ThemeContext";

export default function StatCard({
  label, value, change, positive = true, highlight = false, onClick, clickable = false, className = ""
}) {
  const { theme } = useTheme();
  const base = theme === "dark"
    ? highlight ? "bg-[#233051]" : "bg-[#23232e]"
    : highlight ? "bg-blue-50" : "bg-gray-50";
  const text1 = theme === "dark" ? "text-gray-300" : "text-slate-600";
  const text2 = theme === "dark" ? "text-white" : "text-slate-900";
  return (
    <div
      className={`rounded-xl py-5 px-6 flex flex-col gap-1 shadow transition-colors
        ${base}
        ${clickable ? "cursor-pointer hover:bg-blue-100 active:scale-95" : ""}
        ${className}`}
      onClick={clickable ? onClick : undefined}
    >
      <div className={`flex justify-between items-center text-[15px] ${text1}`}>
        <span className="font-semibold">{label}</span>
        <span className="flex items-center gap-1 font-semibold">
          <span>{change}</span>
          <span>{positive ? "↑" : "↓"}</span>
        </span>
      </div>
      <span className={`text-2xl font-extrabold mt-1 ${text2}`}>{value}</span>
    </div>
  );
}
