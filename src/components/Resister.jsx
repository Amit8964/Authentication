import { useState } from "react"
import "../style.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { motion } from "framer-motion"


const Resister = ()=>{

    const [signup, setsignup] = useState();
    const [invalid, setvalid] = useState("")
const [color,setcolor] = useState("")

const variants = {

open:{
    opacity:1,
    y:-50,
    transition:{
        duration:.8
    }
}

}

    const handler = (e)=>{

        setsignup((prev)=>{
     
    return  {
        ...prev,
        [e.target.name]: e.target.value
    }
        })
    }

    const signer = async (e)=>{
        e.preventDefault();
 
        try{

await axios.post(`http://localhost:4000/getdata`,signup).then(data=>{


if(data.data.length>0){

    setcolor("red");
setvalid("User already exist")
}
else{
    axios.post("http://localhost:4000/additem", signup).then(data=>{

    if(data.statusText=="OK"){
        setcolor("green");
        setvalid("Congratulations! you have resisterd  successfully")
    }
    else{
    
        alert("somthing went wrong please try again")
    }


    })

}

})
      
        }
        catch(err){

            alert("internal error occuring")
        }
    





    }


    return <>
    
    <motion.div className="boxer">

    <motion.div className="login-page" variants={variants} initial={{opacity:0}} whileInView={"open"} >
    <motion.center><h1 style={{color:color, fontWeight:400}}>{invalid}</h1></motion.center> 
   
   <motion.div className="form">
   <h1 className="login_h">Sign up</h1>
 

     <form class="login-form">
     <input type="text" placeholder="id" onChange={handler} name="id"/>
     <input type="text" placeholder="name" onChange={handler} name="name"/>
       <input type="text" placeholder="email" onChange={handler} name="email"/>
       <input type="password" placeholder="password" onChange={handler} name="pass"/>
       <button onClick={signer}>Sign up</button>
       <p className="message">Allready have an account <Link to="/">Sign in</Link> </p>
     </form>
   </motion.div>
 </motion.div>




    

</motion.div>
    </>
}


export default Resister