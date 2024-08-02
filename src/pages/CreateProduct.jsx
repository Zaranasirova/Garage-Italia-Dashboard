import { useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
const CreateProduct = () => {
  const [loading,setLoading]=useState(false);
  const [newproduct,setNewProduct]=useState({
    name: "",
    details:
      "",
    productImage: "uploads/item1.png",
    price:0, 
    old_price: 0,
  });
const [image,setImage]=useState(null)
const handleChange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setNewProduct({...newproduct,[name]:value})
}


const converImgToBase64=(e)=>{
  const file =e.target.files[0];
  setImage(file);
const reader=new FileReader();
reader.onloadend=()=>{
  const base64String=reader.result;
  setNewProduct({...newproduct, productImage:base64String});
}
reader.readAsDataURL(file);
}


const createNewProduct=async(e)=>{
  e.preventDefault();
  setLoading(true);
  try {
    const body=new FormData();
    body.append('name',newproduct.name);
    body.append('details',newproduct.details);
    body.append('productImage',image);
    body.append('price',newproduct.price);
    body.append('old_price',newproduct.old_price);
    const res=axios.post(process.env.REACT_APP_CREATE_PRODUCT,body).then(res=>{
      console.log(res.data);
    })
  } catch (error) {
    console.log(error);
  }finally{
    setLoading(false);
  }
}

  return (
    <section className="createProduct">
      {loading && <Loader/>}
      <div className="container">
        <div className="row">
          <h2 className="title">Add new Product</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input
                  // className={errors.name && "error"}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={newproduct.name}
                />
                <label>Product Name</label>
              </div>
              {/* {errors.name && <span>{errors.name.message}</span>} */}
              <div className="user-box">
                <input type="text" name="details"   
                onChange={handleChange}
                  value={newproduct.details}
                   />
                <label>Product Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" onChange={handleChange}  value={newproduct.price}/>
                <label>Product Price</label>
              </div>
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" onChange={converImgToBase64}/>
               {
               newproduct.productImage !== " " && (<div className="previewImage">
                <img src={newproduct.productImage} alt="uploaded-img" />
              </div>)
               } 
              </div>
              <div className="btn">
                <button onClick={createNewProduct}>
                  Create Product
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

export default CreateProduct;
