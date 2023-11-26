// ProductDetail.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ProductCarousel from "./ProductCarousel"; // Import the ProductCarousel component

function ProductDetail() {
  const [product, setProduct] = useState();
  const [user, setUser] = useState();

  const p = useParams();
  console.log(p.productId);

  useEffect(() => {
    const url = "http://localhost:3001/getproduct/" + p.productId;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (res.data.product) {
          setProduct(res.data.product);
        }
      })
      .catch((err) => {
        alert("Server Err.");
      });
  }, []);

  const handleContact = (addedBy) => {
    console.log('id', addedBy);
    const url = "http://localhost:3001/getuser/" + addedBy;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (res.data.user) {
          setUser(res.data.user);
        }
      })
      .catch((err) => {
        alert("Server Err.");
      });
  };

  return (
    <div>
      <Header />
      <h3 style={{ margin: '2%' }}>Product Details</h3>
      <div>
        {product && (
          <div className="d-flex justify-content-space-around flex-wrap" style={{ margin: '2%' }}>
            <div>
              <ProductCarousel images={[product.pimage, product.pimage2]} />
              <h6> Product Details : </h6>
              {product.pdesc}
            </div>
            <div style={{ marginLeft: '10%' }}>
              <h3 className="m-2 price-text"> Rs. {product.price} /- </h3>
              <p className="m-2"> {product.pname} | {product.category} </p>
              <p className="m-2 text-success"> {product.pdesc} </p>
              {product.addedBy && (
                <button onClick={() => handleContact(product.addedBy)}>
                  SHOW CONTACT DETAILS
                </button>
              )}
              {user && user.username && <h4>{user.username}</h4>}
              {user && user.mobile && <h3>{user.mobile}</h3>}
              {user && user.email && <h6>{user.email}</h6>}
              {user && user.userlocation && <h6>{user.userlocation}</h6>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
