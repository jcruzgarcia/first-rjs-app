import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import {NotificationProvider} from './notification/Notification'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'
function App() {
  
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
            <BrowserRouter>
            <Navbar /> 
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 not found</h1>}/>
              </Routes>
            </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
