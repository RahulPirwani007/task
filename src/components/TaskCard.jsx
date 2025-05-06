import React from "react";
import { useThemeLang } from "../context/ThemeLanguageContext";

const TaskCard = ({ title, user, progress, priority, color }) => {
  const { t } = useThemeLang();

  const getKey = (text) => text.toLowerCase().replace(/\s+/g, "");

  const titleKey = getKey(title);
  const userKey = user.toLowerCase();
  const priorityKey = priority?.toLowerCase();

  const translatedTitle = t[titleKey] || title;
  const translatedUser = t[userKey] || user;
  const translatedPriority = priority ? t[priorityKey] || priority : null;

  return (
    <div className="bg-zinc-900 text-white rounded-lg p-4 space-y-2 shadow">
      <div className="text-sm font-semibold">{translatedTitle}</div>
      <div className="flex justify-between items-center">
        <span className={`text-xs px-2 py-1 rounded text-white ${color}`}>
          {translatedUser}
        </span>
        {translatedPriority && (
          <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
            {translatedPriority}
          </span>
        )}
        {progress !== undefined && (
          <span className="text-sm text-gray-300">{progress}%</span>
        )}
      </div>
      {progress !== undefined && (
        <div className="w-full bg-zinc-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${color}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
