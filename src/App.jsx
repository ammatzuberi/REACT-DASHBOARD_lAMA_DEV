import React from "react";

import Topbar from "./Components/TopBar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { Switch } from "@mui/material";
import Userlist from "./Pages/UserList/Userlist";
import User from "./Pages/user/User";
import Newuser from "./Pages/NewUser/Newuser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import Newproduct from "./Pages/newProduct/Newproduct";

function App() {
  return (
    <div className="app">
   
      <Topbar />
      <div className="container">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/NewUser" element={<Newuser />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/Newproducts" element={<Newproduct />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
