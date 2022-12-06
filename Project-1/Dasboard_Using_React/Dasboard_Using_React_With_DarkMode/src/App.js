
// All your imports should be at the top
// components
import "./App.css"; // css
import { useState } from "react";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Dashboard from "./components/Dashboard"
import AverageRating from "./components/AverageRating"
import WebsiteVisitors from "./components/WebsiteVisitors"
import SentimentAnalysis from "./components/SentimentAnalysis"
 
export const ThemeContext = createContext(null);

export default function App() {
  const [theme, SetTheme] = useState("dark")

  const toggleTheme = () => {
    SetTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>

    <>
      <main className="container" id={theme}>   
      <Header />
      <Dashboard />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
      <div className="switch">  
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
      <ReactSwitch onChange = {toggleTheme}  checked={theme === "dark"} />
      </div>
      </main>
    </>
    
    </ThemeContext.Provider>
  );
}



















