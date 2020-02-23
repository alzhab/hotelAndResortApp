import { connect } from 'react-redux';
import RoomDetails from './RoomDetails';

const mapStateToProps = state => {
  const { selectList, facilities } = state.roomDetails

  return { selectList, facilities }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const RoomDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomDetails);

export default RoomDetailsContainer;