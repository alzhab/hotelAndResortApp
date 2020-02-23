import { connect } from 'react-redux';
import PageNotFound from './PageNotFound';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const PageNotFoundContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNotFound);

export default PageNotFoundContainer;