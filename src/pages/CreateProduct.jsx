import { useState } from "react";

const CreateProduct = () => {
  const [newproduct,setNewProduct]=useState({
    name: "",
    details:
      "",
    productImage: "uploads/item1.png",
    price:0, 
    old_price: 0,
  });

const handleChange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setNewProduct({...newproduct,[name]:value})
}


const converImgToBase64=(e)=>{
  const file =e.target.files[0]
const reader=new FileReader();
reader.onloadend=()=>{
  const base64String=reader.result;
  setNewProduct({...newproduct, productImage:base64String});
}
reader.readAsDataURL(file);
}
console.log(newproduct);

  return (
    <section className="createProduct">
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
                {/* <div className="previewImage">
                  <img src={preview} alt="uploaded-img" />
                </div> */}
              </div>
              <div className="btn">
                <button>
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
