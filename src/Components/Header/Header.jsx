
const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded focus:outline-none focus:ring"
        />
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold">A</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
