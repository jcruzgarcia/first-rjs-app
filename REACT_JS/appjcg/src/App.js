import './App.css';
// import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting = {'Hola, bienvenido a la app'} />
        {/* <Button label={'Comprar'} background ='#0040ff' action={() => console.log('comprar')}/>
        <Button label={'Vender'} background ='#867979' action={() => console.log('vender')}/> */}
    </div>
  );
}

export default App;
