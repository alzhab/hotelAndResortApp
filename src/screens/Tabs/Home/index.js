import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => {
  const { categories, selectList, services, favorites } = state.home

  return { categories, selectList, services, favorites }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;