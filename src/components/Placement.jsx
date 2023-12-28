import { useNavigate } from "react-router-dom"
import "../style.css"




const Placement = ()=>{

const navigate = useNavigate()

let name = window.sessionStorage.getItem("name")

if(!window.sessionStorage.getItem("name")){
    navigate("/")
alert("you must login first")

}
else{

    return <>

    <div className="center">

        <h1 className="white">welcome to placement page </h1>
   

    </div>
    
    </>

}


}

export default Placement


