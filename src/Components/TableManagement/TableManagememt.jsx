import { FaPlus, FaCartPlus } from 'react-icons/fa';
import  { useState } from 'react';
const TableManagement = () => {
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
  ]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [orders, setOrders] = useState({});
  const [newTableName, setNewTableName] = useState('');

  // Handle selecting a table
  const handleSelectTable = (table) => {
    setSelectedTable(table);
  };

  // Handle adding a new table
  const handleAddTable = () => {
    if (newTableName.trim()) {
      const newTable = { id: tables.length + 1, name: newTableName };
      setTables([...tables, newTable]);
      setNewTableName(''); // Reset input field
    }
  };

  // Handle placing an order for the selected table
  const handlePlaceOrder = () => {
    if (selectedTable) {
      const tableOrders = orders[selectedTable.id] || [];
      tableOrders.push(`Order for ${selectedTable.name} placed at ${new Date().toLocaleTimeString()}`);
      setOrders({ ...orders, [selectedTable.id]: tableOrders });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Table Management</h2>

      {/* Add New Table */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newTableName}
          onChange={(e) => setNewTableName(e.target.value)}
          placeholder="Enter table name"
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddTable}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          <FaPlus /> Add Table
        </button>
      </div>

      {/* Table List */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`p-4 border rounded cursor-pointer ${selectedTable?.id === table.id ? 'bg-blue-100' : 'hover:bg-blue-200'}`}
            onClick={() => handleSelectTable(table)}
          >
            {table.name}
          </div>
        ))}
      </div>

      {/* Selected Table and Orders */}
      {selectedTable && (
        <div className="mt-6">
          <h3 className="text-lg">Selected Table: {selectedTable.name}</h3>

          {/* Place Order */}
          <button
            onClick={handlePlaceOrder}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            <FaCartPlus /> Place Order for {selectedTable.name}
          </button>

          {/* Orders for Selected Table */}
          <div className="mt-4">
            <h4 className="font-medium">Orders:</h4>
            <ul className="space-y-2">
              {(orders[selectedTable.id] || []).length === 0 ? (
                <li>No orders placed yet.</li>
              ) : (
                orders[selectedTable.id].map((order, index) => (
                  <li key={index}>{order}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableManagement;
