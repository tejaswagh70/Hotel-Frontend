// OrderManagement.jsx
import { Link } from "react-router-dom";

const OrderManagement = () => {
  // Sample data to mimic real orders
  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      items: "Pizza, Salad",
      totalAmount: 29.99,
      orderStatus: "Completed",
      orderDate: "2025-01-03",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      items: "Burger, Fries",
      totalAmount: 19.99,
      orderStatus: "Pending",
      orderDate: "2025-01-02",
    },
    // Add more orders here...
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Order Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Order #{order.id}</h3>
              <p className="text-gray-600">Customer: {order.customerName}</p>
              <p className="mt-2 text-gray-800 font-bold">Total: ${order.totalAmount}</p>
              <p className="mt-1 text-gray-500">Date: {order.orderDate}</p>
              <p className="mt-1 text-green-500">Status: {order.orderStatus}</p>
              <p className="mt-1">Items: {order.items}</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/orders/edit/${order.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <Link
                  to={`/orders/delete/${order.id}`}
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
        <Link to="/orders/add" className="bg-green-500 text-white p-2 rounded-lg">
          Add New Order
        </Link>
      </div>
    </div>
  );
};

export default OrderManagement;
