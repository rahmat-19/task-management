import { useState } from "react";
import SelectCustome from "../../../Utils/Select";

export default function FormFilters({ formFilters, handleChange }) {
  // Daftar opsi untuk role dan position
  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },

    // Tambahkan opsi lain jika diperlukan
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 mb-4">
      <div className="flex flex-col">
        <label htmlFor="searchInput" className="block">
          Search:
        </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          className="border border-gray-300 px-1 w-full rounded-lg focus:outline-none focus:border-blue-500 h-full"
        />
      </div>
      <div className="">
        <label htmlFor="roleSelect" className="block">
          Roles:
        </label>
        <SelectCustome
          id="roleSelect"
          items={roleOptions}
          label={"Roles"}
          searchAble={false}
          value={formFilters?.role}
          change={handleChange}
        />
      </div>
    </div>
  );
}
