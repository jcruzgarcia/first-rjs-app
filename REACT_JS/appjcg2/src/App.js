import './App.css';
// import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <BrowserRouter>

       <Navbar /> 

        <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
