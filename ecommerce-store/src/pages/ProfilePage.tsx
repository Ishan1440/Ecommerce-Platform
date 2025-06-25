import React, { useState } from 'react';
import { User } from '../types';
import { LogOut, Edit2, Save, ShoppingBag } from 'lucide-react';

// Mock user data
const mockUser: User = {
  id: 1,
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  preferences: ['electronics', 'fashion', 'books'],
};

const mockOrders = [
  {
    id: 'ORD-1001',
    date: '2024-06-01',
    total: 1299,
    status: 'Delivered',
    items: 2,
  },
  {
    id: 'ORD-1002',
    date: '2024-05-15',
    total: 349,
    status: 'Shipped',
    items: 1,
  },
];

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user.name, email: user.email });

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    setForm({ name: user.name, email: user.email });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setUser({ ...user, name: form.name, email: form.email });
    setEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
            <LogOut className="w-5 h-5" /> Log Out
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600 mb-2">
              {user.name[0]}
            </div>
            <span className="text-gray-700 font-medium">{user.name}</span>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-1">Name</label>
              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <span>{user.name}</span>
                  <button onClick={handleEdit} className="text-blue-600 hover:text-blue-800">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span>{user.email}</span>
              )}
            </div>
            {editing && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            )}
            <div className="mt-6">
              <label className="block text-gray-600 font-medium mb-1">Preferences</label>
              <div className="flex flex-wrap gap-2">
                {user.preferences.map((pref) => (
                  <span
                    key={pref}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" /> Order History
        </h2>
        {mockOrders.length === 0 ? (
          <div className="text-gray-600">No orders yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 px-4 font-semibold text-gray-700">Order ID</th>
                  <th className="py-2 px-4 font-semibold text-gray-700">Date</th>
                  <th className="py-2 px-4 font-semibold text-gray-700">Items</th>
                  <th className="py-2 px-4 font-semibold text-gray-700">Total</th>
                  <th className="py-2 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="py-2 px-4">{order.id}</td>
                    <td className="py-2 px-4">{order.date}</td>
                    <td className="py-2 px-4">{order.items}</td>
                    <td className="py-2 px-4">${order.total}</td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage; 