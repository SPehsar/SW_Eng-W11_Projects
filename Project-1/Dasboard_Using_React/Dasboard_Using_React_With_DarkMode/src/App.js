
// All your imports should be at the top
// components
import "./App.css"; // css
import { useState } from "react";
import { createContext } from "react";
import ReactSwitch from "react-switch";  // to make a fancy On/Off button (Any button can do this too with some codes)
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Dashboard from "./components/Dashboard"
import AverageRating from "./components/AverageRating"
import WebsiteVisitors from "./components/WebsiteVisitors"
import SentimentAnalysis from "./components/SentimentAnalysis"
 
export const StyleContext = createContext(null);

export default function App() {

  const [theme, SetTheme] = useState("lightMode")

  const toggleStyle = () => {
    SetTheme((curr) => (curr === "darkMode" ? "lightMode" : "darkMode"));
  };
  
  return (
    <StyleContext.Provider value={{theme, toggleStyle}}>

    <>
      <main className="container" id={theme}>   
      <Header />
      <Dashboard />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
      <div className="switch">  
      <label> {theme === "darkMode" ? "Dark Mode" : "Light Mode"} </label>
      <ReactSwitch onChange = {toggleStyle}  checked={theme === "lightMode"} />
      </div>
      </main>
    </>
    
    </StyleContext.Provider>
  );
}



















