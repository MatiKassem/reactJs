import { NavLink } from 'react-router-dom';
import './navBar.css';

const Navbar = ({children}) =>{
    return(
        <nav clasName="nav">
        <ul className="navBar">
        <li><img className='logo' src="https://www.zarla.com/images/zarla-nubedad-1x1-2400x2400-20220211-bbxbbf7p64wvc7fc6t34.png?crop=1:1,smart&width=250&dpr=2" alt="imagenLogo"/></li>
        <li> <NavLink to="categoria/monitores">Monitores</NavLink></li>
        <li> <NavLink to="categoria/perifericos">perifericos</NavLink></li>
        <li> <NavLink to="categoria/audio">Audio</NavLink></li>
        <li> <NavLink to="/">Todos los productos</NavLink></li>
        <li> <NavLink to="cart"> {children} </NavLink> </li>
        </ul>
        </nav>
    )
}
export default Navbar;