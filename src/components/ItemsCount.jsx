import '../components/styles/ItemsCount.css';
import { useState } from "react"


const ItemsCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-
                </button>
                <h4 className="numero">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemsCount