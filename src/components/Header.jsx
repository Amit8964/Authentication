import "../style.css"
import {Link,Outlet, useNavigate} from "react-router-dom"
import User_info from "./User_info"
import { useEffect } from "react"
import { useState } from "react"



const  Header =()=>{


    const navigate = useNavigate();
    const [ld, setld] = useState(true)
    useEffect(()=>{
    
        if(!window.sessionStorage.name){
            setld(false)
                    
        }
    
    },[])


    return<>

    {!ld ? navigate("/"):
    <div>
<User_info/>
<div className="Hcontainer">

    <div className="nav">
    <ul>
<Link to="Home">  <li> Home </li></Link>
<Link to="AboutUs"><li>About Us</li></Link>
<Link to="Services"><li>Services</li></Link>
<Link to="Placement"><li>Placement</li></Link>
<Link to="Contact"><li>Contact Us</li></Link>
<Link to="Logout"><li>Logout</li></Link>
   </ul>
   </div>

</div>

<Outlet/>
</div>
}
    
    </>
}


export default Header