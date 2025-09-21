import Sidebar from "../components/Sidebar";
import Topbar from "../components/topbar/Topbar";
import DashboardContent from "../components/dashboard/DashboardContent";
import RightPanel from "../components/RightPanels";
import { useTheme } from "../context/ThemeContext";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <Topbar />
        <DashboardContent />
      </main>
      <RightPanel />
    </div>
  );
}
