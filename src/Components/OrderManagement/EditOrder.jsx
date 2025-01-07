// EditOrder.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditOrder = () => {
  const { id } = useParams(); // Get order ID from URL
  const [order, setOrder] = useState({
    customerName: "",
    items: "",
    totalAmount: "",
    orderStatus: "Pending",
    orderDate: "",
  });

  useEffect(() => {
    // Simulate fetching the order by ID (replace with real data fetching)
    const fetchedOrder = {
      customerName: "John Doe",
      items: "Pizza, Salad",
      totalAmount: 29.99,
      orderStatus: "Completed",
      orderDate: "2025-01-03",
    };
    setOrder(fetchedOrder);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or dispatch action to update the order
    console.log("Order Updated: ", order);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Edit Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="customerName" className="block">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={order.customerName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="items" className="block">Items:</label>
          <input
            type="text"
            id="items"
            name="items"
            value={order.items}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="totalAmount" className="block">Total Amount:</label>
          <input
            type="number"
            id="totalAmount"
            name="totalAmount"
            value={order.totalAmount}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="orderStatus" className="block">Order Status:</label>
          <select
            id="orderStatus"
            name="orderStatus"
            value={order.orderStatus}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="orderDate" className="block">Order Date:</label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            value={order.orderDate}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2">Update Order</button>
      </form>
    </div>
  );
};

export default EditOrder;
