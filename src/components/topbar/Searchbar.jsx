import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Searchbar() {
  return (
    <div className="relative w-[190px] h-[32px] flex items-center">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full pl-9 pr-10 py-1 rounded-xl bg-[#f4f4f6] text-gray-700 text-[15px] focus:outline-none placeholder-gray-400"
        style={{ fontWeight: 400 }}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none" style={{ fontSize: "14px" }}>⌘/</span>
    </div>
  );
}
