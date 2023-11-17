import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup(){
    const navigate = useNavigate()

    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')

    const handleApi = () => {
        console.log(username,password)
        const url = "http://127.0.0.1:3001/signup"
        const data = {username,password};
        axios.post(url,data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <h1>SIGNUP PAGE</h1>
            USERNAME -
            <input type = "text" value={username} onChange={(e) => {
                setUserName(e.target.value);
            }} /> <br/><br/>
            PASSWORD -
            <input type="text" value={password} onChange={(e) =>{
                setPassword(e.target.value);
            }}/> <br/><br/>
            
            <button onClick={handleApi}>SUBMIT</button>

            <Link to ="/login">Login</Link>
        </div>
    )
}

export default Signup;