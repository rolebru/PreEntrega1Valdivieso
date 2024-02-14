import '../styles/ItemsCount.css';
import ItemsCount from '../ItemsCount'

const ItemDetail = ({id, name, img, price, stock}) => {
    return (

    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="Itemimg" />
        </picture>
        <section>
            <p className="info">
                Precio: ${price}
            </p>
            <p className="info">
                stock disponible: {stock}
            </p>
        </section>
        <footer className="ItemFooter">
            <ItemsCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada')}/>
            <link to={`/item/${id}`} className='Option'>Ver detalle</link>
        </footer>
    </article>
    )
}

export default ItemDetail