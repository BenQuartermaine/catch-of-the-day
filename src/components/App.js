import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    // Super allows the 'this' keyword to be called
    super();

    // Bind the function to this class 
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // Copy fishes state
    const fishes = {...this.state.fishes};
    // Make a timestamp
    const timeStamp = Date.now();
    // Set the new state object 
    fishes[`fish-${timeStamp}`] = fish;
    // Update the state
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
    console.log('Samples Loaded...');
  }

  componentDidMount() {
    this.loadSamples();
    console.log('loaded samples');
  }


  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh food market" />
          <ul className="list-of-fishes">
            {
              Object
                  .keys(this.state.fishes)
                  .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;