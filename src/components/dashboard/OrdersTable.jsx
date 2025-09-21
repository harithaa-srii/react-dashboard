import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaPlus, FaFilter, FaSort, FaEllipsisH } from "react-icons/fa";

const STATUS_COLORS = {
  "In Progress": "bg-blue-300",
  "Complete": "bg-green-400",
  "Pending": "bg-yellow-400",
  "Approved": "bg-orange-300",
  "Rejected": "bg-red-400",
};

const header = [
  { key: "orderId", name: "Order ID", className: "w-28" },
  { key: "user", name: "User", className: "w-36" },
  { key: "project", name: "Project", className: "w-40" },
  { key: "address", name: "Address", className: "w-52" },
  { key: "date", name: "Date", className: "w-32 text-sm" },
  { key: "status", name: "Status", className: "w-32" },
  { key: "actions", name: "", className: "w-8" },
];

export default function OrdersTable({ data }) {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(data.length / pageSize);

  const checkedById = {
    "#CM9804": true,
    "#CM9805": false,
  };
  const disabledById = {
    "#CM9805": true,
  };

  const rows = data.slice((page - 1) * pageSize, page * pageSize);

  const tableBg = theme === "dark" ? "bg-[#181924] border border-[#242435]" : "bg-white";
  const thBg = theme === "dark" ? "bg-[#181924] text-gray-400" : "bg-gray-50 text-gray-500";

  return (
    <div className={`${tableBg} rounded-[18px] shadow p-6 overflow-x-auto w-full transition-colors`}>
      {/* Top Utility Bar */}
      <div className="flex justify-between mb-2">
        <div className="flex items-center space-x-3">
          <button className={`p-1.5 rounded transition ${theme === "dark" ? "hover:bg-[#222]" : "hover:bg-gray-100"}`}>
            <FaPlus className="w-4 h-4" />
          </button>
          <button className={`p-1.5 rounded transition ${theme === "dark" ? "hover:bg-[#222]" : "hover:bg-gray-100"}`}>
            <FaFilter className="w-4 h-4" />
          </button>
          <button className={`p-1.5 rounded transition ${theme === "dark" ? "hover:bg-[#222]" : "hover:bg-gray-100"}`}>
            <FaSort className="w-4 h-4" />
          </button>
        </div>
        <div>
          <input
            className={`border ${theme === "dark" ? "border-[#242435] bg-[#20212a] text-gray-200 placeholder-gray-500" : "border-gray-200 bg-gray-50"} px-3 py-1 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-300`}
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      {/* Table */}
      <table className="min-w-full text-sm">
        <thead>
          <tr className={`${thBg} font-semibold text-xs`}>
            <th className="py-2 px-2 text-left">
              <input type="checkbox" className="accent-blue-500" />
            </th>
            {header.map((h) => (
              <th key={h.key} className={`py-2 px-2 text-left ${h.className}`}>
                {h.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const isChecked = checkedById[row.id];
            const isDisabled = disabledById[row.id];
            return (
              <tr
                key={row.id + idx}
                className={`
                  ${isChecked ? (theme === "dark" ? "bg-[#282838]" : "bg-gray-100") : ""}
                  ${isDisabled ? (theme === "dark" ? "bg-[#1a1a22] text-gray-600" : "bg-gray-50 text-gray-400") : ""}
                  ${!isChecked && !isDisabled ? (theme === "dark" ? "hover:bg-[#23232e]" : "hover:bg-gray-50") : ""}
                  transition
                `}
              >
                <td className="py-2 px-2">
                  <input
                    type="checkbox"
                    checked={!!isChecked}
                    disabled={!!isDisabled}
                    className="accent-blue-500"
                    readOnly
                  />
                </td>
                <td className="py-2 px-2 font-medium">{row.id}</td>
                <td className="py-2 px-2 flex items-center space-x-2">
                  <img
                    src={row.avatar ? `/avatars/${row.avatar}` : ""}
                    alt={row.user}
                    className="w-7 h-7 rounded-full object-cover border"
                  />
                  <span>{row.user}</span>
                </td>
                <td className="py-2 px-2">{row.project}</td>
                <td className="py-2 px-2">{row.address}</td>
                <td className="py-2 px-2 flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" strokeWidth="1.5"></rect>
                    <path strokeWidth="1.5" d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <span>{row.date}</span>
                </td>
                <td className="py-2 px-2 flex items-center gap-2">
                  <span className={`inline-block w-2.5 h-2.5 rounded-full ${STATUS_COLORS[row.status]}`}></span>
                  <span
                    className={`
                      ${row.status === "In Progress" ? "text-blue-500" : ""}
                      ${row.status === "Complete" ? "text-green-600" : ""}
                      ${row.status === "Pending" ? "text-yellow-500" : ""}
                      ${row.status === "Approved" ? "text-orange-500" : ""}
                      ${row.status === "Rejected" ? "text-red-500" : ""}
                    `}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-2 px-2 text-right">
                  {idx === 4 && (
                    <button className="rounded-full p-1.5 hover:bg-gray-200 transition">
                      <FaEllipsisH />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      <div className={`flex justify-end mt-3 items-center space-x-1 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        <button
          className="w-7 h-7 rounded hover:bg-gray-200 disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`w-7 h-7 rounded ${page === n ? "bg-gray-200 font-bold" : "hover:bg-gray-100"}`}
            onClick={() => setPage(n)}
          >
            {n}
          </button>
        ))}
        <button
          className="w-7 h-7 rounded hover:bg-gray-200 disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === 5}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
