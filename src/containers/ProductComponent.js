import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { SetProduct } from '../redux/actions/productActions'

function ProductComponent() {
    const products = useSelector(state => state.allProducts.products)
    const { title, price } = products
    const dispatch = useDispatch()

    const fetchData = async () =>{
       await axios.get(`https://fakestoreapi.com/products`)
        .then((res) =>{
           dispatch(SetProduct(res.data))
        })
        .catch(err =>{ console.log(err) })
    }
    useEffect(() =>{
        fetchData()
    }, [])

    console.log(products)
    return (
        <div className="productContainer">
           <div className="ul links">
               <div className="cards">
                   <div className="imgage">
                      
                   </div>
                   <div className="content">
                       <h2> {title} </h2>
                       <p>$ {price} </p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default ProductComponent
