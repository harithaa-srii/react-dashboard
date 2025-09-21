export default function StatCard({ label, value, change, positive = true, highlight = false, onClick, clickable = false, className = "" }) {
  return (
    <div
      className={`rounded-xl py-5 px-6 flex flex-col gap-1 shadow transition
        ${highlight ? "bg-blue-50" : "bg-gray-50"}
        ${clickable ? "cursor-pointer hover:bg-blue-100 active:scale-95" : ""}
        ${className}
      `}
      onClick={clickable ? onClick : undefined}
    >
      <div className="flex justify-between items-center text-[15px]">
        <span className="font-semibold text-slate-600">{label}</span>
        <span className="flex items-center gap-1 font-semibold text-slate-600">
          <span>{change}</span>
          <span>{positive ? "↑" : "↓"}</span>
        </span>
      </div>
      <span className="text-2xl font-extrabold text-slate-900 mt-1">
        {value}
      </span>
    </div>
  );
}
