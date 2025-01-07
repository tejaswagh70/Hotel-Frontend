// DeleteWaiter.jsx
import { useNavigate, useParams } from "react-router-dom";

const DeleteWaiter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Call API to delete the waiter
    console.log("Waiter Deleted: ", id);
    navigate("/waiters"); // Redirect to waiter management page after deletion
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Delete Waiter</h2>
      <p>Are you sure you want to delete this waiter?</p>
      <div className="mt-4 flex space-x-4">
        <button onClick={handleDelete} className="bg-red-500 text-white p-2">
          Yes, Delete
        </button>
        <button
          onClick={() => navigate("/waiters")}
          className="bg-gray-500 text-white p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteWaiter;
