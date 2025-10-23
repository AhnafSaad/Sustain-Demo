import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Users, Package, LayoutDashboard } from 'lucide-react';

const AdminDashboard = () => {
  const location = useLocation();

  const getWelcomeMessage = () => {
    if (location.pathname.endsWith('/users')) return 'Manage all registered users.';
    if (location.pathname.endsWith('/products')) return 'View, create, edit, and delete products.';
    return 'Welcome to your control panel.';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">{getWelcomeMessage()}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                <NavLink
                  to="/admin/dashboard"
                  end
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                    }`
                  }
                >
                  <LayoutDashboard className="w-5 h-5 mr-3" />
                  Overview
                </NavLink>
                <NavLink
                  to="/admin/users"
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                    }`
                  }
                >
                  <Users className="w-5 h-5 mr-3" />
                  Users
                </NavLink>
                <NavLink
                  to="/admin/products"
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                    }`
                  }
                >
                  <Package className="w-5 h-5 mr-3" />
                  Products
                </NavLink>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6 min-h-[300px]">
              <Outlet /> {/* Child routes will be rendered here */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
