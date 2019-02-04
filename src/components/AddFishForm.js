import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value
    }
    this.props.addFish(fish);
    this.form.reset();
  }

  render() {
    return (
      <form ref={(input) => this.form = input} className='fish-edit' onSubmit={this.createFish.bind(this)}>
        <input ref={(input) => this.name = input} type="text" placeholder='Fish name'/>
        <input ref={(input) => this.price = input} type="text" placeholder='Price' />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea ref={(input) => this.description = input} placeholder='Description'></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder='Fish Image' />
        <button>Add Fish +</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;