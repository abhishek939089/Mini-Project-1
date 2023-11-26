import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./Home.css";
import { FaHeart } from "react-icons/fa";


// ... (existing imports)

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [issearch, setissearch] = useState(false);

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
    const url = "http://localhost:3001/search?search=" + search;
    axios
      .get(url)
      .then((res) => {
        setFilteredProducts(res.data.product);
        setissearch(true);
      })
      .catch(() => {
        alert("Server Err fronted");
      });
  };

  const handleLike = (productId) => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please Login");
      return;
    }
    const url = "http://localhost:3001/likeProducts";
    const data = { userId, productId };
    axios.post(url, data).then((res) => {
      console.log(res);
    });
  };

  const handleProduct = (id) => {
    navigate("/product/" + id);
  };

  const displayProducts = issearch
    ? (filteredProducts || []).filter((item) => item.status === "approved")
    : products.filter((item) => item.status === "approved");

  return (
    <div>
      <Header search={search} handleSearch={handleSearch} handleClick={handleClick} />

      <div className="Products">
        <h2 style={{ marginLeft: "4px" }}>PRODUCT LIST</h2>
        {issearch && filteredProducts && filteredProducts.length === 0 && <h5>NO RESULT FOUND</h5>}

        {issearch && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {filteredProducts &&
              filteredProducts.length > 0 &&
              displayProducts.map((item, index) => (
                <div key={index._id} onClick={() => handleProduct(item._id)} className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card">
                      <div className="icon-con" onClick={() => handleLike(item._id)}>
                        <FaHeart className="icons" />
                      </div>
                      <img src={`http://localhost:3001/${item.pimage}`} className="card-img-top" alt={item.pname} />
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.pname} | {item.category}
                        </h5>
                        <p className="card-text" style={{ color: "green" }}>
                          {" "}
                          {item.pdesc}
                        </p>
                        <h5 className="card-title"> Rs. {item.price} /-</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {!issearch && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {displayProducts.map((item, index) => (
              <div key={index._id} onClick={() => handleProduct(item._id)} className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card">
                    <div className="icon-con" onClick={() => handleLike(item._id)}>
                      <FaHeart className="icons" />
                    </div>
                    <img src={`http://localhost:3001/${item.pimage}`} className="card-img-top" alt={item.pname} />
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.pname} | {item.category}
                      </h5>
                      <p className="card-text" style={{ color: "green" }}>
                        {" "}
                        {item.pdesc}
                      </p>
                      <h5 className="card-title"> Rs. {item.price} /-</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
