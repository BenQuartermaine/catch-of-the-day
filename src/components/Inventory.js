import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  handleChange = (e, key) => {
    const fish = this.props.fishes[key]
    const updatedFish = {
      ...fish, 
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  };

 renderFish = key => {
    const fish = this.props.fishes[key]
    return (
      <div className="fish-edit" key={key}>
        <input name="name" type="text"  placeholder="Fish name" value={fish.name} onChange={(e) => this.handleChange(e, key)} />
        <input name="price" type="text" placeholder="Price" value={fish.price} onChange={(e) => this.handleChange(e, key)} />
        <select name="status" value={fish.status} onChange={(e) => this.handleChange(e, key)} > 
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" placeholder="Description" value={fish.desc} onChange={(e) => this.handleChange(e, key)} >
        </textarea>
        <input name="image" type="text" placeholder="Fish Image" value={fish.image} onChange={(e) => this.handleChange(e, key)}/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  };

  render() {
    return (
      <div>
        {Object.keys(this.props.fishes).map(this.renderFish)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Samples</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  addFish: React.PropTypes.func.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func
}

export default Inventory;