import React, { Component } from 'react';
import 'bulma/css/bulma.css'



class Signup extends Component {
    render() {
        return (
            <div> {this.props.children} </div>
        )
    }
}


export default Signup