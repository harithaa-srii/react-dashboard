import BellIcon from "../assets/icons/topnav/bell.svg?react";
import Star from "../assets/icons/topnav/star.svg?react";
import Panel from "../assets/icons/topnav/panel.svg?react";
import Recent from "../assets/icons/topnav/history.svg?react";
import Theme from "../assets/icons/topnav/theme.svg?react";
import Searchbar from "./Searchbar";
import Breadcrumb from "./Breadcrumb";
export default function Topbar() {
  return (
    <div className="w-full h-[48px] flex items-center px-6">
      <div className="flex items-center gap-x-3">
        <Panel />
        <Star />
        <Breadcrumb />
      </div>
      <div className="mx-auto">
        <Searchbar />
      </div>
      <div className="flex items-center gap-x-6">
        <Theme />
        <Recent />
        <BellIcon />
        <Panel />
      </div>
    </div>
  );
}
