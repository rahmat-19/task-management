import { PencilIcon } from "@heroicons/react/24/solid";
import Layout from "../../../components/Layout/LandingPageLayout";
import { useRouter } from "next/navigation";

export default function ProfileIndex() {
  const route = useRouter();
  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md relative">
        <div className="absolute top-2 right-2">
          <span
            className="flex items-center font-mono text-sm subpixel-antialiased text-blue-500 underline underline-offset-2 cursor-pointer"
            onClick={() => route.push("/dashboard/profile/edit")}
          >
            <PencilIcon className="h-3" /> Edit
          </span>
        </div>
        <img
          className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-4"
          src="/profile.jpg"
          alt="Profile"
        />
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Rahmat Hidayat
        </h1>
        <p className="text-gray-600 text-center mb-4">
          rahmat.hidayat38180@gmail.com
        </p>
        <p className="text-gray-700 text-center">PT Chinanidno Parse Group</p>
      </div>
    </div>
  );
}

ProfileIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
