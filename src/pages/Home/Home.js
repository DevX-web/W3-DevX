import { connect } from 'react-redux';
import { Button } from '@geist-ui/react';
import { nukeFirebaseUser } from '../../redux/mainReduxDuck';
import { firebaseApp } from '../../firebase/init';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home({ nukeFirebaseUser, firebaseUser, downSm }) {
  const onSignOut = async () => {
    nukeFirebaseUser();
    await firebaseApp.auth().signOut();
  };

  return (
    <div>
      <SearchBar downSm={downSm} />
      {!downSm && firebaseUser && (
        <div className="authentication-switch">
          <Button type="success-light" auto onClick={onSignOut}>
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({ firebaseUser: state.firebaseUser });

const mapDispatchToProps = (dispatch) => ({
  nukeFirebaseUser: () => dispatch(nukeFirebaseUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
