import { useNavigate } from "react-router-dom"

const Services = ()=>{

  const navigate = useNavigate()
  
  let name = window.sessionStorage.getItem("name")
  
  if(!window.sessionStorage.getItem("name")){
  navigate("/")
  alert("you must login first")
  
  }else{

    return <>
  
    <div className="center">
    <h1 className="white">Welcome to Services </h1>
    </div>
    
    </>


  }
  
  
   
  
  
  
  
  }

export default Services;