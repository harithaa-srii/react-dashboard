import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuSections } from "../../data/Menulist";
import { useTheme } from "../../context/ThemeContext";

export default function Breadcrumb() {
  const { theme } = useTheme();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const getSectionName = (parentId) => {
    for (const section of menuSections) {
      if (section.items.some(item => item.id === parentId)) {
        return section.section;
      }
    }
    return "Dashboards";
  };

  const getMenuItem = (parentId) => {
    for (const section of menuSections) {
      const item = section.items.find(item => item.id === parentId);
      if (item) return item;
    }
    return null;
  };

  const sectionPrefix = getSectionName(pathnames[0]);
  const parentItem = getMenuItem(pathnames[0]);
  const childItem = parentItem?.children?.find(child => child.id === pathnames[1]);

  // Define color classes based on theme
  const prefixClass = theme === "dark" ? "text-gray-400" : "text-gray-400";
  const linkClass = theme === "dark" ? "text-gray-400 hover:underline" : "text-gray-600 hover:underline";
  const currentClass = theme === "dark" ? "text-gray-200 font-semibold" : "text-gray-900 font-semibold";
  const separatorClass = theme === "dark" ? "text-gray-300" : "text-gray-300";

  return (
    <nav className="flex items-center space-x-2 font-sans text-sm whitespace-nowrap overflow-x-auto">
      <span className={prefixClass}>{sectionPrefix}</span>
      {parentItem && (
        <>
          <span className={separatorClass}>/</span>
          {pathnames.length === 1 ? (
            <span className={currentClass}>{parentItem.name}</span>
          ) : (
            <Link to={`/${parentItem.id}`} className={linkClass}>
              {parentItem.name}
            </Link>
          )}
        </>
      )}
      {childItem && (
        <>
          <span className={separatorClass}>/</span>
          <span className={currentClass}>{childItem.name}</span>
        </>
      )}
    </nav>
  );
}
