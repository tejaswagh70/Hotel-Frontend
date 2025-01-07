// BillManagement.jsx
import { Link } from "react-router-dom";

const BillManagement = () => {
  // Sample data to mimic real bills
  const bills = [
    {
      id: 1,
      customerName: "John Doe",
      totalAmount: 50.99,
      paymentStatus: "Paid",
      billDate: "2025-01-03",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      totalAmount: 25.99,
      paymentStatus: "Unpaid",
      billDate: "2025-01-02",
    },
    // Add more bills here...
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Bill Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bills.map((bill) => (
          <div key={bill.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Bill #{bill.id}</h3>
              <p className="text-gray-600">Customer: {bill.customerName}</p>
              <p className="mt-2 text-gray-800 font-bold">Total: ${bill.totalAmount}</p>
              <p className="mt-1 text-gray-500">Date: {bill.billDate}</p>
              <p className="mt-1 text-green-500">Payment Status: {bill.paymentStatus}</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/bills/edit/${bill.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <Link
                  to={`/bills/delete/${bill.id}`}
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
        <Link to="/bills/add" className="bg-green-500 text-white p-2 rounded-lg">
          Add New Bill
        </Link>
      </div>
    </div>
  );
};

export default BillManagement;
