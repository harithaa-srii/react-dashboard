import Sidebar from "../components/Sidebar";
import Topbar from "../components/topbar/Topbar";
import OrdersTable from "../components/dashboard/OrdersTable";
import LoaderBackdrop from "../components/dashboard/LoaderBackdrop";
import ordersData from "../data/OrdersData";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function OrdersPage() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-white dark:bg-[#181924] overflow-hidden">
        <Topbar />
        <div className={`flex-1 flex flex-col py-6 px-0 w-full h-full transition-colors ${theme === "dark" ? "bg-[#181924]" : "bg-white"}`}>
          {loading && <LoaderBackdrop />}
          <h1 className="text-xl font-bold mb-6 px-6 text-gray-900 dark:text-gray-200">Order List</h1>
          {/* Full width responsive orders table */}
          <div className="flex-1 flex flex-col w-full h-full overflow-auto px-6">
            <OrdersTable data={ordersData} />
          </div>
        </div>
      </main>
      {/* No RightPanel */}
    </div>
  );
}
