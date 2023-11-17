import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function login(){
    const navigate = useNavigate()

    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')

    const handleApi = () => {
        console.log({username,password});
        
        const url = "http://127.0.0.1:3001/login"
        const data = {username,password};
        axios.post(url,data)
    
        .then((res) => {
            console.log(res.data)
            if(res.data.message){
                if(res.data.token){
                    localStorage.setItem('token',res.data.token)
                    navigate('/home')
                }
                alert(res.data.message);
            } 
        })
        .catch((err) => {
            console.log(err,20)
            alert("Server Error")
        })
    }
    
        return(
            <div>
                <h1>LOGIN PAGE</h1>
                USERNAME -
                <input type = "text" value={username} onChange={(e) => {
                    setUserName(e.target.value);
                }} /> <br/><br/>
                PASSWORD -
                <input type="text" value={password} onChange={(e) =>{
                    setPassword(e.target.value);
                }}/> <br/><br/>
                
                <button onClick={handleApi}>SUBMIT</button>
    
                <Link to ="/signup">Signup</Link>
            </div>
        )
    }
    

export default login;