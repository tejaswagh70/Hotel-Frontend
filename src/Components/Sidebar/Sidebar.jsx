import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaUser,
  FaFileInvoiceDollar,
  FaBell,
  FaChevronDown,
  FaChevronUp,
  FaTable,
} from 'react-icons/fa';

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const linkClass = (path) =>
    `block px-4 py-2 rounded transition-all duration-200 hover:bg-blue-200 flex items-center space-x-3 ${
      location.pathname === path ? 'bg-blue-300 text-blue-900' : ''
    }`;

  const dropdownIcon = (isOpen) =>
    isOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />;

  const dropdownClass = (isOpen) =>
    `ml-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`;

  return (
    <div className="w-64 bg-blue-50 text-gray-800 h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="px-6 py-4 text-lg font-bold border-b border-gray-300 flex items-center space-x-3">
        <FaUtensils />
        <span>Admin Panel</span>
      </div>
      <nav className="flex-1 px-2 space-y-2">
        {/* Dashboard Link */}
        <Link to="/" className={linkClass('/')}>
          <FaHome />
          <span>Dashboard</span>
        </Link>

        {/* Menu Management with Dropdown */}
        <div>
          <button
            onClick={() => handleDropdownToggle('menu')}
            className="w-full text-left px-4 py-2 rounded hover:bg-blue-200 flex justify-between items-center transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <FaUtensils />
              <span>Menu Management</span>
            </div>
            {dropdownIcon(activeDropdown === 'menu')}
          </button>
          <div className={dropdownClass(activeDropdown === 'menu')}>
            <Link to="/menu" className={linkClass('/menu')}><span>View All Menus</span></Link>
            <Link to="/menu/add" className={linkClass('/menu/add')}><span>Add Menu Item</span></Link>
            <Link to="/menu/edit" className={linkClass('/menu/edit')}><span>Edit Menu Item</span></Link>
            <Link to="/menu/delete" className={linkClass('/menu/delete')}><span>Delete Menu Item</span></Link>
          </div>
        </div>

        {/* Order Management with Dropdown */}
        <div>
          <button
            onClick={() => handleDropdownToggle('orders')}
            className="w-full text-left px-4 py-2 rounded hover:bg-blue-200 flex justify-between items-center transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <FaShoppingCart />
              <span>Order Management</span>
            </div>
            {dropdownIcon(activeDropdown === 'orders')}
          </button>
          <div className={dropdownClass(activeDropdown === 'orders')}>
            <Link to="/orders" className={linkClass('/orders')}><span>View Orders</span></Link>
            <Link to="/orders/add" className={linkClass('/orders/add')}><span>Add Order</span></Link>
            <Link to="/orders/edit" className={linkClass('/orders/edit')}><span>Edit Order</span></Link>
            <Link to="/orders/delete" className={linkClass('/orders/delete')}><span>Delete Order</span></Link>
          </div>
        </div>

        {/* Waiter Management with Dropdown */}
        <div>
          <button
            onClick={() => handleDropdownToggle('waiters')}
            className="w-full text-left px-4 py-2 rounded hover:bg-blue-200 flex justify-between items-center transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <FaUser />
              <span>Waiter Management</span>
            </div>
            {dropdownIcon(activeDropdown === 'waiters')}
          </button>
          <div className={dropdownClass(activeDropdown === 'waiters')}>
            <Link to="/waiters" className={linkClass('/waiters')}><span>View Waiters</span></Link>
            <Link to="/waiters/add" className={linkClass('/waiters/add')}><span>Add Waiter</span></Link>
            <Link to="/waiters/edit" className={linkClass('/waiters/edit')}><span>Edit Waiter</span></Link>
            <Link to="/waiters/delete" className={linkClass('/waiters/delete')}><span>Delete Waiter</span></Link>
          </div>
        </div>

        {/* Bill Management with Dropdown */}
        <div>
          <button
            onClick={() => handleDropdownToggle('bills')}
            className="w-full text-left px-4 py-2 rounded hover:bg-blue-200 flex justify-between items-center transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <FaFileInvoiceDollar />
              <span>Bill Management</span>
            </div>
            {dropdownIcon(activeDropdown === 'bills')}
          </button>
          <div className={dropdownClass(activeDropdown === 'bills')}>
            <Link to="/bills" className={linkClass('/bills')}><span>View Bills</span></Link>
            <Link to="/bills/add" className={linkClass('/bills/add')}><span>Add Bill</span></Link>
            <Link to="/bills/edit" className={linkClass('/bills/edit')}><span>Edit Bill</span></Link>
            <Link to="/bills/delete" className={linkClass('/bills/delete')}><span>Delete Bill</span></Link>
          </div>
        </div>

        {/* Table Management Link */}
        <div>
          <Link to="/tables" className={linkClass('/tables')}>
            <FaTable />
            <span>Table Management</span>
          </Link>
        </div>

        {/* Notifications Link */}
        <div>
          <Link to="/notifications" className={linkClass('/notifications')}>
            <FaBell />
            <span>Notifications</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
