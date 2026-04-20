import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initially closed as requested

  const toggleSidebar = () => {
    console.log("Toggle clicked, new state:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const goHome = () => console.log("Navigating to Home");
  const goCreate = () => console.log("Navigating to Create Post");

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onToggleSidebar={toggleSidebar}
        onGoHome={goHome}
        onGoCreate={goCreate}
      />
      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="content-area">
          <h1>Welcome to RedditX</h1>
          <p>Current search: {searchQuery || "None"}</p>
        </main>
      </div>
    </div>
  );
}