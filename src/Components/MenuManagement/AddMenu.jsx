// AddMenu.jsx
import { useState } from "react";

const AddMenu = () => {
  const [menuItem, setMenuItem] = useState({
    name: "",
    description: "",
    price: "",
    serving: "",
    rating: 0,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({
      ...menuItem,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or dispatch action to add the menu item
    console.log("Menu Added: ", menuItem);
    setMenuItem({
      name: "",
      description: "",
      price: "",
      serving: "",
      rating: 0,
      image: "",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={menuItem.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="description" className="block">Description:</label>
          <textarea
            id="description"
            name="description"
            value={menuItem.description}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="price" className="block">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={menuItem.price}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="serving" className="block">Serving Size:</label>
          <input
            type="text"
            id="serving"
            name="serving"
            value={menuItem.serving}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="rating" className="block">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={menuItem.rating}
            onChange={handleChange}
            className="border p-2 w-full"
            min="0"
            max="5"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="image" className="block">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={menuItem.image}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2">Add Menu Item</button>
      </form>
    </div>
  );
};

export default AddMenu;
