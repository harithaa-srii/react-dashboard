import BellIcon from "../../assets/icons/topnav/bell.svg?react";
import Star from "../../assets/icons/topnav/star.svg?react";
import Panel from "../../assets/icons/topnav/panel.svg?react";
import Recent from "../../assets/icons/topnav/history.svg?react";
import Theme from "../../assets/icons/topnav/theme.svg?react";
import Searchbar from "./Searchbar";
import Breadcrumb from "./Breadcrumb";

export default function Topbar() {
  const iconClasses = "w-7 h-7 p-1 rounded-md cursor-pointer transition-all duration-200 ease-in-out";

  return (
    <div className="w-full h-12 flex items-center px-8 border-b border-gray-100 bg-white">
      {/* Left icons */}
      <div className="flex items-center gap-5">
        <Panel className={`${iconClasses} hover:bg-gray-100`} />
        <Star className={`${iconClasses} hover:bg-gray-100`} />
        <Breadcrumb />
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center">
        <Searchbar />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-7">
        <Theme className={`${iconClasses} hover:bg-gray-100`} />
        <Recent className={`${iconClasses} hover:bg-gray-100`} />
        <BellIcon className={`${iconClasses} hover:bg-gray-100`} />
        <Panel className={`${iconClasses} hover:bg-gray-100`} />
      </div>
    </div>
  );
}
