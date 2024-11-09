import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for URL-based active state tracking
import img from "../assets/images/avatar.jpeg";
import { dashboard, expenses, incomes, logout } from "../assets/images/icons";

function Navigation() {
  const location = useLocation(); // Get current location
  const [active, setActive] = useState(location.pathname); // Set initial active state based on URL

  return (
    <div className="bg-gray-900 m-3 mr-0 w-1/5 min-h-screen p-5 rounded-2xl flex flex-col justify-between text-gray-400">
      <div>
        <div className="flex items-center gap-4 mb-10">
          <img src={img} alt="User Avatar" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="text-white font-semibold">Nahom</h3>
            <h5 className="text-gray-400 text-sm">Your Money</h5>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Dashboard', icon: dashboard, route: '/', key: '/' },
            { name: 'Incomes', icon: incomes, route: '/income', key: '/income' },
            { name: 'Expenses', icon: expenses, route: '/expense', key: '/expense' },
          ].map(({ name, icon, route, key }) => (
            <Link
              key={key}
              to={route}
              onClick={() => setActive(route)}
              className={`flex items-center p-2 rounded-lg transition duration-200 
                ${active === route ? 'bg-gray-700 text-white' : 'hover:bg-gray-800'}`
              }>
              <div className={`${active === route ? 'bg-green-500' : ''} w-1 h-full rounded-r-md`}></div>
              <span className="mr-2 text-lg">{icon}</span>
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div
        className="flex items-center gap-2 p-2 text-gray-400 hover:text-white hover:bg-red-500 rounded-lg cursor-pointer transition duration-200"
        onClick={() => alert('Log Out')}
      >
        <span className="text-lg">{logout}</span>
        <span>Log Out</span>
      </div>
    </div>
  );
}

export default Navigation;
