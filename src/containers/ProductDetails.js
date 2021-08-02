import React, { useEffect, useState } from 'react'
import { SelectedProduct, RemoveSelectedProduct } from '../redux/actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProductDetails = () => {
    const [loading, setLoading] = useState(false)
    const { productID } = useParams()
    const dispatch = useDispatch()
    const state = useSelector(state => state.product)
    const { title, price, image, category } = state;

    const fetchData = async () =>{
        await axios.get(`https://fakestoreapi.com/products/${productID}`)
        .then(res =>{
            dispatch(SelectedProduct(res.data))
            setLoading(true)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (productID && state !== '') fetchData()
        return () =>{
            dispatch(RemoveSelectedProduct())
        }
    }, [productID])


    console.log(state.title)
    return (
       <>
       {/* <Helmet>
       <meta charSet="utf-8" />
                <title> {title} </title>
                <link rel="canonical" href="http://mysite.com/example" />
       </Helmet> */}
        { Object.keys(state).length !== 0 ? <div className="product-details">
            <h2> {title} </h2>
        </div>
    : <p>Loading...</p>    
    }
        </>
    )
}

export default ProductDetails
