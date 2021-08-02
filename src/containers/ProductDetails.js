import React from 'react'
import { SelectedProduct } from '../redux/actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productID } = useParams()
    const dispatch = useDispatch()
    const state = useSelector(state => state.products)

    const fetchData = async () =>{
        await axios.get(`https://fakestoreapi.com/products/${productID}`)
        .then(res => dispatch(SelectedProduct(res.data)))
        .catch(err => console.log(err))
    }
    console.log(state)
    return (
        <div className="product-details">
            <h2>Product details</h2>
        </div>
    )
}

export default ProductDetails
