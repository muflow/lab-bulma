import React, { Component } from 'react'
import './Message.css'

class Message extends Component {
    render() {
        return (
          <div class="mess-container">
            <article class="message is-info">
  <div className="message-header">
    <p className="parag">{this.props.parag}</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body"> {this.props.children} </div>
</article>
</div>
            

        )
    }
}



export default Message