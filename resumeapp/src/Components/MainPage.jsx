import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import UpperPart from "./Components/UpperPart/UpperPart";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from './Components/ContactUs/ContactUs'
import Template from "./Components/TemplateSlider/Template";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Help from "./Components/Help/Help";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
    background: darkMode ? "black" : "",
    color: darkMode ? "white" : "",
    }}
    >
      <Navbar/>
      <UpperPart/>
      <AboutUs/>
      <ContactUs/>
      <Template/>
      <Help/>
      <Footer/>

    
    </div>
  );
}

export default App;
