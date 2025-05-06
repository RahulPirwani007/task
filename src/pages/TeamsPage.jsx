import React from "react";
import { Link } from "react-router-dom";
import { useThemeLang } from "../context/ThemeLanguageContext";

const members = ["David", "Sarah", "James", "Michael"];

const TeamsPage = () => {
  const { t, isDark } = useThemeLang();

  return (
    <div className={`flex-1 p-6 ${isDark ? "text-white" : "text-black"}`}>
      <h1 className="text-2xl font-bold mb-4">{t.teamMembers}</h1>
      <ul className="space-y-2">
        {members.map((member) => {
          const translatedMember = t[member.toLowerCase()] || member;

          return (
            <li
              key={member}
              className={`p-3 rounded transition ${
                isDark
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <Link to={`/teams/${member.toLowerCase()}`}>
                👤 {translatedMember}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamsPage;
