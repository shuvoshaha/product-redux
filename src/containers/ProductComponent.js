import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { SetProduct } from '../redux/actions/productActions'
import { Link } from 'react-router-dom'

function ProductComponent() {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()

    const fetchData = async () => {
        await axios.get(`https://fakestoreapi.com/products`)
            .then((res) => {
                dispatch(SetProduct(res.data))
            })
            .catch(err => { console.log(err) })
    }
    useEffect(() => {
        fetchData()
    }, [])

    // console.log(products)
    return (
        <div className="container">
            <div className="productContainer">
            {
                products.map((product) => {
                    return(
                        <div className="ul links" key={product.id}>
                        <Link to={`/product/${product.id}`} onClick={() => setFalse(true)}>
                            <div className="cards">
                                <div className="image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="content">
                                    <h2> {product.title} </h2>
                                    <p>${product.price} </p>
                                    <h6> {product.category} </h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                    )
                })
            }
            
        </div>
        </div>
    )
}

export default ProductComponent
