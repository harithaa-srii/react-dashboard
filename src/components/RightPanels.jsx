export default function RightPanel() {
  return (
    <aside className="w-[320px] shrink-0 bg-white border-l dashboard-border flex flex-col px-6 py-6 h-full overflow-y-auto">
      {/* Notifications Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <ul className="space-y-3 mb-6">
          <li className="text-sm text-gray-600">You have a bug that needs fixing<br /><span className="text-xs text-gray-400">Just now</span></li>
          <li className="text-sm text-gray-600">New user registered<br /><span className="text-xs text-gray-400">59 minutes ago</span></li>
          <li className="text-sm text-gray-600">Andi Lane subscribed to you<br /><span className="text-xs text-gray-400">Today, 11:59 AM</span></li>
        </ul>
      </section>

      {/* Activities Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Activities</h2>
        <ul className="space-y-3 mb-6">
          <li className="text-sm text-gray-600">You have a bug that needs fixing<br /><span className="text-xs text-gray-400">Just now</span></li>
          <li className="text-sm text-gray-600">Released a new version<br /><span className="text-xs text-gray-400">59 minutes ago</span></li>
          <li className="text-sm text-gray-600">Submitted a bug<br /><span className="text-xs text-gray-400">12 hours ago</span></li>
        </ul>
      </section>

      {/* Contacts Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Contacts</h2>
        <div className="flex flex-col space-y-3">
          <span className="flex items-center gap-2 text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span> Natali Craig</span>
          <span className="flex items-center gap-2 text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-red-500"></span> Drew Cano</span>
          <span className="flex items-center gap-2 text-sm text-gray-700"><span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span> Orlando Diggs</span>
        </div>
      </section>
    </aside>
  );
}
