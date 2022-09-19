import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import CartContextProvider from "./context/CartContext.jsx"
// import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className='min-h-screen bg-main-bg'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoria" element={<ItemListContainer />} />
            <Route path='id/:itemId' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
