import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* signUp and login  */}
        <Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
