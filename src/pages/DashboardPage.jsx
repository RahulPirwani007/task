import React from "react";
import { useThemeLang } from "../context/ThemeLanguageContext";

const DashboardPage = () => {
  const { t, isDark } = useThemeLang();

  return (
    <div className={`flex-1 p-6 ${isDark ? "text-white" : "text-black"}`}>
      <h1 className="text-2xl font-bold mb-4">{t.welcomeDashboard}</h1>
      <p>{t.dashboardIntro}</p>
      <div
        className={`mt-6 rounded p-4 ${isDark ? "bg-zinc-800" : "bg-gray-200"}`}
      >
        {t.comingSoonGraphs}
      </div>
    </div>
  );
};

export default DashboardPage;
