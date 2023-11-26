import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import "./Reg.css";
// import "./signup.css";
function Signup(){
    const navigate = useNavigate()

    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')
    const[mobile,setMobile] = useState('')
    const[email,setEmail] = useState('')
    const[userlocation,setLocation] = useState('')

    const handleApi = () => {
        console.log(username,password,mobile,email,userlocation)
        const url = "http://127.0.0.1:3001/signup"
        const data = {username,password,mobile,email,userlocation};
        axios.post(url,data)
        .then((res)=>{
            alert(res.data.message);
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="content">
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">CampusMarketplace</h1>
          <p>Connect, transact, and explore a world of possibilities – where buying and selling meet seamless connections.</p>
        </div>
        <form>
        <input className='form-control' placeholder="Username" type = "text" value={username} onChange={(e) => {setUserName(e.target.value);}} /> 
        <input className='form-control' placeholder="Password" type="text" value={password} onChange={(e) =>{setPassword(e.target.value);}}/>
        <input className='form-control' placeholder="Mobile number" type="text" value={mobile} onChange={(e) =>{setMobile(e.target.value);}}/>
        <input className='form-control' placeholder="Email address" type="text" value={email} onChange={(e) =>{setEmail(e.target.value);}}/> 
        <input className='form-control' placeholder="Location" type="text" value={userlocation} onChange={(e) =>{setLocation(e.target.value);}}/><br/> 
        
        <button className="login" type="button" onClick={handleApi}>Create New Account</button>
          <hr />
          <button className="create-account" type="button" onClick={() => navigate('/login')}>Login</button>
        </form>
      </div>
    </div>
    )
}

export default Signup;