import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div>message: {this.props.params.id}</div>
    );
  }
}

export default Message;