import { SearchIcon } from "../../icons/actions/SearchIcon";

export const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-3 pointer-events-none">
        <SearchIcon className="text-text-light/60" size={20} />
      </div>
      <input
        type="text"
        placeholder="Search tools ..."
        className="w-64 pl-10 pr-4 py-2 bg-background-alt border border-border rounded-lg text-text placeholder:text-text-light/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      />
    </div>
  );
};
