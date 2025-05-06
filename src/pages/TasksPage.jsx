import React from "react";
import TaskCard from "../components/TaskCard";
import { useThemeLang } from "../context/ThemeLanguageContext";

const TasksPage = () => {
  const { t, isDark } = useThemeLang();

  const tasks = [
    {
      title: "Design database schema",
      user: "David",
      status: "To-Do",
      progress: 40,
      color: "bg-blue-500",
    },
    {
      title: "Define project milestones",
      user: "Sarah",
      status: "To-Do",
      priority: "High",
      color: "bg-pink-500",
    },
    {
      title: "Write API documentation",
      user: "James",
      status: "To-Do",
      color: "bg-green-500",
    },
    {
      title: "Develop task creation",
      user: "Michael",
      status: "In Progress",
      progress: 68,
      color: "bg-pink-500",
    },
    {
      title: "Design user interface",
      user: "David",
      status: "In Progress",
      progress: 25,
      color: "bg-green-500",
    },
    {
      title: "Create initial wireframes",
      user: "Sarah",
      status: "Done",
      color: "bg-pink-500",
    },
  ];

  const statusMap = {
    "To-Do": t.todo,
    "In Progress": t.inProgress,
    Done: t.done,
  };

  const categories = ["To-Do", "In Progress", "Done"];

  return (
    <div className={`flex-1 p-6 ${isDark ? "text-white" : "text-black"}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">{t.taskHeader}</h1>
        <button
          className={`px-4 py-2 rounded ${
            isDark ? "bg-zinc-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {t.login}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat}>
            <h2 className="text-lg font-semibold mb-2">{statusMap[cat]}</h2>
            <div className="space-y-4">
              {tasks
                .filter((t) => t.status === cat)
                .map((t, i) => (
                  <TaskCard key={i} {...t} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
