import { useNavigate } from "react-router-dom";
import './header.css'; 
import { FaPlus } from "react-icons/fa6";
import { FaBuildingWheat } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from "react-router-dom";


function Header(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Atharv");
  const [showOver, setshowOver] = useState(false)

  const handlelogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('token');
    navigate('/login'); 
  }
const handlelogin = () => {
  navigate('/login'); 
}

const addProduct = () => {
  navigate("/addproduct");
};

const handleLogin = () => {
  navigate("/login");
};
const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: 'green', // Set color to green
};

// let locations = [
//   {"Hostel": "Block A"},
//   {"Hostel": "Block B"},
//   {"Hostel": "Block C"},
//   {"Hostel": "Block D"},
//   {"Hostel": "Block E"},
//   {"Hostel": "Block F"},
//   {"Hostel": "Block G"},
//   {"Hostel": "Block H"},
//   {"Hostel": "Block I"},
//   {"Hostel": "Block J"},
//   {"Hostel": "Wing 1"},
//   {"Hostel": "Wing 2"},
//   {"Hostel": "Wing 3"},
//   {"Hostel": "Wing 4"},
//   {"Hostel": "Wing 5"},
// ]

  return(

    <div className="header-container d-flex justify-content-between">
    <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#f0f0f0',width:'100%' ,color:'#002f34'  }}>
        <div class="container-fluid">
        <a class="navbar-brand" style={{color:'#002f34'}} onClick={()=>navigate('/home')} href="#"><span style={{fontSize:'30px'}}>&nbsp;&nbsp;<FaBuildingWheat /></span>Campus Marketplace</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <select value='' onChange={(e) => {
          localStorage.setItem('userlocation', e.target.value);
        }}>
          {locations.map((item, index) => (
            <option key={index} value={`${item.Hostel}`}>
              {item.Hostel}
            </option>
          ))}
        </select> */}

        <a class="navbar-brand" style={{color:'#002f34', fontSize:'20px', fontWeight:'16px'}} onClick={()=>navigate('/home')} href="#">&nbsp;&nbsp;Home</a>
        <a class="navbar-brand" style={{color:'#002f34', fontSize:'20px', fontWeight:'16px'}} onClick={()=>navigate('/likedproducts')} href="#">&nbsp;&nbsp;Favourite</a>
        <a class="navbar-brand" style={{color:'#002f34', fontSize:'20px', fontWeight:'16px'}} onClick={()=>navigate('/myproducts')} href="#">&nbsp;&nbsp;My Products</a>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <div class="d-flex" onSubmit={(e) => e.preventDefault()}>
        <input class="" className="search" type="search" placeholder="Search" aria-label="Search" value={props && props.search} onChange={(e)=>props.handleSearch && props.handleSearch(e.target.value)}  />
        <button class="btn btn-outline-success" className="search-btn" onClick={()=> props.handleClick && props.handleClick()}>Search</button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
            {!localStorage.getItem("token") ? (
        <button className="sell-btn" onClick={handleLogin} style={{ marginRight: "15px", marginLeft: "15px",width:'200px' }}>
          Login to Add Product
        </button>
      ) : (
        <button
          className="sell"
          onClick={addProduct}
          style={{ marginRight: "15px", marginLeft: "15px",width:'100px' }}
        >
          <span className="plus-icon" style={{marginBottom:'200px'}}><FaPlus /></span>&nbsp;&nbsp;Sell
        </button>
      )}
              
            </a>
          </li>
        </ul>
    </div>

    <div>







                <div
                    onClick={() => {
                        setshowOver(!showOver)
                    }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: '#002f34',
                      width: '40px',
                      height: '40px',
                      color: '#fff',
                      fontSize: '14px',
                      borderRadius: '50%',
                    }}
                  >
                    {/* {username && username.charAt(0)}
                     */}
                     <img style={{width:'40px', height:'40px', borderRadius: '50%'}} src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"/>
                  </div>

                {showOver && <div style={{
                    minHeight: '100px',
                    width: '200px',
                    background: '#eee',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    zIndex: 1,
                    marginTop: '50px',
                    marginRight: '50px',
                    color: 'red',
                    fontSize: '14px',
                    background: '#002f34',
                    borderRadius: '7px'
                }}>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/myprofile">
                                <button className="logout-btn"> PROFILE  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/addproduct">
                                <button className="logout-btn">ADD PRODUCT  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/likedproducts">
                                <button className="logout-btn"> FAVOURITES  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/myproducts">
                                <button className="logout-btn">MY PRODUCTS  </button>
                            </Link>}
                    </div>
                    <div>
                    {!localStorage.getItem('token') ?
                            <button className='logout-btn' onClick={()=>navigate('/login')}> LOGIN </button> :
                            <button className='logout-btn' onClick={handlelogout}> LOGOUT </button>}
                    </div>



                </div>}
            </div>

        
</div>
</div>
</nav>
</div>
    )
}
export default Header;