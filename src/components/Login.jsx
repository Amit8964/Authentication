import { useEffect, useState } from "react"
import "../style.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { motion } from "framer-motion"




const Login = ()=>{

    const navigate = useNavigate();

const [login, setlogin]= useState({ email:"", pass:"" })

const [invalid, setvalid] = useState("")
const [color,setcolor] = useState("")

const variants = {

    open:{
        opacity:1,
        y:-50,
        transition:{
            duration:1
        }
    }
    
    }

const handler = (e)=>{

console.log(login.email)
    setlogin((prev)=>{


return  {
    ...prev,
    [e.target.name]: e.target.value
}
    })
}


const logger = async (e)=>{
    
e.preventDefault();


try{

    let data = await axios.post(`http://localhost:4000/getdata`,login)
   

        if(data.data.length>=1){
let dt = data.data[0];


            if(dt.email===login.email && dt.pass === login.pass){

window.sessionStorage.setItem("name", dt.name);
alert("login sucessfully")
navigate("Header/Home")
               
            }
            else{
                setcolor("red");
                setvalid("Invalid username or password")
            }
          


        }
        
        else{

setcolor("red");
setvalid("User does not exist")

        }

}
catch(err){

    alert("somthing went wrong")
}

}


return <>

<motion.div className="boxer">

<motion.div className="login-page" variants={variants} initial={{opacity:0}} whileInView={"open"}>

   <motion.center><h1 style={{color:color, fontWeight:400}}>{invalid}</h1></motion.center> 
   
  <motion.div className="form">
  <h1 className="login_h">Login</h1>


    <form className="login-form">
      <input type="text" placeholder="email" name="email" onChange={handler } value={login.email}/>
      <input type="number" placeholder="password" name="pass" onChange={handler} value={login.pass} />
      <button onClick={logger} >login</button>
      <p className="message">Not registered? <Link to="../Resister">Create an account</Link></p>
    </form>
  </motion.div>
</motion.div>




    

</motion.div>


</>

}

export default Login