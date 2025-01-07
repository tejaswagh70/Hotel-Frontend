// DeleteOrder.jsx
import { useNavigate, useParams } from "react-router-dom";

const DeleteOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Call API to delete the order
    console.log("Order Deleted: ", id);
    navigate("/orders"); // Redirect to order management page after deletion
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Delete Order</h2>
      <p>Are you sure you want to delete this order?</p>
      <div className="mt-4 flex space-x-4">
        <button onClick={handleDelete} className="bg-red-500 text-white p-2">
          Yes, Delete
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="bg-gray-500 text-white p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteOrder;
