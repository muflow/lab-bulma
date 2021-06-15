import React, { Component } from 'react';
import './coolButton.css'


class CoolButton extends Component {
    render() {
        return (
            <div className="btn-container">
            <a className={this.props.className}>{this.props.children}</a>
            </div>
        )
    }
}

export default CoolButton