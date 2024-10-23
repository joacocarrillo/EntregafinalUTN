import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Registrer';
import ProductDetail from '../components/ProductDetail';
import '../components/Estilos.css';

const App = () => {
  return (
    <Router>
      <nav className='navbar'>
        <Link to="/" className='nav-menu'>Inicio</Link>
        <Link to="/login" className='nav-menu'>Iniciar Sesión</Link>
        <Link to="/register" className='nav-menu'>Registrar</Link>
      </nav>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
