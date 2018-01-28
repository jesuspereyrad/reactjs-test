// External
import React, { PureComponent } from 'react';

// Internal
import Props from './props';
import Constant from './constant';
import "./style.css";

/**
 * Base component for create device icon.
*/
class DeviceIcon extends PureComponent {
  /**
  * Get the string for the url of the image
  * @return {String}
  */
  getIconUrl() {
    if(this.props.type) {
      return (`types-${this.props.type}-none-${this.props.service ? 'service' : 'none'}-${this.props.power ? 'power' : 'none'}-none.svg`);
    } else {
      console.warn("Missing property type");
    }
  }

  /**
  * Render the svg image
  * @return {ReactElement} JSX component
  */
  renderImage() {
    const path = require(`../../resources/assets/images/${this.getIconUrl()}`);
    return (
      <img src={(path)} className="image-style" alt="icon"/>
    );
  }

  /**
  * Render a warning text if property type is undefined
  * @return {ReactElement} JSX component
  */
  renderWarningMessage() {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {Constant.warnMessage}.
      </div>
    )
  }

  /**
  * The main render function. Part of the React lifecycle methods
  * @return {ReactElement} JSX component
  */
  render() {
    return (
      <div id="device-icon" style={this.props.style}>
        {this.props.type ? this.renderImage() : this.renderWarningMessage()}
      </div>
    );
  }
}

// All the props from ./props
DeviceIcon.propTypes = Props.propTypes;

// Default props from ./props
DeviceIcon.defaultProps = Props.defaultProps;

export default DeviceIcon;
