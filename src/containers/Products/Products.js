import React, { Component } from 'react'

import Product from '../../component/Product/Product'
import productsData from '../../data-mockup/products-mockup'

import './Products.css'

class Products extends Component{
    render(){
        return(
            <div id='app-products'>
                {productsData.map(el => {
                    return <Product key={el.id} title={el.title} description={el.description} price={el.price}/>
                })}
            </div>
        )
    }
}

export default Products