import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFirebaseUser } from '../../redux/mainReduxDuck';
import { firebaseApp } from '../../firebase/init';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase/app';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: { signInSuccessWithAuthResult: () => false },
};

const SignIn = ({ setFirebaseUser }) => {
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
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseApp.auth()}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setFirebaseUser: (user) => dispatch(setFirebaseUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
