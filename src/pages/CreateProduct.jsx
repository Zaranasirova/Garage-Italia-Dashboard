const CreateProduct = () => {
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
                />
                <label>Product Name</label>
              </div>
              {/* {errors.name && <span>{errors.name.message}</span>} */}
              <div className="user-box">
                <input type="text" name="details" />
                <label>Product Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" />
                <label>Product Price</label>
              </div>
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" />
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
