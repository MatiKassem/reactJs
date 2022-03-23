import { BrowserRouter , Navigate, Route, Routes } from "react-router-dom"
import './App.css';
import CartWidget from './component/cartWidget/cartWidget';
import ItemDetailContainer from './component/componenteContenedor/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './component/componenteContenedor/itemListContainer/itemListContainer';
import Navbar from './component/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from "./component/context/cartContext";
import Cart from "./component/cartWidget/cart";


function App() {
  return (
      <CartContextProvider>
       <BrowserRouter>
     <div className="App">
       <Navbar> 
       <CartWidget/>
       </Navbar>   
      <Routes>
         <Route path="/cart" element={<Cart/>}/>
        <Route path="/detalle/:detalleId" element={ <ItemDetailContainer/> }/> 
        <Route path="/" element={<ItemListContainer greeting={"hola soy el contenedor principal"}/> }/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={"hola soy el contenedor principal"}/> }/>
        <Route path="/*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
