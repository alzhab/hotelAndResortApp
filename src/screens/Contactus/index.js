import { connect } from 'react-redux';
import Contactus from './Contactus';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const ContactusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contactus);

export default ContactusContainer;