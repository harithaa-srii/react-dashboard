import DefaultIcon from "../assets/icons/sidenav/piechart.svg?react";
import EcommerceIcon from "../assets/icons/sidenav/bag.svg?react";
import ProjectsIcon from "../assets/icons/sidenav/folder.svg?react";
import CoursesIcon from "../assets/icons/sidenav/openbook.svg?react";
import UserProfileIcon from "../assets/icons/sidenav/userid.svg?react";
import AccountIcon from "../assets/icons/sidenav/userprofile.svg?react";
import CorporateIcon from "../assets/icons/sidenav/peoplegroup.svg?react";
import BlogIcon from "../assets/icons/sidenav/blog.svg?react";
import SocialIcon from "../assets/icons/sidenav/chat.svg?react";

export const quickAccessItems = {
  Favorites: [
    { id: "overview", name: "Overview" },
    { id: "projects", name: "Projects" },
  ],
  Recently: [
    { id: "overview", name: "Overview" },
    { id: "projects", name: "Projects" },
  ],
};

export const menuSections = [
  {
    section: "Dashboards",
    items: [
      { id: "default", name: "Default", icon: DefaultIcon, children: [] },
      { id: "ecommerce", name: "eCommerce", icon: EcommerceIcon, children: [] },
      { id: "projects", name: "Projects", icon: ProjectsIcon, children: [] },
      {
        id: "onlinecourses",
        name: "Online Courses",
        icon: CoursesIcon,
        children: [],
      },
    ],
  },
  {
    section: "Pages",
    items: [
      {
        id: "userprofile",
        name: "User Profile",
        icon: UserProfileIcon,
        children: [
          { id: "overview", name: "Overview" },
          { id: "projects", name: "Projects" },
          { id: "campaigns", name: "Campaigns" },
          { id: "documents", name: "Documents" },
          { id: "followers", name: "Followers" },
        ],
      },
      { id: "account", name: "Account", icon: AccountIcon, children: [] },
      { id: "corporate", name: "Corporate", icon: CorporateIcon, children: [] },
      { id: "blog", name: "Blog", icon: BlogIcon, children: [] },
      { id: "social", name: "Social", icon: SocialIcon, children: [] },
    ],
  },
];
