// DeleteBill.jsx
import { useNavigate, useParams } from "react-router-dom";

const DeleteBill = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Call API to delete the bill
    console.log("Bill Deleted: ", id);
    navigate("/bills"); // Redirect to bill management page after deletion
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Delete Bill</h2>
      <p>Are you sure you want to delete this bill?</p>
      <div className="mt-4 flex space-x-4">
        <button onClick={handleDelete} className="bg-red-500 text-white p-2">
          Yes, Delete
        </button>
        <button
          onClick={() => navigate("/bills")}
          className="bg-gray-500 text-white p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteBill;
