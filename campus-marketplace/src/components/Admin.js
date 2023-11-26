import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./Home.css";
import { FaHeart } from "react-icons/fa";
  
function Admin(){
    
const navigate = useNavigate();
const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [filteredProducts, setFilteredProducts] = useState([]);
const [issearch ,setissearch] = useState(false);
useEffect(() => {
  const url = "http://localhost:3001/getproducts";
  axios
    .get(url)
    .then((res) => {
      if (res.data.products) {
        setProducts(res.data.products);
      }
    })
    .catch((err) => {
      alert("Server Err.");
    });
}, []);

const handleSearch = (value) => {
  setSearch(value);
};

const handleClick = () => {
  //Searching on backend
  
  const url = "http://localhost:3001/search?search="+ search;
  axios.get(url)
    .then((res) => {
      // console.log(res.data.product);
      setFilteredProducts(res.data.product);
      setissearch(true);
    })
    .catch((err)=>{
      alert('Server Err fronted')
    })
  };

  const handleLike = (productId) => {
    let userId = localStorage.getItem('userId');
    console.log('userId',"productId", userId,productId);
    if (!userId){
      alert("Please Login")
      return;
    }
    const url = "http://localhost:3001/likeProducts";
    const data = { userId,productId };
    axios.post(url,data)
      .then((res) => {
        console.log(res);
      })
  }

  // Check if filteredProducts is an array and has a length property
const displayProducts = Array.isArray(filteredProducts) && filteredProducts.length > 0 ? filteredProducts : products;


  const handleProduct = (id) => {
    navigate('/product/'+id)
  }

  const handleApproval = (productId, status) => {
    // Update the product status on the backend
    const url = `http://localhost:3001/admin/approve/${productId}`;
    axios
      .put(url, { status })
      .then((response) => {
        // Handle success, update your UI or state accordingly
        console.log(response.data);
        // Assuming you want to refresh the product list after approval/rejection
        const updatedProducts = products.map((product) =>
          product._id === productId ? { ...product, status } : product
        );
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error("Error approving/rejecting product:", error);
        // Handle error, display a message to the user, etc.
      });
  };


    return(
        <div>
        <Header search={search} handleSearch={handleSearch} handleClick={handleClick}/>
        
        <div className="Products">
            <h2 style={{ marginLeft: "4px" }}>PRODUCT LIST</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((item, index) => (
                <div key={index._id} onClick={() => handleProduct(item._id)} className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                    <div className="icon-con" onClick={() => handleLike(item._id)}>
                        <FaHeart className="icons" />
                    </div>
                    <img src={`http://localhost:3001/${item.pimage}`} className="card-img-top" alt={item.pname} />
                    <div className="card-body">
                        <h5 className="card-title">{item.pname} | {item.category}</h5>
                        <p className="card-text" style={{ color: 'green' }}> {item.pdesc}</p>
                        <h5 className="card-title"> Rs. {item.price} /-</h5>
                        {item.status === 'pending' && (
                        <div>
                            <button type="button" class="btn btn-success" style={{backgroundColor:'green'}} onClick={() => handleApproval(item._id, 'approved')}>Approve</button>&nbsp;&nbsp;&nbsp; 
                            <button type="button" class="btn btn-danger" onClick={() => handleApproval(item._id, 'rejected')}>Reject</button>
                        </div>
                        )}
                        {item.status !== 'pending' && (
                        <p>Status: {item.status}</p>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}
export default Admin;