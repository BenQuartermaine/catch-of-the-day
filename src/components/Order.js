import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  constructor(props) {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const fish = this.props.fishes[key];
    const order = this.props.order[key];

    if (!fish || fish.status === 'unavailable') {
      return <li key={key}> Sorry, {fish ? fish.name : 'fish'} is no longer available!</li>
    }
    return (
      <li key={key}>
        <span>{order} lbs {fish.name}</span>
        <span className="price">{formatPrice(fish.price * order)}</span>
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const order = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return (prevTotal + fish.price * order || 0);  
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
          <strong>Total:</strong>
          {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;