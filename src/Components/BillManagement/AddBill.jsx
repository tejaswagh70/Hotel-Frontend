// AddBill.jsx
import { useState } from "react";

const AddBill = () => {
  const [bill, setBill] = useState({
    customerName: "",
    totalAmount: "",
    paymentStatus: "Unpaid",
    billDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBill({
      ...bill,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or dispatch action to add the bill
    console.log("Bill Added: ", bill);
    setBill({
      customerName: "",
      totalAmount: "",
      paymentStatus: "Unpaid",
      billDate: "",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Bill</h2>
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

        <button type="submit" className="bg-blue-500 text-white p-2">Add Bill</button>
      </form>
    </div>
  );
};

export default AddBill;
