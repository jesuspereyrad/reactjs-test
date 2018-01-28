import React, { Component } from 'react';
import { DeviceIcon } from '../../components';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      value: 0,
      fail: false
    };
    this.renderButton = this.renderButton.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.renderDeviceIcon = this.renderDeviceIcon.bind(this);
    this.renderMultipleDeviceIcon = this.renderMultipleDeviceIcon.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.setFail = this.setFail.bind(this);
  }

  /**
  * The increase counter set a new state with value = value + counter
  */
  increaseCounter() {
    this.setState({value: parseInt(this.state.value) + this.state.counter})
  }

  /**
  * The set fail set a new state with an error
  */
  setFail() {
    this.setState({fail: true});
  }

  /**
  * The decrease counter set a new state with value = value - counter
  */
  decreaseCounter() {
    if (this.state.value - this.state.counter >= 0) {
      this.setState({value: parseInt(this.state.value) - this.state.counter})
    }
  }

  /**
  * The reset counter set a value and counter to 0
  */
  resetCounter() {
    this.setState({value: 0, counter: 1, fail: false})
  }

  /**
  * The update counter change the counter value when onChange event is call
  */
  updateCounter(counter) {
    if(counter.target.value === '') {
      this.setState({counter: counter.target.value, fail: true})

    }
    if (counter.target.value > 0) {
      this.setState({counter: counter.target.value * 1, fail: false})
    }
  }

  /**
  * The render alert create a aler when counter is undefined.
  * @return {ReactElement} JSX component
  */
  renderAlert() {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> Counter is undefined, Please insert a positive number.
      </div>
    );
  }

  /**
  * The render button create a single button.
  * @return {ReactElement} JSX component
  */
  renderButton(name, action, className) {
    return (
      <div>
        <button type="button" className={className} disabled={this.props.fail} onClick={action}>{name}</button>
      </div>
    )
  }

    
  /**
  * The render device icon create a single DeviceIcon.
  * @return {ReactElement} JSX component
  */
  renderDeviceIcon(index) {
    return (
      <DeviceIcon
        key={index}
        type="audio"
        power={false}
        service={false}
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
        <input type="number" min="1" className="form-control" value={this.state.counter} onChange={this.updateCounter}/>
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
      list.push(this.renderDeviceIcon(i));
    }
    return list;
  }

    
  /**
  * The render button create a button.
  * @return {ReactElement} JSX component
  */
  render() {
    return (
      <div className="container-fluid">
        {this.state.fail ? this.renderAlert() : []}
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
