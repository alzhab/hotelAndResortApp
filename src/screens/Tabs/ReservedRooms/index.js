import { connect } from 'react-redux';
import ReservedRooms from './ReservedRooms';

const mapStateToProps = state => {
  const { rooms } = state.reservedRooms

  return { rooms }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const ReservedRoomsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservedRooms);

export default ReservedRoomsContainer;