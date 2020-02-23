import { connect } from 'react-redux';
import Signin from './Signin';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);

export default SigninContainer;