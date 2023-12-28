import Login from "./components/Login";
import Header from "./components/Header";
import "./style.css"
import Resister from "./components/Resister";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Placement from "./components/Placement";
import AboutUs from "./components/AboutUs";
import { Router, Route,Routes } from "react-router-dom";

const App = () => {




return<>

<Routes>

    <Route path="/" element={<Login/>}/>
    <Route path="/Header" element={<Header/>}>
    <Route path="Home" element={<Home/>} />  
    <Route path="Services" element={<Services/>} />
    <Route path="Contact" element={<Contact/>} />
    <Route path="Logout" element={<Logout/>} />
    <Route path="Placement" element={<Placement/>} />
    <Route path="AboutUs" element={<AboutUs/>} />



   
    </Route>
  

    <Route path="Resister" element={<Resister/>} />
    




</Routes>


</>
 
}


export default App;
