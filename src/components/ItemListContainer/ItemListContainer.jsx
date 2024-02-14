import { useState, useEffect } from "react"
import { getProductById, getProducts } from "./asyncMock"
import '../styles/asyncMock.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()


    useEffect(()  => {
        const asyncfunc = categoryId ? getProductById : getProducts
        asyncfunc(categoryId)
            .then(response => {
                setProducts(response)
            })
        
        
            .catch(error => {
                console.error(error)
        })
    }, [categoryId])
    
    return (
            <div>
            <h1 style = {{color: 'green'}}>{greeting}
            </h1>
            <ItemList products={products}/>
            </div>
    )


}


export default ItemListContainer