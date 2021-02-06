import { connect } from 'react-redux';
import { SignIn, Home } from './pages';
import { MapContainer } from './components';

function App({ firebaseUser }) {

  return (
    <div>
      <MapContainer />
      {!firebaseUser ? <SignIn /> : <Home />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  firebaseUser: state.firebaseUser,
});

export default connect(mapStateToProps)(App);
