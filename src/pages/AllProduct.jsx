// Icons
import { FaTrash, FaEdit } from "react-icons/fa";

// Router
import { Link } from "react-router-dom";

const AllProduct = () => {
  return (
    <section className="allproducts">
      {/* {loading && <Loader />} */}
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
              <tr>
                <td>1</td>
                <td className="ProductImg">
                  <img src="" alt="ProductImg" />
                </td>
                <td>Name</td>
                <td>Details</td>
                <td>$0.00</td>
                <td className="edit">
                  <Link to="/edit-product">
                    <FaEdit />
                  </Link>
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
