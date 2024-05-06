import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Denied } from './Pages/Denied';
import NotFound from './Pages/NotFound';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/" element={<Home />} />

        {/* signUp and login  */}
        <Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* user data */}
        <Route>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/editprofile" element={<EditProfile />} />
        </Route>

        {/* page not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
