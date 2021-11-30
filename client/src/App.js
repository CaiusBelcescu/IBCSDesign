import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import AdminLogin from "./pages/admin_pages/login/AdminLogin";
import AdminUser from "./pages/admin_pages/user/AdminUser";
import AdminUserList from "./pages/admin_pages/userList/AdminUserList";
import AdminNewUser from "./pages/admin_pages/newUser/AdminNewUser";
import AdminProduct from "./pages/admin_pages/product/AdminProduct";
import AdminProductList from "./pages/admin_pages/productList/AdminProductList";
import AdminNewProduct from "./pages/admin_pages/newProduct/AdminNewProduct";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin_pages/home/AdminHome";
import Sidebar from "./components/admincomponents/sidebar/Sidebar";
import Topbar from "./components/admincomponents/topbar/Topbar";
//{user ? <Redirect to="/" /> : <Register />}
//{user ? <Redirect to="/" /> : <Login />}
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin/login">
          <AdminLogin />
        </Route>
        {admin &&(
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/admin">
              <AdminHome />
            </Route>
            <Route path="/admin/users">
              <AdminUserList />
            </Route>
            <Route path="/admin/user/:userId">
              <AdminUser />
            </Route>
            <Route path="/admin/newUser">
              <AdminNewUser />
            </Route>
            <Route path="/admin/products">
              <AdminProductList />
            </Route>
            <Route path="/admin/product/:productId">
              <AdminProduct />
            </Route>
            <Route path="/admin/newproduct">
              <AdminNewProduct />
            </Route>
          </div>
        </>
        )}
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
