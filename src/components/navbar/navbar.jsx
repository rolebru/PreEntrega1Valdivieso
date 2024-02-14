import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/Cartwidget"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="NavBar">
            <Link to= '/'>
                <h3>Ecommerce</h3>
            </Link>

            <h3 style = { {color: 'green'} }>mi tennis</h3>
            <h4>La tienda numero 1</h4>
            <div className="Categorias">
                <NavLink to={'/category/raquetas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={'/category/Grips'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={'/category/Indumentaria'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
            </div>
            <CartWidget />
            
        </nav>
    )



}

export default Navbar