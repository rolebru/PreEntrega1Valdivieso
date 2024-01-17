import CartWidget from "../CartWidget/Cartwidget"


const Navbar = () => {
    return (
        <nav>

            <h3 style = { {color: 'green'} }>mi tennis</h3>
            <h4>La tienda numero 1</h4>
            <div>
                <button>Raquetas</button>
                <button>Pelotas</button>
                <button>Cuerdas</button>
                <button>Indumentaria</button>
                
            </div>
            <CartWidget />
            
        </nav>
    )



}

export default Navbar