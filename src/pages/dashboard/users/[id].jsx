import FormUser from "../../../components/Views/Dashboard/Users/FormUser";

export default function UserEdit() {
  return (
    <div>
      <div className="flex items-center justify-between px-10 mb-10">
        <p className="font-bold text-xl">User Edit</p>
      </div>
      <div>
        <FormUser />
      </div>
    </div>
  );
}

UserEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
