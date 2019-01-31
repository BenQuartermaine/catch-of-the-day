import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor(props) {
    super();
    this.renderFish = this.renderFish.bind(this);
  }

 renderFish(key) {
    const fish = this.props.fishes[key]
    return (
      <form key={key} className="fish-edit">
        <input key={key} type="text"  placeholder="Fish name" value={fish.name}/>
        <input key={key} type="text" placeholder="Price" value={fish.price} />
        <select key={key} value={fish.status} > 
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea key={key} placeholder="Description" value={fish.description}>
        </textarea>
        <input key={key} type="text" placeholder="Fish Image"/>
      </form>
    )
  }

  render() {
    return (
      <div>
      {
        Object
          .keys(this.props.fishes)
          .map(this.renderFish)
      }
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Samples</button>
      </div>
    )
  }
}

export default Inventory;