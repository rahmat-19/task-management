import { useState } from "react";
import SelectCustome from "../../../Utils/Select";

export default function FormUser() {
  const posisi = [{ value: "1", label: "Team Lead" }];
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    posisi: "",
    image: "",
  });
  const handleChange = () => {

  }
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white w-1/4 p-8 rounded-lg shadow-md">
        <img
          className="w-28 h-28 bg-slate-400 rounded-full mx-auto mb-4"
          src="/profile.jpg"
          alt="Profile"
        />
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Nama"
            className="border border-gray-400 px-3 py-2 rounded-lg w-full max-w-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 px-3 py-2 rounded-lg w-full max-w-md"
          />
          <input
            type="password"
            placeholder="Password Lama"
            className="border border-gray-400 px-3 py-2 rounded-lg w-full max-w-md"
          />
          <SelectCustome items={posisi} label={"Posisi"} value={form.posisi} searchAble={true} change={handleChange}/>
          <input
            type="password"
            placeholder="Konfirmasi Password Baru"
            className="border border-gray-400 px-3 py-2 rounded-lg w-full max-w-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full max-w-md">
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}
