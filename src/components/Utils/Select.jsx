import { useEffect, useRef, useState } from "react";
import { useSelectCustome } from "../Hooks/useSelectCustome";

export default function SelectCustome({
  items,
  label,
  searchAble,
  value,
  change,
}) {
  const changeSlectItem = (value) => {
    change(value);
    setOpen(false);
    handlePositionSearch(null, true);
    setSearch("");
  };

  const {
    handlePositionSearch,
    setOpen,
    setSearch,
    handleKeyDown,
    open,
    datas,
    seacrh,
    highlightedIndex,
    dropdownRef,
    searchInputRef,
  } = useSelectCustome(items, changeSlectItem, searchAble);

  return (
    <div className="relative group w-full h-full">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        id="dropdown-button"
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:outline-none "
      >
        <span className="mr-2 text-gray-500 font-normal">
          {value
            ? items.find((item) => item.value == value)?.label
            : `Select ${label}`}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdown-menu"
        className={`${
          !open && `hidden`
        } absolute right-0 mt-2 w-full overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 focus:outline-none`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={dropdownRef}
      >
        {searchAble && (
          <input
            type="text"
            id="search-input"
            onChange={handlePositionSearch}
            value={seacrh}
            className={`block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none`}
            placeholder="Search items"
            autoComplete="off"
            ref={searchInputRef}
          />
        )}
        {datas.length == 0 ? (
          <span className="block px-4 py-2 w-full rounded-md">
            Data Not Found
          </span>
        ) : (
          datas.map((item, index) => (
            <span
              key={index}
              onClick={() => changeSlectItem(item.value)}
              className={`block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md ${
                item.value == value && "bg-gray-100"
              }  ${highlightedIndex === index ? "bg-gray-200" : ""}`}
            >
              {item.label}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
