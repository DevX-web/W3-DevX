import { connect } from 'react-redux';
import { SignIn, Home } from './pages';
import { MapContainer } from './components';
import { useMediaQuery } from '@geist-ui/react';

function App({ firebaseUser }) {
  // TODO: Add create report button and check if user is logged in
  const downSm = useMediaQuery('xs');

  return (
    <>
      <MapContainer />
      <SignIn downSm={downSm} />
      <Home downSm={downSm} />
    </>
  );
}

const mapStateToProps = (state) => ({
  firebaseUser: state.firebaseUser,
});

export default connect(mapStateToProps)(App);
