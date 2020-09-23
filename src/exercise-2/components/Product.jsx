import React , { Component} from 'react';
import data from "../mockups/data.json";

class Product extends Component {
    render() {
        const id = this.props.match.params.id;

        const product = Object.values(data).filter(item=>item.id===Number(id))[0];
  
        return (
            <section className="product">
                <h1>Product Details:</h1>
                {Object.keys(product).map(key=><p key={key}>{key}:{product[key]}</p>)}
            </section>
        )
    }
}

export default Product;