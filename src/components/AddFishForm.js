import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log(this);

    const fish = {
      name: this.storeInput.value,
      price: this.storeInput.value,
      status: this.storeInput.value,
      description: this.storeInput.value,
      image: this.storeInput.value
    }
    console.log(fish);
  }

  render() {
    return (
      <form className='fish-edit' onSubmit={this.createFish.bind(this) }>
        <input ref={(input) => this.storeInput = input} type="text" placeholder='Fish name'/>
        <input ref={(input) => this.storeInput = input} type="text" placeholder='Price' />
        <select ref={(input) => this.storeInput = input}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea ref={(input) => this.storeInput = input} placeholder='Description'></textarea>
        <input ref={(input) => this.storeInput = input} type="text" placeholder='Fish Image' />
        <button>Add Fish +</button>
      </form>
    )
  }
}


export default AddFishForm;