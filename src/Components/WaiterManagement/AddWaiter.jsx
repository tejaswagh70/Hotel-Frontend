// AddWaiter.jsx
import { useState } from "react";

const AddWaiter = () => {
  const [waiter, setWaiter] = useState({
    name: "",
    phone: "",
    status: "Active",
    hireDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWaiter({
      ...waiter,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or dispatch action to add the waiter
    console.log("Waiter Added: ", waiter);
    setWaiter({
      name: "",
      phone: "",
      status: "Active",
      hireDate: "",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Waiter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={waiter.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="phone" className="block">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={waiter.phone}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="status" className="block">Status:</label>
          <select
            id="status"
            name="status"
            value={waiter.status}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="hireDate" className="block">Hire Date:</label>
          <input
            type="date"
            id="hireDate"
            name="hireDate"
            value={waiter.hireDate}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2">Add Waiter</button>
      </form>
    </div>
  );
};

export default AddWaiter;
