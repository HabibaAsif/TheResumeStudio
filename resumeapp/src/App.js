import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router,Switch,Routes,Route } from "react-router-dom";
import UpperPart from "./Components/UpperPart/UpperPart";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from './Components/ContactUs/ContactUs'
import Template from "./Components/TemplateSlider/Template";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import EditProfile from "./Components/Profile/EditProfile";
import Profile from "./Components/Profile/Profile";
import MainPage from "./Components/MainPage";
import Body from "./Components/Body/Body";
function App() {
 
  return (
    <>      
    <Router>
            <Routes>
            <Route path="/resume" element={<Body/>} />
            <Route path="/" element={<MainPage/>}/>
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/profile" element={<Profile/>} />
              

            </Routes>
          </Router></>
  );
}

export default App;
