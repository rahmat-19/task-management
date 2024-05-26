export default function UserCreate() {
  return (
    <div>
      <p>User Create</p>
    </div>
  );
}

UserCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
