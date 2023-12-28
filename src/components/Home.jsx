import { useNavigate } from "react-router-dom"
import "../style.css"
import { Typewriter } from 'react-simple-typewriter'



const Home = ()=>{

const navigate = useNavigate()

let name = window.sessionStorage.getItem("name")

if(!window.sessionStorage.getItem("name")){
navigate("/")
alert("you must login first")

}
else{

    return <>

    <div className="center">



        <h1 className="white">welcome to home page {name} <br/> 
        
        We Are the  
        <span style={{color:"orange",fontWeight:600,fontSize:"2.5rem"}}>
        <Typewriter
        
        words={[' Developers', ' Engineers', ' Coders', ' Cyber experts']}
        loop={Infinity}
        cursor
        cursorStyle='!'
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1500}
     />
     
     </span>
     
      </h1>
   

    </div>
    
    </>

}


}

export default Home