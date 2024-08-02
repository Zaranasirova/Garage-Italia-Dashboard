import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

// Icons
import { FaTrash, FaEdit } from "react-icons/fa";

// Router
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios
        .get(process.env.REACT_APP_ALL_PRODUCTS)
        .then((res) => {
          setAllProduct(res.data);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(()=>{
    getAllProducts();
  },[])
  return (
    <section className="allproducts">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <h2 className="title">All Product List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Details</th>
                <th>Product Price</th>
                <th>Edit Product</th>
              </tr>
            </thead>
            <tbody>
              {allProduct.map((item,index) => (
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td className="productImg">
                    <img  src={`${process.env.REACT_APP_URL}/${item.productImage}`} alt="ProductImg" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>€{item.price}</td>
                  <td className="edit">
                    <Link to="/edit-product">
                      <FaEdit />
                    </Link>
                    <FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
