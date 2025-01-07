// Notifications.jsx
import { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New order received from customer #123.",
      date: "2025-01-03",
      status: "unread",
    },
    {
      id: 2,
      message: "Waiter John Doe clocked in.",
      date: "2025-01-02",
      status: "read",
    },
    {
      id: 3,
      message: "New menu item added: Vegan Burger.",
      date: "2025-01-01",
      status: "unread",
    },
    // Add more notifications as needed
  ]);

  const toggleStatus = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, status: notification.status === "unread" ? "read" : "unread" }
          : notification
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded-lg shadow-sm ${notification.status === "unread" ? "bg-yellow-100" : "bg-white"}`}
          >
            <p className="text-lg font-semibold">{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.date}</p>
            <div className="mt-2">
              <button
                onClick={() => toggleStatus(notification.id)}
                className={`py-1 px-3 rounded-lg text-white ${
                  notification.status === "unread" ? "bg-blue-500" : "bg-green-500"
                }`}
              >
                {notification.status === "unread" ? "Mark as Read" : "Mark as Unread"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
