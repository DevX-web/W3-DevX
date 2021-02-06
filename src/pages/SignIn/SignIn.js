import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFirebaseUser } from '../../redux/mainReduxDuck';
import { firebaseApp } from '../../firebase/init';
import firebase from 'firebase/app';
import { Button } from '@geist-ui/react';

const SignIn = ({ setFirebaseUser }) => {
  const onSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setFirebaseUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubAuthListener = firebaseApp.auth().onAuthStateChanged((user) => {
      setFirebaseUser(user);
    });
    return () => {
      unsubAuthListener();
    };
  }, [setFirebaseUser]);

  return (
    <div className="authentication-switch">
      <div className="authentication-switch">
        <Button type="success-light" auto onClick={onSignIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setFirebaseUser: (user) => dispatch(setFirebaseUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
