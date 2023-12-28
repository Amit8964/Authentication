import { useNavigate } from "react-router-dom"
import "../style.css"




const Contact = ()=>{

const navigate = useNavigate();

    if(!window.sessionStorage.getItem("name")){
        alert("you must login first")
        navigate("/")
        }
      else{
        
          return<>
          <div className="center">
        <h1>hey i am contact page</h1>
        </div>
        </>
        
        }
}

export default Contact;