import { connect } from 'react-redux';
import SignIn from './pages/signin';

function App({ firebaseUser }) {
  console.log({ firebaseUser });
  return <div>{!firebaseUser ? <SignIn /> : <div>you signed in </div>}</div>;
}

const mapStateToProps = (state) => ({
  firebaseUser: state.firebaseUser,
});

export default connect(mapStateToProps)(App);
