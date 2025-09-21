import { useState, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaPlus, FaFilter, FaSort } from "react-icons/fa";
import baseOrdersData from "../../data/OrdersData";

const STATUS_COLORS = {
  "In Progress": "bg-blue-300",
  "Complete": "bg-green-400",
  "Pending": "bg-yellow-400",
  "Approved": "bg-orange-300",
  "Rejected": "bg-red-400",
};

const header = [
  { key: "orderId", name: "Order ID", className: "min-w-[7rem]" },
  { key: "user", name: "User", className: "min-w-[8rem]" },
  { key: "project", name: "Project", className: "min-w-[10rem]" },
  { key: "address", name: "Address", className: "min-w-[12rem]" },
  { key: "date", name: "Date", className: "min-w-[7rem] text-sm" },
  { key: "status", name: "Status", className: "min-w-[7rem]" },
];

const generateOrdersData = (baseData) => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    baseData.forEach((item, idx) => {
      result.push({
        ...item,
        id: `#CM${9800 + i * baseData.length + idx + 1}`,
      });
    });
  }
  return result.slice(0, 50);
};
const ordersData = generateOrdersData(baseOrdersData);

export default function OrdersTable() {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  const [checkedIds, setCheckedIds] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // Default order (no sorting)
  const pageSize = 10;

  const filteredData = useMemo(() => {
    if (!searchTerm) return ordersData;
    const lower = searchTerm.toLowerCase();
    return ordersData.filter(
      (row) =>
        row.id.toLowerCase().includes(lower) ||
        row.user.toLowerCase().includes(lower) ||
        row.project.toLowerCase().includes(lower) ||
        row.address.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortOrder) return filteredData;
    return [...filteredData].sort((a, b) => {
      const comp = a.user.localeCompare(b.user);
      return sortOrder === "asc" ? comp : -comp;
    });
  }, [filteredData, sortOrder]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const rows = sortedData.slice((page - 1) * pageSize, page * pageSize);

  const tableBg = theme === "dark" ? "bg-[#181924] border border-[#242435]" : "bg-white";
  const thBg = theme === "dark" ? "bg-[#181924] text-gray-400" : "bg-gray-50 text-gray-500";

  const handleCheckboxChange = (id) => {
    setCheckedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newChecks = {};
    rows.forEach((row) => {
      newChecks[row.id] = checked;
    });
    setCheckedIds((prev) => ({ ...prev, ...newChecks }));
  };

  const allChecked = rows.length > 0 && rows.every((row) => checkedIds[row.id]);
  const someChecked = rows.some((row) => checkedIds[row.id]);

  const toggleSort = () => {
    if (!sortOrder) setSortOrder("asc");
    else if (sortOrder === "asc") setSortOrder("desc");
    else setSortOrder("");
  };

  const sortArrow = () => {
    if (sortOrder === "asc")
      return <span className="ml-1 select-none">&#9650;</span>;
    if (sortOrder === "desc")
      return <span className="ml-1 select-none">&#9660;</span>;
    return <FaSort className="ml-1 w-4 h-4 inline-block" />;
  };

  return (
    <div className={`${tableBg} rounded-[18px] shadow p-4 transition-colors w-full h-full flex flex-col`}>
      {/* Top Utility Bar */}
      <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
        <div className="flex items-center space-x-3">
          <button className={`p-1.5 rounded transition ${theme === "dark" ? "hover:bg-[#222]" : "hover:bg-gray-100"}`}>
            <FaPlus className="w-4 h-4" />
          </button>
          <button className={`p-1.5 rounded transition ${theme === "dark" ? "hover:bg-[#222]" : "hover:bg-gray-100"}`}>
            <FaFilter className="w-4 h-4" />
          </button>
          <button
            className={`p-1.5 rounded transition flex items-center ${theme === "dark" ? "hover:bg-[#222]" : "hover:bg-gray-100"}`}
            onClick={toggleSort}
            aria-label="Sort by User"
            title="Sort by User"
          >
            User Sort
            {sortArrow()}
          </button>
        </div>
        <div className="w-full sm:w-auto mt-2 sm:mt-0">
          <input
            className={`border ${theme === "dark" ? "border-[#242435] bg-[#20212a] text-gray-200 placeholder-gray-500" : "border-gray-200 bg-gray-50"} px-3 py-1 rounded text-sm w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-300`}
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            aria-label="Search orders"
          />
        </div>
      </div>

      <div className="overflow-x-auto grow">
        <table className="min-w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className={`${thBg} font-semibold text-xs`}>
              <th className="py-2 px-2 text-left sticky left-0 bg-inherit z-20">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={allChecked}
                  ref={(el) => {
                    if (el) el.indeterminate = someChecked && !allChecked;
                  }}
                  onChange={handleSelectAll}
                  aria-label="Select all rows on page"
                />
              </th>
              {header.map(({ key, name, className }) => (
                <th key={key} className={`py-2 px-2 text-left ${className}`}>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const isChecked = checkedIds[row.id];
              return (
                <tr
                  key={`${row.id}-${idx}`}
                  className={`
                    ${isChecked ? (theme === "dark" ? "bg-[#282838]" : "bg-gray-100") : ""}
                    ${!isChecked ? (theme === "dark" ? "hover:bg-[#23232e]" : "hover:bg-gray-50") : ""}
                    transition
                  `}
                >
                  <td className="py-2 px-2 sticky left-0 bg-inherit z-20">
                    <input
                      type="checkbox"
                      checked={!!isChecked}
                      onChange={() => handleCheckboxChange(row.id)}
                      className="accent-blue-500"
                    />
                  </td>
                  <td className="py-2 px-2 font-medium">{row.id}</td>
                  <td className="py-2 px-2 flex items-center space-x-2">
                    <img src={row.avatar ? `/avatars/${row.avatar}` : ""} alt={row.user} className="w-7 h-7 rounded-full object-cover border" />
                    <span>{row.user}</span>
                  </td>
                  <td className="py-2 px-2">{row.project}</td>
                  <td className="py-2 px-2">{row.address}</td>
                  <td className="py-2 px-2">
                    <svg className="w-4 h-4 text-gray-400 mr-1 inline-block align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" strokeWidth="1.5"></rect>
                      <path strokeWidth="1.5" d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span className="align-middle">{row.date}</span>
                  </td>
                  <td className="py-2 px-2">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${STATUS_COLORS[row.status]}`}></span>
                    <span
                      className={`
                        ml-2
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={`flex justify-end mt-3 items-center space-x-1 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        <button className="w-7 h-7 rounded hover:bg-gray-200 disabled:opacity-50" onClick={() => setPage(page - 1)} disabled={page === 1} aria-label="Previous page">
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`w-7 h-7 rounded ${page === i + 1 ? "bg-gray-200 font-bold" : "hover:bg-gray-100"}`}
            onClick={() => setPage(i + 1)}
            aria-label={`Page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
        <button className="w-7 h-7 rounded hover:bg-gray-200 disabled:opacity-50" onClick={() => setPage(page + 1)} disabled={page === totalPages} aria-label="Next page">
          &gt;
        </button>
      </div>
    </div>
  );
}
