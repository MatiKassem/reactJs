import './App.css';
import CartWidget from './component/cartWidget/cartWidget';
import ItemListContainer from './component/componenteContenedor/itemListContainer';
import Navbar from './component/navBar/navBar';

function App() {
  return (
    <div className="App">
    <Navbar> 
    <CartWidget/>
    </Navbar> 
    <ItemListContainer greeting={"hola soy el contenedor principal"}/>
    </div>
  );
}

export default App;
