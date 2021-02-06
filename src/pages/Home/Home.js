import { connect } from 'react-redux';
import { Button } from '@geist-ui/react';
import { nukeFirebaseUser } from '../../redux/mainReduxDuck';
import { firebaseApp } from '../../firebase/init';

function Home({ nukeFirebaseUser }) {
  const onSignOut = async () => {
    nukeFirebaseUser();
    await firebaseApp.auth().signOut();
  };

  return (
    <div>
      <div className="authentication-switch">
        <Button type="success-light" auto onClick={onSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  nukeFirebaseUser: () => dispatch(nukeFirebaseUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
