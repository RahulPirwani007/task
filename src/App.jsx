import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import TeamsPage from "./pages/TeamsPage";
import SettingsPage from "./pages/SettingsPage";
import {
  ThemeLanguageProvider,
  useThemeLang,
} from "./context/ThemeLanguageContext";

const Layout = () => {
  const { isDark } = useThemeLang();

  return (
    <div
      className={`flex ${isDark ? "bg-[#0f0f10]" : "bg-white"} min-h-screen`}
    >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeLanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeLanguageProvider>
  );
}

export default App;
