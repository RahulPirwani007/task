import React, { useState } from "react";
import { useThemeLang } from "../context/ThemeLanguageContext";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const { theme, setTheme, language, setLanguage, isDark, t } = useThemeLang();

  const sectionHeaderClass = `text-sm font-bold uppercase mb-3 ${
    isDark ? "text-white" : "text-gray-700"
  }`;

  const sectionBoxClass = `${
    isDark ? "bg-[#1c1c1e]" : "bg-gray-100"
  } p-4 rounded-lg mb-6`;

  return (
    <div
      className={`min-h-screen p-8 font-sans w-full transition-all ${
        isDark ? "bg-[#0f0f10] text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-semibold mb-8">{t.settings}</h1>

      <div className={sectionBoxClass}>
        <div className="flex items-center gap-4">
          <div
            className={`text-xl font-semibold rounded-full w-12 h-12 flex items-center justify-center ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
            }`}
          >
            D
          </div>
          <div>
            <p className="text-lg font-medium">David Smith</p>
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-700"
              } text-sm`}
            >
              david.smith@example.com
            </p>
          </div>
        </div>
      </div>

      <div className={sectionHeaderClass}>{t.preferences}</div>
      <div className={sectionBoxClass}>
        <div className="flex items-center justify-between mb-4">
          <span>{t.theme}</span>
          <select
            className={`p-2 rounded-md text-sm cursor-pointer ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="dark">{t.dark}</option>
            <option value="light">{t.light}</option>
          </select>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span>{t.notifications}</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
              notifications ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                notifications ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span>{t.language}</span>
          <select
            className={`p-2 rounded-md text-sm cursor-pointer ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>

      <div className={sectionHeaderClass}>{t.security}</div>
      <div className={sectionBoxClass}>
        <div className="flex items-center justify-between mb-4">
          <span>{t.changePassword}</span>
          <span
            className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
          >
            Administrator
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>{t.twoFactorAuth}</span>
          <button
            onClick={() => setTwoFactorAuth(!twoFactorAuth)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
              twoFactorAuth ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                twoFactorAuth ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      <div className={sectionHeaderClass}>{t.organization}</div>
      <div className={sectionBoxClass}>
        <div className="flex items-center justify-between mb-4">
          <span>{t.company}</span>
          <span
            className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
          >
            Example Corp
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>{t.role}</span>
          <span
            className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
          >
            Administrator
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
          {t.saveChanges}
        </button>
        <button
          className={`cursor-pointer font-medium ${
            isDark
              ? "text-gray-400 hover:text-red-400"
              : "text-gray-600 hover:text-red-600"
          }`}
        >
          {t.logout}
        </button>
      </div>
    </div>
  );
}
