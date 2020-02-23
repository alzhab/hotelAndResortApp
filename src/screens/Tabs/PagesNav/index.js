import { connect } from 'react-redux';
import PagesNav from './PagesNav';

const mapStateToProps = state => {
  const { links } = state.pages

  return { links }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const PagesNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesNav);

export default PagesNavContainer;