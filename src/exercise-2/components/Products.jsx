import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../mockups/data.json'

class Products extends Component {
    state = {
        products:{}
    }

    componentDidMount(){
        this.setState({ 
            products:data
        })
    }

    render () {
        return(     
                <section className="products">
                <h1>All Products</h1>
                <div className="product">
                    {Object.keys(this.state.products).map((key,index) => 
                    <Link key={index} className="product" to={`/products/${this.state.products[key].id}`}>{key}</Link>
                    )}
                </div>
                </section>
        )
    }
}

export default Products;