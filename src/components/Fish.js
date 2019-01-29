import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.details.name}</h1>
        <p>{this.props.details.desc}</p>
      </div>
    )
  }
}

export default Fish;