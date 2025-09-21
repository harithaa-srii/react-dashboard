import { useTheme } from "../context/ThemeContext";

export default function RightPanel() {
  const { theme } = useTheme();
  const bg = theme === "dark" ? "bg-[#181924] border-l border-[#242435] text-gray-200" : "bg-white border-l dashboard-border text-gray-900";
  const subtext = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const contactText = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <aside className={`w-[320px] shrink-0 flex flex-col px-6 py-6 h-full overflow-y-auto transition-colors ${bg}`}>
      {/* Notifications Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <ul className="space-y-3 mb-6">
          <li className={`text-sm ${subtext}`}>
            You have a bug that needs fixing<br />
            <span className="text-xs text-gray-400">Just now</span>
          </li>
          <li className={`text-sm ${subtext}`}>
            New user registered<br />
            <span className="text-xs text-gray-400">59 minutes ago</span>
          </li>
          <li className={`text-sm ${subtext}`}>
            Andi Lane subscribed to you<br />
            <span className="text-xs text-gray-400">Today, 11:59 AM</span>
          </li>
        </ul>
      </section>

      {/* Activities Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Activities</h2>
        <ul className="space-y-3 mb-6">
          <li className={`text-sm ${subtext}`}>
            You have a bug that needs fixing<br />
            <span className="text-xs text-gray-400">Just now</span>
          </li>
          <li className={`text-sm ${subtext}`}>
            Released a new version<br />
            <span className="text-xs text-gray-400">59 minutes ago</span>
          </li>
          <li className={`text-sm ${subtext}`}>
            Submitted a bug<br />
            <span className="text-xs text-gray-400">12 hours ago</span>
          </li>
        </ul>
      </section>

      {/* Contacts Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Contacts</h2>
        <div className="flex flex-col space-y-3">
          <span className={`flex items-center gap-2 text-sm ${contactText}`}>
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span> Natali Craig
          </span>
          <span className={`flex items-center gap-2 text-sm ${contactText}`}>
            <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span> Drew Cano
          </span>
          <span className={`flex items-center gap-2 text-sm ${contactText}`}>
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span> Orlando Diggs
          </span>
          <span className={`flex items-center gap-2 text-sm ${contactText}`}>
            <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span> Andi Lane
          </span>
          <span className={`flex items-center gap-2 text-sm ${contactText}`}>
            <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span> Kate Morrison
          </span>
          <span className={`flex items-center gap-2 text-sm ${contactText}`}>
            <span className="inline-block w-3 h-3 rounded-full bg-pink-500"></span> Koray Okumus
          </span>
        </div>
      </section>
    </aside>
  );
}
