import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menuSections, quickAccessItems } from "../data/menulist";
import cn from "classnames";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState("Favorites");
  const [expanded, setExpanded] = useState({ userprofile: true });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Chevron = ({ open }) => (
    <svg
      className={cn(
        "w-3 h-3 mr-1 min-w-[0.75rem] transition-transform duration-200",
        { "rotate-90": open }
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Sidebar toggle button for mobile */}
      <button
        className="sidebar-toggle-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            sidebarOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "sidebar-container w-55 min-w-55 max-w-55 sm:w-55 sm:min-w-55 sm:max-w-55",
          { "sidebar-closed": !sidebarOpen, "sidebar-open": sidebarOpen },
          "sm:translate-x-0 sm:relative"
        )}
      >
        {/* Logo & Name */}
        <div className="flex items-center mb-5 mt-1">
          <img
            src="public/ByeWind.png"
            alt="logo"
            className="rounded-sm mr-2"
          />
          <span className="text-lg font-semibold text-black tracking-tight select-none">
            ByeWind
          </span>
        </div>

        {/* Favorites | Recently Tab */}
        <div>
          <div className="flex text-base font-semibold mb-1 select-none">
            {Object.keys(quickAccessItems).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "mr-6 pb-[3px] transition-colors duration-300 ease-in-out",
                  activeTab === tab
                    ? "text-gray-900 border-b-[3px] border-black"
                    : "text-gray-400 hover:text-gray-700 border-b-[3px] border-transparent"
                )}
                type="button"
                tabIndex={0}
                style={{ letterSpacing: ".03em" }}
              >
                {tab}
              </button>
            ))}
          </div>
          <ul className="pl-5 text-base text-gray-700 space-y-1 list-disc list-inside">
            {quickAccessItems[activeTab].map(({ id, name }) => (
              <li
                key={id}
                className="cursor-pointer hover:text-gray-900 transition-colors duration-300 leading-tight"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <div className="my-4 border-t border-gray-100" />

        {/* Menu Sections */}
        {menuSections.map(({ section, items }) => (
          <div key={section} className="mb-5">
            <h3 className="text-md mb-2 font-medium tracking-wide select-none text-gray-400">
              {section}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isAccordionOpen = expanded[item.id];
                const isActiveMain =
                  pathname === `/${item.id}` ||
                  (hasChildren && pathname.startsWith(`/${item.id}/`));

                return (
                  <li key={item.id}>
                    <div
                      className={cn(
                        "flex items-center px-3 py-1 rounded-r-2xl cursor-pointer select-none transition-colors duration-300 ease-in-out",
                        isActiveMain
                          ? "font-semibold text-black bg-gray-100 border-l-4 border-black dark:sidebar-active dark:border-transparent"
                          : "text-gray-700 font-normal border-l-4 border-transparent hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
                      )}
                      onClick={() => hasChildren && toggleExpand(item.id)}
                    >
                      {hasChildren ? (
                        <Chevron open={isAccordionOpen} />
                      ) : (
                        <span className="w-3 min-w-[0.75rem] mr-1" />
                      )}
                      {item.icon && (
                        <item.icon className="w-[17px] h-[17px] text-gray-600 transition-colors duration-300 mr-2 group-hover:text-black" />
                      )}
                      <NavLink
                        to={`/${item.id}`}
                        end
                        className="flex-1 text-base"
                        tabIndex={-1}
                      >
                        {item.name}
                      </NavLink>
                    </div>
                    {hasChildren && isAccordionOpen && (
                      <ul
                        className="ml-9 border-l border-gray-100 mt-1 space-y-0.5"
                        role="list"
                      >
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <NavLink
                              to={`/${item.id}/${child.id}`}
                              className={({ isActive }) =>
                                cn(
                                  "block text-sm px-3 py-1 rounded-md transition-colors duration-300 ease-in-out select-none",
                                  isActive
                                    ? "font-semibold text-black bg-gray-50"
                                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                                )
                              }
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
}
