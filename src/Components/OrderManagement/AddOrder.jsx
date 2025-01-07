// AddOrder.jsx
import { useState } from "react";

const AddOrder = () => {
  const [order, setOrder] = useState({
    customerName: "",
    items: "",
    totalAmount: "",
    orderStatus: "Pending",
    orderDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or dispatch action to add the order
    console.log("Order Added: ", order);
    setOrder({
      customerName: "",
      items: "",
      totalAmount: "",
      orderStatus: "Pending",
      orderDate: "",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Order</h2>
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

        <button type="submit" className="bg-blue-500 text-white p-2">Add Order</button>
      </form>
    </div>
  );
};

export default AddOrder;
