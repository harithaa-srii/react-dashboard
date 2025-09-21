import BellIcon from "../../assets/icons/topnav/bell.svg?react";
import Star from "../../assets/icons/topnav/star.svg?react";
import Panel from "../../assets/icons/topnav/panel.svg?react";
import Recent from "../../assets/icons/topnav/history.svg?react";
import Theme from "../../assets/icons/topnav/theme.svg?react";
import Searchbar from "./Searchbar";
import Breadcrumb from "./Breadcrumb";
import { useTheme } from "../../context/ThemeContext";


export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const iconClasses = "w-7 h-7 p-1 rounded-md cursor-pointer transition-colors duration-200";

  // Use stroke classes matching theme
  const iconStroke = theme === "dark" ? "stroke-gray-200" : "stroke-gray-700";
  const iconHoverStroke = theme === "dark" ? "hover:stroke-gray-400" : "hover:stroke-gray-900";
  const themeIconStroke = theme === "dark" ? "stroke-yellow-400" : "stroke-gray-700";
  const themeIconHoverStroke = theme === "dark" ? "hover:stroke-yellow-300" : "hover:stroke-gray-900";

  return (
    <div className={`w-full h-12 flex items-center px-8 border-b ${theme === "dark" ? "border-gray-700 bg-[#181A20]" : "border-gray-200 bg-white"}`}>
      <div className="flex items-center gap-5">
        <Panel className={`${iconClasses} ${iconStroke} ${iconHoverStroke}`} />
        <Star className={`${iconClasses} ${iconStroke} ${iconHoverStroke}`} />
        <Breadcrumb className={theme === "dark" ? "text-gray-200" : "text-gray-700"} />
      </div>
      <div className="flex-1 flex justify-center">
        <Searchbar />
      </div>
      <div className="flex items-center gap-7">
        <Theme
          onClick={toggleTheme}
          className={`${iconClasses} ${themeIconStroke} ${themeIconHoverStroke}`}
          title="Toggle Theme"
        />
        <Recent className={`${iconClasses} ${iconStroke} ${iconHoverStroke}`} />
        <BellIcon className={`${iconClasses} ${iconStroke} ${iconHoverStroke}`} />
        <Panel className={`${iconClasses} ${iconStroke} ${iconHoverStroke}`} />
      </div>
    </div>
  );
}

