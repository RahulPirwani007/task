import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeLang } from "../context/ThemeLanguageContext";

const Sidebar = () => {
  const { isDark, t } = useThemeLang();

  const links = [
    { to: "/dashboard", label: t.dashboard },
    { to: "/tasks", label: t.tasks },
    { to: "/teams", label: t.teams },
    { to: "/settings", label: t.settings },
  ];

  return (
    <div
      className={`w-60 ${
        isDark ? "bg-zinc-900 text-white" : "bg-gray-100 text-black"
      } h-screen p-4`}
    >
      <div className="w-full mb-6">
        <img
          src="../../public/logo.png"
          alt="Logo"
          className="w-20 h-20"
        />
      </div>
      <nav className="space-y-4">
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition-all ${
                isActive
                  ? isDark
                    ? "bg-zinc-800"
                    : "bg-gray-300"
                  : "hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
