import React from 'react';
import { formatPrice } from '../helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Order extends React.Component {

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const order = this.props.order[key];
    const button = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    if (!fish || fish.status === 'unavailable') {
      return <li key={key}> Sorry, {fish ? fish.name : 'fish'} is no longer available!</li>
    }

    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup
          className="count"
          component="span"
          transitionName="count"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
          >
            <span key={order}>{order}</span>
          </CSSTransitionGroup>
          lbs {fish.name} {button}
        </span>
        <span className="price">{formatPrice(fish.price * order)}</span>
      </li>
    )
  };

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

        <CSSTransitionGroup 
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {orderIds.map(this.renderOrder)}
          <li className="total">
          <strong>Total:</strong>
          {formatPrice(total)}
          </li>
        </CSSTransitionGroup>

      </div>
    )
  }
}

Order.propTypes = {
  order: React.PropTypes.object.isRequired,
  fishes: React.PropTypes.object.isRequired,
  removeFromOrder: React.PropTypes.func.isRequired
}

export default Order;
