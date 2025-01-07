// MenuManagement.jsx
import { Link } from "react-router-dom";

const MenuManagement = () => {
  // Sample data to mimic real menu items
  const menuItems = [
    {
      id: 1,
      name: "Pizza",
      description: "A delicious cheese pizza",
      price: 12.99,
      serving: "1 Person",
      rating: 4.5,
      image: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-cinematic.jpg",
    },
    {
      id: 2,
      name: "Burger",
      description: "A juicy burger",
      price: 9.99,
      serving: "1 Person",
      rating: 4.2,
      image: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
    {
      id: 3,
      name: "Pasta",
      description: "Creamy Alfredo pasta with chicken",
      price: 11.49,
      serving: "1 Person",
      rating: 4.6,
      image: "https://media.istockphoto.com/id/482964545/photo/arrabiata-pasta.jpg?b=1&s=612x612&w=0&k=20&c=X2sFi-GHSXkWUfW6mXiYiLRpBI9RPLpBTBIqc-RuDbk=",
    },
    {
      id: 4,
      name: "Salad",
      description: "Fresh garden salad with vinaigrette",
      price: 7.99,
      serving: "1 Person",
      rating: 4.3,
      image: "https://media.istockphoto.com/id/691448664/photo/fresh-salad-plate-on-blue-picnic-table.jpg?b=1&s=612x612&w=0&k=20&c=AZodD4TliNyxSVAe7jUeRuq04SlPfaQBw-oB2gPzv8I=",
    },
    {
      id: 5,
      name: "Sushi",
      description: "Assorted sushi platter",
      price: 19.99,
      serving: "2 People",
      rating: 4.8,
      image: "https://media.istockphoto.com/id/1400729413/photo/sushi-assortment-on-dark-background.jpg?b=1&s=612x612&w=0&k=20&c=nXGJEpDiftWLINcXiSJBD3X85Fp25VFdJn8VfONFuCI=",
    },
    {
      id: 6,
      name: "Steak",
      description: "Grilled ribeye steak with sides",
      price: 24.99,
      serving: "1 Person",
      rating: 4.7,
      image: "https://www.foodiesfeed.com/wp-content/uploads/2023/03/grilled-steak.jpg",
    },
    {
      id: 7,
      name: "Ice Cream",
      description: "Vanilla ice cream with chocolate drizzle",
      price: 4.99,
      serving: "1 Person",
      rating: 4.4,
      image: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/vanilla-ice-cream.jpg",
    },
    {
      id: 8,
      name: "Tacos",
      description: "Spicy chicken tacos with toppings",
      price: 10.99,
      serving: "2 People",
      rating: 4.5,
      image: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/plate-of-delicious-beef-tacos.jpg",
    },
  ];
  

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Menu Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="mt-2 text-gray-800 font-bold">${item.price}</p>
              <p className="mt-1 text-gray-500">Serving: {item.serving}</p>
              <p className="mt-1 text-yellow-500">Rating: {item.rating} ★</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/menu/edit/${item.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <Link
                  to={`/menu/delete/${item.id}`}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/menu/add" className="bg-green-500 text-white p-2 rounded-lg">
          Add New Menu Item
        </Link>
      </div>
    </div>
  );
};

export default MenuManagement;
