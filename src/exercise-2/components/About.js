import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <section className="aboutUs">
                <p>Company:ThoughtWorks</p>
                <p>Location:Xi'an</p>
                
                <p>For more information,please</p>
                <p>view our <Link to='/'>website</Link>.</p>
            </section>
        )
    }
}

export default About;