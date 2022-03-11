import './App.css';
import CartWidget from './component/cartWidget/cartWidget';
import ItemDetailContainer from './component/componenteContenedor/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './component/componenteContenedor/itemListContainer/itemListContainer';
import Navbar from './component/navBar/navBar';

function App() {
  return (
    <div className="App">
    <Navbar> 
    <CartWidget/>
    </Navbar> 
    <ItemListContainer greeting={"hola soy el contenedor principal"}/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
