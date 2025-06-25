import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './components/Cart';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import ProfilePage from './pages/ProfilePage';
import './App.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
