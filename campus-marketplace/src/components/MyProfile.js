import React from "react";
import "./MyProfile.css";
import Header from "./Header";
import { useState ,useEffect } from "react";
import axios from "axios";

function MyProfile(){
    const [user, setuser] = useState({})

    useEffect(() => {
        let url = 'http://localhost:3001/myprofile/' + localStorage.getItem('userId');
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                if (res.data.user) {
                    setuser(res.data.user);
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
    }, [])
    return(
        <div>
            <Header/>
            <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
                <div className="container py-5 " style={{ width:'100%' }}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col mb-2 mb-lg-0">
                        <div className="card mb-3" style={{ borderRadius: '.5rem',width:'700px' ,marginLeft:'25%',marginRight:'25%'}}>
                        <div className="row g-0" >
                            <div className="col-md-4 gradient-custom text-center text-white"
                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                            <img style={{width:'200px', height:'200px',  borderRadius:'50%' }} src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"
                                alt="Avatar" className="img-fluid my-5"  />
                            <h5>{user.username}</h5>
                            
                            <i className="far fa-edit mb-5"></i>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body p-5"  style={{color:'black'}}>
                                <h6>Information</h6>
                                <hr className="mt-0 mb-4" />
                                <div className="row pt-1">
                                <div className="col-6 mb-3">
                                    <h6>Email</h6>
                                    <p className="text-muted">{user.email}</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <h6>Phone</h6>
                                    <p className="text-muted">{user.mobile}</p>
                                </div>
                                </div>
                                <h6>Projects</h6>
                                <hr className="mt-0 mb-4" />
                                <div className="row pt-1">
                                <div className="col-6 mb-3">
                                    <h6>Location</h6>
                                    <p className="text-muted">{user.userlocation}</p>
                                </div>
                                
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    )
}
export default MyProfile;