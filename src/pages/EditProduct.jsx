import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
const EditProduct = () => {
  const {productId}=useParams();
  const [loading,setLoading]=useState(false);
  const [updatedCart,setUpdatedCart]=useState({
    name: "",
    details:
      "",
    productImage: "",
    price:0, 
    old_price: 0,
  });
const [image,setImage]=useState(null);

const getCartDetails=async ()=>{
  setLoading(true);
  try {
    const res=await axios.get(`${process.env.REACT_APP_SINGLE_PRODUCT}/${productId}`).then(res=>{
      return res.data;

    })
 setUpdatedCart(res)
  } catch (error) {
    console.log(error);
  }finally{
    setLoading(false);
  }
}


useEffect(()=>{
  getCartDetails();
},[])





const handleChange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setUpdatedCart({...updatedCart,[name]:value})
}


const converImgToBase64=(e)=>{
  const file =e.target.files[0];
  setImage(file);
const reader=new FileReader();
reader.onloadend=()=>{
  const base64String=reader.result;
  setUpdatedCart({...updatedCart, productImage:base64String});
}
reader.readAsDataURL(file);
}


const createNewProduct=async(e)=>{
  e.preventDefault();
  setLoading(true);
  try {
    const body=new FormData();
    body.append('name',updatedCart.name);
    body.append('details',updatedCart.details);
    body.append('productImage',image);
    body.append('price',updatedCart.price);
    body.append('old_price',updatedCart.old_price);
    const res=axios.put(`${process.env.REACT_APP_UPDATE_PRODUCT}/${productId}`,body).then(res=>{
      console.log(res.data);
    })
  } catch (error) {
    console.log(error);
  }finally{
    setLoading(false);
  }
}




  return (
    <section className="editProduct">
      {loading && <Loader/>}
      <div className="container">
        <div className="row">
          <h2 className="title">Edit Product`s data</h2>
          <div className="login-box">
          <form>
              <div className="user-box">
                <input
                  // className={errors.name && "error"}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={updatedCart.name}
                />
                <label>Product Name</label>
              </div>
              {/* {errors.name && <span>{errors.name.message}</span>} */}
              <div className="user-box">
                <input type="text" name="details"   
                onChange={handleChange}
                  value={updatedCart.details}
                   />
                <label>Product Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" onChange={handleChange}  value={updatedCart.price}/>
                <label>Product Price</label>
              </div>
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" onChange={converImgToBase64}/>
               {
               updatedCart.productImage !== " " && (<div className="previewImage">
                <img src={image?updatedCart.productImage : `${process.env.REACT_APP_URL}/${updatedCart.productImage}`} alt="uploaded-img" />
              </div>)
               } 
              </div>
              <div className="btn">
                <button onClick={createNewProduct}>
                 Update Product
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProduct;
