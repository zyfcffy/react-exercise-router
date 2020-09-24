import React , { Component} from 'react';
import data from "../mockups/data.json";

class Product extends Component {
    state = {
        products: {},
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const product = Object.values(data).find(item => item.id === Number(id));
        this.setState({
            products:product
        })
    }

    render() {
        return (
            <section className="product">
                <h1>Product Details:</h1>
                {Object.keys(this.props.product).map(key=><p key={key}>{key}:{this.props.product[key]}</p>)}
                <p>URL:{this.props.location.pathname}</p>
            </section>
        )
    }
}

export default Product;