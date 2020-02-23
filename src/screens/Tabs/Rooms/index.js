import { connect } from 'react-redux';
import Rooms from './Rooms';

const mapStateToProps = state => {
  const { popular, luxury, discovery } = state.rooms

  return { popular, luxury, discovery }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const RoomsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);

export default RoomsContainer;