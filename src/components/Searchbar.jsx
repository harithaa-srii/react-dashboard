import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import Command from "../assets/icons/text.svg?react"; // Commented out as it's no longer used

export default function Searchbar() {
  return (
    <div className="relative w-[160px] h-[28px]">
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full pl-8 pr-10 py-1 rounded-lg bg-[#1C1C1C0D] text-gray-400 text-base focus:outline-none placeholder-gray-400"
      />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none">⌘/</span>
    </div>
  );
}