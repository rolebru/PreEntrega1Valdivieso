import Cartwidget from "./Cartwidget/Cartwidget"

const Navbar = () => {
    return (
        <nav>

            <h3>mitennis</h3>
            <div>
                <button>Raquetas</button>
                <button>Pelotas</button>
                <button>Cuerdas</button>
                <button>Indumentaria</button>
            </div>
            <Cartwidget />
        </nav>
    )



}

export default Navbar