import { useNavigate } from "react-router-dom"
import "../style.css"




const AboutUs = ()=>{

const navigate = useNavigate()

let name = window.sessionStorage.getItem("name")

if(!window.sessionStorage.getItem("name")){
navigate("/")
alert("you must login first")

}
else{

    return <>

    <div className="center">



        <h1 className="white">welcome to About us </h1>
   

    </div>
    
    </>

}


}

export default AboutUs