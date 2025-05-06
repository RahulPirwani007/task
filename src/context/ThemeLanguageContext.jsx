import React, { createContext, useContext, useState } from "react";

const ThemeLanguageContext = createContext();

export const ThemeLanguageProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("english");

  const isDark = theme === "dark";

  const translations = {
    english: {
      dashboard: "Dashboard",
      tasks: "Tasks",
      myTasks: "My Tasks",
      allTasks: "All Tasks",
      createTask: "Create Task",
      teams: "Teams",
      teamOverview: "Team Overview",
      addMember: "Add Member",
      settings: "Settings",
      welcomeDashboard: "Welcome to the Dashboard",
      dashboardIntro:
        "Here you can see an overview of project statistics, recent activity, and performance metrics.",
      taskHeader: "Task Management System",
      todo: "To-Do",
      inProgress: "In Progress",
      done: "Done",
      teamMembers: "Team Members",
      login: "Login",
      logout: "Logout",
      saveChanges: "Save Changes",
      language: "Language",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      notifications: "Notifications",
      security: "Security",
      changePassword: "Change Password",
      twoFactorAuth: "Two-Factor Authentication",
      organization: "Organization",
      company: "Company",
      role: "Role",
      david: "David",
      sarah: "Sarah",
      michal: "Michal",
      james: "James",
      michael: "Michael",
      designdatabaseschema: "Design Database Schema",
      developtaskcreation: "Develop Task Creation",
      fixbug: "Fix Bug",
      reviewcode: "Review Code",
      createui: "Create UI",
      writetests: "Write Tests",
      deployproject: "Deploy Project",
      updateapi: "Update API",
      createinitialwireframes: "Create Initial Wireframes",
      defineprojectmilestones: "Define Project Milestones",
      designuserinterface: "Design User Interface",
      writeapidocumentation: "Write API Documentation",
      comingSoonGraphs: "🚀 Coming soon: Graphs and reports!",
      high: "High",
      medium: "Medium",
      low: "Low",
    },
    hindi: {
      dashboard: "डैशबोर्ड",
      tasks: "कार्य",
      myTasks: "मेरे कार्य",
      allTasks: "सभी कार्य",
      createTask: "कार्य बनाएँ",
      teams: "टीम",
      teamOverview: "टीम अवलोकन",
      addMember: "सदस्य जोड़ें",
      settings: "सेटिंग्स",
      welcomeDashboard: "डैशबोर्ड में आपका स्वागत है",
      dashboardIntro:
        "यहाँ आप प्रोजेक्ट के आँकड़े, हाल की गतिविधियाँ, और प्रदर्शन मेट्रिक्स देख सकते हैं।",
      taskHeader: "कार्य प्रबंधन प्रणाली",
      todo: "करना है",
      inProgress: "प्रगति में है",
      done: "पूर्ण",
      teamMembers: "टीम सदस्य",
      login: "लॉग इन",
      logout: "लॉग आउट",
      saveChanges: "परिवर्तन सहेजें",
      language: "भाषा",
      theme: "थीम",
      light: "प्रकाश",
      dark: "अंधेरा",
      notifications: "सूचनाएं",
      security: "सुरक्षा",
      changePassword: "पासवर्ड बदलें",
      twoFactorAuth: "दो-कारक प्रमाणीकरण",
      organization: "संगठन",
      company: "कंपनी",
      role: "भूमिका",
      david: "डेविड",
      sarah: "सारा",
      michal: "माइकल",
      james: "जेम्स",
      michael: "माइकल",
      designdatabaseschema: "डेटाबेस स्कीमा डिज़ाइन करें",
      developtaskcreation: "कार्य निर्माण विकसित करें",
      fixbug: "बग ठीक करें",
      reviewcode: "कोड की समीक्षा करें",
      createui: "यूआई बनाएं",
      writetests: "टेस्ट लिखें",
      deployproject: "प्रोजेक्ट डिप्लॉय करें",
      updateapi: "एपीआई अपडेट करें",
      createinitialwireframes: "प्रारंभिक वायरफ़्रेम बनाएं",
      defineprojectmilestones: "प्रोजेक्ट माइलस्टोन परिभाषित करें",
      designuserinterface: "यूज़र इंटरफ़ेस डिज़ाइन करें",
      writeapidocumentation: "एपीआई दस्तावेज़ लिखें",
      comingSoonGraphs: "🚀 जल्द आ रहा है: ग्राफ़ और रिपोर्ट्स!",
      high: "उच्च",
      medium: "मध्यम",
      low: "निम्न",
    },
  };

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        isDark,
        t: translations[language],
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLang = () => useContext(ThemeLanguageContext);
