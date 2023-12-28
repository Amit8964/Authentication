import { useNavigate } from "react-router-dom"
import "../style.css"
import Login from "./Login"
import { useEffect, useState } from "react"
import Home from "./Home"





const Logout = ()=>{

const navigate =  useNavigate()
const [ld, setld] = useState(true)
useEffect(()=>{

    if(!window.sessionStorage.name){
        setld(false)
        navigate("/")
       
    }

},[])


const handler = ()=>{
  
    window.sessionStorage.clear()
    navigate('/')
    alert("logged out successfully")

}


    return <>
    {!ld? <Home/>:
    <div>
            <center><h1 style={{marginTop:"90px",marginBottom:"-50px",fontSize:"2.5rem"}} ><span style={{color:"orange"}} >Good</span> <span style={{color:"green"}} >Bye</span> </h1></center>
    <div className="boxer">  

    <button className="btn" onClick={handler}>Logout</button>
    </div>
    </div>
}
    </>
}

export default Logout