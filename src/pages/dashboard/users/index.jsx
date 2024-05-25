import { PlusIcon } from "@heroicons/react/24/solid";
import Layout from "../../../components/Layout/LandingPageLayout";
import TableViews from "../../../components/Views/Dashboard/Users/TableViews";
import FormFilters from "../../../components/Views/Dashboard/Users/FormFilters";
import { useState } from "react";

export default function UsersIndex() {
  const [formFilter, setFormFilter] = useState({
    role: null,
  });

  const handleChange = (value) => {
    setFormFilter((prev) => ({
      ...prev,
      role: value,
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between px-10 mb-10">
        <p className="font-bold text-xl">User Management</p>
        <button className="border rounded-lg flex items-center  py-2 px-4 text-center align-middle font-sans text-xs font-bold  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-green-500 text-black">
          <PlusIcon className="h-4" />
          Add User
        </button>
      </div>
      <div>
        <FormFilters formFilters={formFilter} handleChange={handleChange} />
        <TableViews />
      </div>
    </div>
  );
}

UsersIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
