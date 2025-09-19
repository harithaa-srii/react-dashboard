// src/pages/DashboardPage.jsx
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50">
        <Topbar />
        {/* Your dashboard content here */}
      </main>
    </div>
  );
}