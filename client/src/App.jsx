import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Denied } from './Pages/Denied';
import NotFound from './Pages/NotFound';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditProfile';
import ChangePassword from './Pages/Password/ChangePassword';
import RequireAuth from './Components/Auth/RequireAuth';
import NotRequireAuth from './Components/Auth/NotRequireAuth';
import ProductDetails from './Pages/Product/ProductDetails';
import CartDetails from './Pages/Cart/CartDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/" element={<Home />} />

        {/* signUp and login  */}
        {/* TODO:fix NotRequireAuth to add product */}
        <Route element={<NotRequireAuth />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/product/:productId" element={<ProductDetails />} />

        {/* user data */}
        <Route element={<RequireAuth allowedRoles={['USER', 'ADMIN']} />}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/editprofile" element={<EditProfile />} />
          <Route path="/auth/change-password" element={<ChangePassword />} />
          <Route path="/product/cart" element={<CartDetails />} />
        </Route>

        {/* page not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
