import React, { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const FuncSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(`Search : ${search}`);

  return (
    <div className="relative rounded-md shadow-sm">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35"
          />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </span>
      <input
        type="text"
        className="py-1 pl-10 pr-4 w-[450px] rounded-md focus:outline-none border-2 focus:ring focus:border-blue-100"
        placeholder="Search product...."
        onChange={FuncSearch}
      />
    </div>
  );
};

export default SearchInput;
