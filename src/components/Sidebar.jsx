import { useState } from "react";
import { menuSections, quickAccessItems } from "../data/Menulist";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [expanded, setExpanded] = useState({});
  const [activeTab, setActiveTab] = useState("Favorites");

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="flex flex-col h-full w-[220px] p-4 bg-white border-r dashboard-border">
      {/* Profile Section */}
      <div className="mb-6 flex items-center gap-3">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium text-gray-700">Harithaa Srii</span>
      </div>

      {/* Favorites & Recently */}
      <div className="mb-6">
        <div className="flex gap-4 mb-2 text-sm font-medium text-gray-500">
          {Object.keys(quickAccessItems).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? "text-black font-semibold" : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {quickAccessItems[activeTab].map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-black"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Sections (Dashboards, Pages, etc.) */}
      {menuSections.map((section) => (
        <div key={section.section} className="mb-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {section.section}
          </h2>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.id}>
                <div
                  className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-black"
                  onClick={() => item.children?.length && toggleExpand(item.id)}
                >
                  {/* Chevron always visible */}
                  <span className="w-4 flex justify-center">
                    {expanded[item.id] ? (
                      <ChevronDown size={14} className="text-gray-500" />
                    ) : (
                      <ChevronRight size={14} className="text-gray-500" />
                    )}
                  </span>

                  {/* Item Icon (optional) */}
                  {item.icon && (
                    <item.icon className="w-4 h-4 text-gray-600 ml-1" />
                  )}

                  <span className="ml-2">{item.name}</span>
                </div>

                {/* Render children if expanded */}
                {item.children && expanded[item.id] && (
                  <ul className="ml-6 mt-1  list-inside space-y-1 text-sm text-gray-600">
                    {item.children.map((child) => (
                      <li
                        key={child.id}
                        className="cursor-pointer hover:text-black"
                      >
                        {child.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
