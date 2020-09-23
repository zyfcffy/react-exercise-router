import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <section className="home">
                <p>This is a beautiful Home Page</p>
                <p>And the url is {this.props.location.pathname}</p>
            </section>
        )
    }
}

export default Home;