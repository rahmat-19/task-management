import FormUser from "../../../components/Views/Dashboard/Users/FormUser";

export default function UserCreate() {
  return (
    <div>
      <div className="flex items-center justify-between px-10 mb-10">
        <p className="font-bold text-xl">User Create</p>
      </div>
      <div>
        <FormUser />
      </div>
    </div>
  );
}

UserCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
