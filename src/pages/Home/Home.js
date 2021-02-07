import { connect } from 'react-redux';
import { nukeFirebaseUser } from '../../redux/mainReduxDuck';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CrimeReportInfo } from '../../components';
import { AddAlert } from '../../components';

function Home({ firebaseUser, downSm }) {
  return (
    <div>
      <SearchBar downSm={downSm} />
      <CrimeReportInfo />
      <AddAlert />
    </div>
  );
}

const mapStateToProps = (state) => ({ firebaseUser: state.firebaseUser });

const mapDispatchToProps = (dispatch) => ({
  nukeFirebaseUser: () => dispatch(nukeFirebaseUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
