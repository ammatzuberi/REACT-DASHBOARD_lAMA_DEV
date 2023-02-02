
import React from "react";
import Charts from "../../Components/Chart/Charts";
import "./product.css";
import { productData } from "../../dummyData";
import { Publish, PublishOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/Newproducts" style={{textDecoration:"none"}}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Charts 
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Air Pods</span>
          </div>
          <div className="productInfoBottom">
            <div className="prodductInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="prodductInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="prodductInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="prodductInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="Yes">Yes</option>
              <option value="No">NO</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="Yes">Yes</option>
              <option value="No">NO</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
