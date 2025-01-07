// WaiterManagement.jsx
import { Link } from "react-router-dom";

const WaiterManagement = () => {
  // Sample data to mimic real waiters
  const waiters = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      status: "Active",
      hireDate: "2023-06-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      status: "Inactive",
      hireDate: "2024-02-10",
    },
    // Add more waiters here...
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Waiter Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {waiters.map((waiter) => (
          <div key={waiter.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold">{waiter.name}</h3>
              <p className="text-gray-600">Phone: {waiter.phone}</p>
              <p className="mt-2 text-gray-800 font-bold">Status: {waiter.status}</p>
              <p className="mt-1 text-gray-500">Hired: {waiter.hireDate}</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/waiters/edit/${waiter.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <Link
                  to={`/waiters/delete/${waiter.id}`}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/waiters/add" className="bg-green-500 text-white p-2 rounded-lg">
          Add New Waiter
        </Link>
      </div>
    </div>
  );
};

export default WaiterManagement;
