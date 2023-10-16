
import './index.css';
import Dasboard from './component/Dasboard';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './component/Signup';
function App() {
  return (
   <>
   <div className="container">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dasboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
    
   </div>
   </>
  );
}

export default App;
