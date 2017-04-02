import { connect } from 'react-redux';
import NavBar from './nav_bar.jsx';
import { signup,
         signin,
         signout,
         receiveSessionErrors } from '../../actions/session_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors || []
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  signout: () => dispatch(signout()),
  receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
