import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuSections } from "../../data/menulist";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Get parent section name
  const getSectionName = (parentId) => {
    for (const section of menuSections) {
      if (section.items.some(item => item.id === parentId)) {
        return section.section;
      }
    }
    return "Dashboards";
  };

  // Get menu item by id
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

  return (
    <nav className="flex items-center space-x-2 font-sans text-sm">
      <span className="text-gray-400">{sectionPrefix}</span>
      {parentItem && (
        <>
          <span className="mx-1 text-gray-300">/</span>
          {pathnames.length === 1 ? (
            <span className="text-gray-900 font-semibold">{parentItem.name}</span>
          ) : (
            <Link to={`/${parentItem.id}`} className="text-gray-400 hover:underline">
              {parentItem.name}
            </Link>
          )}
        </>
      )}
      {childItem && (
        <>
          <span className="mx-1 text-gray-300">/</span>
          <span className="text-gray-900 font-semibold">{childItem.name}</span>
        </>
      )}
    </nav>
  );
}
