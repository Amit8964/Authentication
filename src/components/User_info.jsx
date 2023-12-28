
import "../style.css"



const User_info = ()=>{





    return<>
    <div className="User_info">

<h1>Welcome : {window.sessionStorage.getItem("name")}</h1>

    </div>
    
    </>
}


export default User_info