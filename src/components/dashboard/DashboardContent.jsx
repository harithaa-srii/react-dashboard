import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import StatCard from "./StatCard";
import Card from "./Card";
import LoaderBackdrop from "./LoaderBackdrop";
import ProjectionsVsActualsChart from "./charts/ProjectionsVsActuals";
import TotalSalesDonutChart from "./charts/TotalSales";
import RevenueLineChart from "./charts/RevenueLineChart";
import RevenueByLocation from "./charts/RevenueByLocation";
import OrdersTable from "./OrdersTable";

export default function DashboardContent() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleOrderClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/orders");
    }, 1000);
  };

  return (
    <div
      className={`p-6 grid grid-cols-5 gap-6 max-w-[1200px] mx-auto min-h-[70vh] transition-colors ${
        theme === "dark" ? "bg-[#181924]" : "bg-white"
      }`}
    >
      {loading && <LoaderBackdrop />}

      {/* 2x2 Stats grid */}
      <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-6">
        <StatCard
          label="Customers"
          value="3,781"
          change="+11.01%"
          positive
          highlight
        />
        <StatCard
          label="Orders"
          value="1,219"
          change="-0.03%"
          positive={false}
          onClick={handleOrderClick}
          clickable
        />
        <StatCard label="Revenue" value="$695" change="+15.03%" positive />
        <StatCard
          label="Growth"
          value="30.1%"
          change="+6.08%"
          positive
          highlight
        />
      </div>

      {/* Projections vs Actuals */}
      <Card className="col-span-3 row-span-2 flex flex-col justify-center min-h-[270px] rounded-[20px] shadow transition-colors">
        <span
          className={`text-base font-semibold mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Projections vs Actuals
        </span>
        <ProjectionsVsActualsChart />
      </Card>

      {/* Revenue line chart */}
   <Card className="col-span-3 min-h-[250px] rounded-[20px] shadow transition-colors flex flex-col">
  <div
    className={`flex items-center gap-4 mb-2 text-xs px-6 pt-6 ${
      theme === "dark" ? "text-gray-400" : "text-gray-500"
    }`}
  >
    <span>Revenue</span>
    <span className="mx-3">|</span>
    {/* Bullet for Current Week */}
    <span className="flex items-center gap-1">
      <span
        className="inline-block w-3 h-3 rounded-full"
        style={{ background: theme === "dark" ? "#fff" : "#000" }}
      ></span>
      <span className={`font-semibold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
        Current Week <span className="font-normal">$58,211</span>
      </span>
    </span>
    <span className="mx-2">|</span>
    {/* Bullet for Previous Week */}
    <span className="flex items-center gap-1">
      <span
        className="inline-block w-3 h-3 rounded-full"
        style={{ background: "#90a9d6" }}
      ></span>
      <span className={`font-semibold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
        Previous Week <span className="font-normal">$68,768</span>
      </span>
    </span>
  </div>
  <div className="w-full flex-grow px-6">
    <RevenueLineChart showLegend={false} />
  </div>
</Card>

      {/* Revenue by location */}
      <Card className="col-span-2 min-h-[170px] rounded-[20px] shadow px-6 pt-6 transition-colors">
        <span
          className={`text-sm font-semibold mb-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Revenue by Location
        </span>
        <RevenueByLocation />
      </Card>

      {/* Top Selling Products table */}
      <Card className="col-span-3 min-h-[170px] rounded-[20px] shadow overflow-x-auto px-6 pt-6 transition-colors">
        <span
          className={`text-sm font-semibold mb-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Top Selling Products
        </span>
        <table
          className={`min-w-full text-xs ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <thead>
            <tr className={theme === "dark" ? "bg-[#1f202a]" : "bg-gray-50"}>
              <th className="px-3 py-2 text-left font-semibold">Name</th>
              <th className="px-3 py-2 text-right font-semibold">Price</th>
              <th className="px-3 py-2 text-right font-semibold">Quantity</th>
              <th className="px-3 py-2 text-right font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-1">ASOS Ridley High Waist</td>
              <td className="px-3 py-1 text-right">$79.49</td>
              <td className="px-3 py-1 text-right">82</td>
              <td className="px-3 py-1 text-right">$6,518.18</td>
            </tr>
            <tr>
              <td className="px-3 py-1">Morco Lightweight Shirt</td>
              <td className="px-3 py-1 text-right">$128.50</td>
              <td className="px-3 py-1 text-right">37</td>
              <td className="px-3 py-1 text-right">$4,754.50</td>
            </tr>
            <tr>
              <td className="px-3 py-1">Half Sleeve Shirt</td>
             <td className="px-3 py-1 text-right">$39.99</td>
              <td className="px-3 py-1 text-right">64</td>
              <td className="px-3 py-1 text-right">$2,559</td>
            </tr>
            <tr>
              <td className="px-3 py-1">Lightweight Jacket</td>
              <td className="px-3 py-1 text-right">20.00</td>
              <td className="px-3 py-1 text-right">184</td>
              <td className="px-3 py-1 text-right">$3,680.00</td>
            </tr>
            <tr>
              <td className="px-3 py-1">Morco Shoes</td>
              <td className="px-3 py-1 text-right">79.49</td>
              <td className="px-3 py-1 text-right">64</td>
              <td className="px-3 py-1 text-right">$1,965.81</td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* Total Sales donut chart */}
      <Card className="col-span-2 min-h-[170px] rounded-[20px] shadow px-6 pt-6 transition-colors">
        <span
          className={`text-sm font-semibold mb-2 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Total Sales
        </span>
        <div className="w-full h-24 mb-3">
          <TotalSalesDonutChart />
        </div>
        <div
          className={`flex flex-col gap-2 text-xs ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-bold">Direct</span>
            <span
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              $300.56
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-600">Affiliate</span>
            <span>$135.18</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-600">Sponsored</span>
            <span>$154.02</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sky-600">E-mail</span>
            <span>$48.96</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
