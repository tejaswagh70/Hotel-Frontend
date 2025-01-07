// EditMenu.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditMenu = () => {
  const { id } = useParams(); // Get the menu item id from URL
  const [menuItem, setMenuItem] = useState({
    name: "",
    description: "",
    price: "",
    serving: "",
    rating: 0,
    image: "",
  });

  useEffect(() => {
    // Simulate fetching menu item by id (replace with real data fetching)
    const fetchedMenuItem = {
      name: "Pizza",
      description: "Delicious cheese pizza",
      price: 12.99,
      serving: "1 Person",
      rating: 4.5,
      image: "https://via.placeholder.com/150", // Replace with real URL
    };
    setMenuItem(fetchedMenuItem);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({
      ...menuItem,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or dispatch action to update the menu item
    console.log("Menu Updated: ", menuItem);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Edit Menu Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Similar form fields as AddMenu */}
        {/* Use menuItem state values for the form */}
        <button type="submit" className="bg-blue-500 text-white p-2">Update Menu Item</button>
      </form>
    </div>
  );
};

export default EditMenu;
