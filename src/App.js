import { connect } from 'react-redux';
import SignIn from './pages/signin';
import Home from './pages/home';

function App({ firebaseUser }) {
  return <div>{!firebaseUser ? <SignIn /> : <Home />}</div>;
}

const mapStateToProps = (state) => ({
  firebaseUser: state.firebaseUser,
});

export default connect(mapStateToProps)(App);
