// EditBill.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditBill = () => {
  const { id } = useParams(); // Get bill ID from URL
  const [bill, setBill] = useState({
    customerName: "",
    totalAmount: "",
    paymentStatus: "Unpaid",
    billDate: "",
  });

  useEffect(() => {
    // Simulate fetching the bill by ID (replace with real data fetching)
    const fetchedBill = {
      customerName: "John Doe",
      totalAmount: 50.99,
      paymentStatus: "Paid",
      billDate: "2025-01-03",
    };
    setBill(fetchedBill);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBill({
      ...bill,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or dispatch action to update the bill
    console.log("Bill Updated: ", bill);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Edit Bill</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="customerName" className="block">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={bill.customerName}
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
            value={bill.totalAmount}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="paymentStatus" className="block">Payment Status:</label>
          <select
            id="paymentStatus"
            name="paymentStatus"
            value={bill.paymentStatus}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="Unpaid">Unpaid</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="billDate" className="block">Bill Date:</label>
          <input
            type="date"
            id="billDate"
            name="billDate"
            value={bill.billDate}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2">Update Bill</button>
      </form>
    </div>
  );
};

export default EditBill;
