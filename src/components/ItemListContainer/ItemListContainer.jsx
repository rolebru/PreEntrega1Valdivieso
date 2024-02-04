import { useState, useEffect } from "react"
import { getProducts } from "./asyncMock"
import '../styles/asyncMock.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(()  => {
        getProducts()
            .then(response => {
                console.log(response)
                setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])
    
    return (

        <div>
            <h1 style = {{color: 'green'}}>{greeting}
            </h1>

            <div className="flex">
            {products.map(p => {
                return (
                    <div className="flex">
                        <span>{p.name}</span>
                        <img width="300px" src={p.img} />
                    </div>
                )
            })}
            </div>
        </div>
    )


}


export default ItemListContainer