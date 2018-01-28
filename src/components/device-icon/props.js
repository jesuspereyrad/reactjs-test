// External
import PropTypes from 'prop-types';

// Internal
// import Constant from './constant';

const MOCK = ['audio', 'camera', 'gaming'];

const propTypes = {

    /*  
    * Type is an string from an array of string
    * with possible values store in ../assets/images 
    */
    type: PropTypes.oneOfType(MOCK).isRequired,

    /* 
    * If service is true replace the second position
    * of image source with service.
    */
    service: PropTypes.bool,

    /* 
    * If power is true replace the third position of 
    * image source with power.
    */
    power: PropTypes.bool,

    /* 
    * Style for the component
    */
    style: PropTypes.any
};

const defaultProps = {
  power: false,
  service: false,
};

export default {
  propTypes,
  defaultProps
};
