import { useState } from "react";
import StatCard from "./StatCard";
import Card from "./Card";
import OrdersTable from "./OrdersTable";
import LoaderBackdrop from "./LoaderBackdrop";
import ordersData from "../../data/OrdersData";

export default function DashboardContent() {
  const [view, setView] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  const handleOrderClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("orders");
    }, 1000); // Simulate loading delay (can replace with real API)
  };

  if (view === "orders") {
    return (
      <div className="relative min-h-[70vh] p-6 max-w-[1200px] mx-auto">
        {loading && <LoaderBackdrop />}
        <OrdersTable data={ordersData} />
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-5 gap-6 max-w-[1200px] mx-auto relative min-h-[70vh]">
      {loading && <LoaderBackdrop />}

      {/* 2x2 Stats grid (Rows 1-2, Cols 1-2) */}
      <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-6">
        <StatCard label="Customers" value="3,781" change="+11.01%" positive highlight />
        <StatCard
          label="Orders"
          value="1,219"
          change="-0.03%"
          positive={false}
          onClick={handleOrderClick}
          clickable
        />
        <StatCard label="Revenue" value="$695" change="+15.03%" positive />
        <StatCard label="Growth" value="30.1%" change="+6.08%" positive highlight />
      </div>

      {/* Projections vs Actuals */}
      <Card className="col-span-3 row-span-2 flex flex-col justify-center min-h-[270px] rounded-[20px] shadow bg-white">
        <span className="text-base font-semibold text-gray-700 mb-4">Projections vs Actuals</span>
        <div className="w-full h-[180px] bg-gray-100 rounded" />
      </Card>

      {/* Row 2 */}
      <Card className="col-span-3 min-h-[170px] rounded-[20px] shadow bg-white mt-0">
        <div className="flex items-center mb-2 text-xs text-gray-500 px-6 pt-6">
          <span>Revenue</span>
          <span className="mx-3">|</span>
          <span className="font-semibold text-gray-900">Current Week $58,211</span>
          <span className="mx-2">|</span>
          <span className="font-semibold text-gray-900">Previous Week $68,768</span>
        </div>
        <div className="w-full h-32 bg-gray-100 rounded mb-2 px-6" />
      </Card>

      <Card className="col-span-2 min-h-[170px] rounded-[20px] shadow bg-white mt-0 px-6 pt-6">
        <span className="text-sm font-semibold text-gray-700 mb-3">Revenue by Location</span>
        <div className="w-full h-10 bg-gray-100 rounded mb-4" />
        <div className="mt-2 text-xs text-gray-600 space-y-2">
          <div className="flex justify-between">
            <span>New York</span>
            <span>72K</span>
          </div>
          <div className="flex justify-between">
            <span>San Francisco</span>
            <span>59K</span>
          </div>
          <div className="flex justify-between">
            <span>Sydney</span>
            <span>25K</span>
          </div>
          <div className="flex justify-between">
            <span>Singapore</span>
            <span>61K</span>
          </div>
        </div>
      </Card>

      {/* Row 3 */}
      <Card className="col-span-3 min-h-[170px] rounded-[20px] shadow bg-white mt-0 overflow-x-auto px-6 pt-6">
        <span className="text-sm font-semibold text-gray-700 mb-3">Top Selling Products</span>
        <table className="min-w-full text-xs text-gray-700">
          <thead>
            <tr className="bg-gray-50">
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
              <td className="px-3 py-1 text-right">$2,559.36</td>
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
      <Card className="col-span-2 min-h-[170px] rounded-[20px] shadow bg-white mt-0 px-6 pt-6">
        <span className="text-sm font-semibold text-gray-700 mb-2">Total Sales</span>
        <div className="w-full h-24 bg-gray-100 rounded mb-3" />
        <div className="flex flex-col gap-2 text-xs text-gray-600">
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-bold">38.6%</span>
            <span>Direct</span>
            <span className="text-gray-700">$300.56</span>
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
