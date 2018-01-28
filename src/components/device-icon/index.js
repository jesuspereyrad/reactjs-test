// External
import React, { PureComponent } from 'react';

// Internal
import Props from './props';
import Constant from './constant';
// import Assets from '../../../public/assets';
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
    return (`types-${this.props.type}--${this.props.service ? 'service' : ''}-${this.props.power ? 'power' : ''}-.svg`);
  }

  /**
  * The main render function. Part of the React lifecycle methods
  * @return {ReactElement} JSX component
  */
  render() {
    const path = require(`../../resources/assets/images/${this.getIconUrl()}`);
    return (
      <div id="device-icon" style={this.props.style}>
        <img src={(path)} className="image-style" alt="icon"/>
      </div>
    );
  }
}

// All the props from ./props
DeviceIcon.propTypes = Props.propTypes;

// Default props from ./props
DeviceIcon.defaultProps = Props.defaultProps;

export default DeviceIcon;
