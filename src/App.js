
import './App.css';
import './components/Topcard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/screens/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './components/screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Topcard from './components/Topcard';
import Products from './components/screens/Products';
import CardNew from './components/CardNew';
import CardData from './components/CardsData';
import CardsDetails from './components/CardsDetails';
import Contactus from './components/screens/Contactus';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginApp from './components/LoginApp';
function App() {
  const location = useLocation();

 
  const isLoginPage = location.pathname === '/';
  
  return (
    <div className="app-container">
      {isLoginPage ? null :<Topcard />}
       {isLoginPage ? null : <Navbar />}
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<LoginApp />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<CardNew />} />
            <Route exact path="/cart/:id" element={<CardsDetails/>} />
            </Routes>
    </div>
  );
}

export default App;
