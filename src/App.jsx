import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import MenuManagement from './Components/MenuManagement/MenuMangement';
import AddMenu from './Components/MenuManagement/AddMenu';
import EditMenu from './Components/MenuManagement/EditMenu';
import DeleteMenu from './Components/MenuManagement/DeleteMenu';
import OrderManagement from './Components/OrderManagement/OrderManagement';
import AddOrder from './Components/OrderManagement/AddOrder';
import EditOrder from './Components/OrderManagement/EditOrder';
import DeleteOrder from './Components/OrderManagement/DeleteOrder';
import WaiterManagement from './Components/WaiterManagement/WaiterManagement';
import AddWaiter from './Components/WaiterManagement/AddWaiter';
import EditWaiter from './Components/WaiterManagement/EditWaiter';
import DeleteWaiter from './Components/WaiterManagement/DeleteWaiter';
import BillManagement from './Components/BillManagement/BilManagement';
import AddBill from './Components/BillManagement/AddBill';
import EditBill from './Components/BillManagement/EditBill';
import DeleteBill from './Components/BillManagement/DeleteBill';
import Notifications from './Components/Notifications/Notifications';
import TableManagememt from './Components/TableManagement/TableManagememt';
import Login from './Components/Login/Login'; // Assuming Login is another component
const App = () => {
  const isLoggedIn = true ; // Set to true once login state is managed

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-4 flex-1 overflow-y-auto">
            <Routes>
              {/* Login Route */}
              <Route path="/login" element={<Login />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
              />
              
              {/* Menu Management */}
              <Route path="/menu" element={<MenuManagement />} />
              <Route path="/menu/add" element={<AddMenu />} />
              <Route path="/menu/edit/:id" element={<EditMenu />} />
              <Route path="/menu/delete/:id" element={<DeleteMenu />} />

              {/* Order Management */}
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/orders/add" element={<AddOrder />} />
              <Route path="/orders/edit/:id" element={<EditOrder />} />
              <Route path="/orders/delete/:id" element={<DeleteOrder />} />

              {/* Waiter Management */}
              <Route path="/waiters" element={<WaiterManagement />} />
              <Route path="/waiters/add" element={<AddWaiter />} />
              <Route path="/waiters/edit/:id" element={<EditWaiter />} />
              <Route path="/waiters/delete/:id" element={<DeleteWaiter />} />

              {/* Bill Management */}
              <Route path="/bills" element={<BillManagement />} />
              <Route path="/bills/add" element={<AddBill />} />
              <Route path="/bills/edit/:id" element={<EditBill />} />
              <Route path="/bills/delete/:id" element={<DeleteBill />} />

              {/* Notifications */}
              <Route path="/notifications" element={<Notifications />} />

              {/* Table Management */}
              <Route path="/tables" element={<TableManagememt />} />

              {/* Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
