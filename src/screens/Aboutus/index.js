import { connect } from 'react-redux';
import Aboutus from './Aboutus';

const mapStateToProps = state => {
  const { statistic } = state.aboutus

  return { statistic }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const AboutusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Aboutus);

export default AboutusContainer;