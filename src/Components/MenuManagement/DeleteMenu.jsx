// DeleteMenu.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteMenu = () => {
  const { id } = useParams();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Call API to delete the item
    console.log("Menu Deleted: ", id);
    navigate("/menu"); // Redirect to menu management page after deletion
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Delete Menu Item</h2>
      <p>Are you sure you want to delete this menu item?</p>
      <div className="mt-4 flex space-x-4">
        <button onClick={handleDelete} className="bg-red-500 text-white p-2">
          Yes, Delete
        </button>
        <button
          onClick={() => navigate("/menu")}
          className="bg-gray-500 text-white p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteMenu;
