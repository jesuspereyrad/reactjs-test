import React, { Component } from 'react';
import { DeviceIcon } from '../../components';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      value: 0
    };
    this.renderButton = this.renderButton.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.renderDeviceIcon = this.renderDeviceIcon.bind(this);
    this.renderMultipleDeviceIcon = this.renderMultipleDeviceIcon.bind(this);
  }

  /**
  * The increase counter set a new state with value = value + counter
  */
  increaseCounter() {
    this.setState({value: this.state.value + this.state.counter})
  }


  /**
  * The decrease counter set a new state with value = value - counter
  */
  decreaseCounter() {
    if (this.state.value - this.state.counter > 0) {
      this.setState({value: this.state.value - this.state.counter})
    }
  }

  /**
  * The reset counter set a value and counter to 0
  */
  resetCounter() {
    this.setState({value: 0, counter: 1})
  }

  /**
  * The update counter change the counter value when onChange event is call
  */
  updateCounter(counter) {
    this.setState({counter: counter.target.value * 1})
  }

  
  /**
  * The render button create a single button.
  * @return {ReactElement} JSX component
  */
  renderButton(name, action, className) {
    return (
      <div>
        <button type="button" className={className} onClick={action}>{name}</button>
      </div>
    )
  }

    
  /**
  * The render device icon create a single DeviceIcon.
  * @return {ReactElement} JSX component
  */
  renderDeviceIcon() {
    return (
      <DeviceIcon 
        type="audio"
        power={true}
        service={true}
      />
    );
  }

    
  /**
  * The render text field create a single textfield with type number.
  * @return {ReactElement} JSX component
  */
  renderTextField() {
    return (
      <div>
        <input type="number" className="form-control" value={this.state.counter} onChange={this.updateCounter}/>
      </div>
    )
  }

    
  /**
  * The render multiple device icon return a list of device icon component.
  * @return {ReactElement} JSX component
  */
  renderMultipleDeviceIcon() {
    let list = [];
    for (let i = 0; i < this.state.value; i++) {
      list.push(this.renderDeviceIcon());
    }
    return list;
  }

    
  /**
  * The render button create a button.
  * @return {ReactElement} JSX component
  */
  render() {
    console.log(this.state.counter);
    return (
      <div className="container-fluid">
        <div className="row container-buttons mb-3 mt-5">
          {this.renderButton("Reset", this.resetCounter, "btn btn-secondary square" )}
          {this.renderButton("Increase", this.increaseCounter, "btn btn-primary square" )}
          {this.renderButton("Decrease", this.decreaseCounter, "btn btn-warning square" )}
          {this.renderTextField()}
          <p className="text"> Current Value {this.state.value} </p>
        </div>
        <div className="box">
          {this.renderMultipleDeviceIcon()}
        </div>
      </div>
    );
  }
}

export default Home;
