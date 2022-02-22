import './navBar.css';

const Navbar = () =>{
    return(
        <nav clasName="nav">
        <ul className="navBar">
        <li><img src="" alt="imagenLogo"/></li>
        <li> <a className="navBarItem" href="#">Componentes</a></li>
        <li> <a className="navBarItem" href="#">PC Gammers</a></li>
        <li> <a className="navBarItem" href="#">Perifericos</a></li>
        <li> <a className="navBarItem" href="#">Accesorios</a></li>
        </ul>
        </nav>
    )
}
export default Navbar;