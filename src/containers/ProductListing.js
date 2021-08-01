import React from 'react'
import { useSelector } from 'react-redux'

const ProductListing = () => {
    const product = useSelector(state => state.allProducts.products);
    console.log(product[0].title)
    const {  title, category, price } = product[0]

    return (
        <div className="product-listing col-4">
            <div className="product-container">
                <h2> {title} </h2>
                <p>Price: $ {price} </p>
                <h6> {category} </h6>
            </div>
        </div>
    )
}

export default ProductListing
