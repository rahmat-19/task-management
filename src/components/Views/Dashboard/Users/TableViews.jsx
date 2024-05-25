export default function TableViews() {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nama
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">2</td>
            <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">User</td>
          </tr>
          {/* More rows can be added here */}
        </tbody>
      </table>
    </div>
  );
}
