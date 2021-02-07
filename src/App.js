import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, useMediaQuery } from '@geist-ui/react';
import { MapWrapper } from './components';
import { firebaseApp } from './firebase/init';
import { setFirebaseUser } from './redux/mainReduxDuck';
import { signInWithGoogle, signOut } from './firebase/authApi';
import { Home } from './pages/';

function App({ firebaseUser, setFirebaseUser }) {
  const [signInLoading, setSignInLoading] = useState(true);
  const downSm = useMediaQuery('xs');

  useEffect(() => {
    const unsubAuthListener = firebaseApp.auth().onAuthStateChanged((user) => {
      setFirebaseUser(user);
      setSignInLoading(false);
    });
    return () => {
      unsubAuthListener();
    };
  }, [setFirebaseUser]);

  const onSignIn = (callback) => {
    signInWithGoogle(callback, (error) => {
      console.error(error);
      callback(error);
    });
  };

  const onSignOut = (callback) => {
    signOut(callback, (error) => {
      console.error(error);
      callback(error);
    });
  };

  const onSignInButtonClick = () => {
    setSignInLoading(true);
    if (firebaseUser) {
      onSignOut(() => setSignInLoading(false));
    } else {
      onSignIn(() => setSignInLoading(false));
    }
  };

  // TODO: Add create report button and check if user is logged in

  return (
    <>
      <MapWrapper />
      <Home downSm={downSm} />

      {!downSm && (
        <div className="authentication-switch">
          <Button
            auto
            type="success-light"
            onClick={onSignInButtonClick}
            loading={signInLoading}
          >
            {!firebaseUser ? 'Sign In' : 'Sign Out'}
          </Button>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  firebaseUser: state.firebaseUser,
});

const mapDispatchToProps = (dispatch) => ({
  setFirebaseUser: (user) => dispatch(setFirebaseUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
