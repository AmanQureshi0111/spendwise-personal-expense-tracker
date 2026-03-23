import React,{useState} from 'react'
import {Route,Routes,useNavigate} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  const [user,setUser] = useState(null);
  const [token,setToken] = useState(null);
  const navigate = useNavigate();  

  const clearAuth = () => {
    try{
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    }catch(err){
      console.error("clearAuth error:", err);
    }
  }
  const handleLogout = () =>{
    clearAuth();
    navigate("/Login");
  }
  return (
    <Routes>
      <Route element={<Layout user={user} onLogout={handleLogout} />}>
        <Route path="/" element={<Dashboard/>} />
      </Route>
    </Routes>
  )
}

export default App;
