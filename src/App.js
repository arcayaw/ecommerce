import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-main-bg'>

        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/category/:categoria" element={<ItemListContainer />} />
          <Route path='id/:itemId' element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
        {/* <ItemListContainer />
        <ItemDetailContainer /> */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
