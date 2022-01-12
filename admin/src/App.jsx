import { Route, Routes, Navigate } from "react-router-dom";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/newProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/authContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          {user && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/newuser" element={<NewUser />} />
              <Route path="/movies" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
